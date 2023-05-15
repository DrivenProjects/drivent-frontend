import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useToken from '../../../hooks/useToken';
import HotelsContainer from './HotelsContainer';
import RoomsContainer from './RoomsContainer';
import useRoomsBooked from '../../../hooks/api/useRoomsBooked.js';
import styled from 'styled-components';


export default function Hotel() {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [rooms, setRooms] = useState([]);
  const { roomsBooked } = useRoomsBooked();
  const [ticketIncludesHotel, setTicketIncludesHotel] = useState(false);

  const allBookedRooms = roomsBooked?.map((r) => r.roomId);
  const token = useToken();

  useEffect(() => {
    async function checkPaymentStatus() {
      try {
        // Verificando se o token está presente
        if (!token) {
          setPaymentConfirmed(false);
          setTicketIncludesHotel(false);
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        // Fazer a solicitação GET para verificar o status do pagamento
        const response = await axios.get('http://localhost:4000/payments?ticketId=1', config);
        const data = response.data;
        console.log(data);

        // Verificar se o pagamento foi confirmado
        if (data.paymentConfirmed) {
          setPaymentConfirmed(true);
        } else {
          setPaymentConfirmed(false);
        }
      } catch (err) {
        console.log(err.message);
      }
    }

    async function checkTicketIncludesHotel() {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      try {
        const response = await axios.get('http://localhost:4000/tickets/types', config);
        const ticketTypes = response.data;
        console.log(ticketTypes);
        const includesHotel = ticketTypes.some((type) => type.includesHotel);
        setTicketIncludesHotel(includesHotel);
      } catch (err) {
        console.log(err.message);
      }
    }
    checkTicketIncludesHotel();
    checkPaymentStatus();
  }, [token]);

  return (
    <div>
      {!paymentConfirmed && (
        <ContainerWarning>
          <p>Você precisa ter confirmado pagamento antes de fazer a escolha da hospedagem.</p>
        </ContainerWarning>
      )}
  
      {paymentConfirmed && !ticketIncludesHotel && (
        <ContainerWarning>
          <p>Sua modalidade de ingresso não inclui hospedagem.</p>
          <div>
            <p>Prossiga para a escolha de atividades.</p>
          </div>
        </ContainerWarning>
      )}
  
      {paymentConfirmed && ticketIncludesHotel && (
        <Container>
          <h1>Escolha de hotel e quarto</h1>
          <h3>Primeiro, escolha seu hotel</h3>
          <HotelsContainer rooms={rooms} setRooms={setRooms} />
  
          {rooms?.length > 0 && (
            <>
              <h3>Ótima pedida! Agora escolha seu quarto:</h3>
              <RoomsContainer rooms={rooms} allBookedRooms={allBookedRooms} />
            </>
          )}
        </Container>
      )}
    </div>
  );
}

const Container = styled.div`
  padding: 20px 34px;
  height: 100%;
  font-family: 'Roboto';
  font-style: normal;
  h1 {
    font-weight: 400;
    font-size: 34px;
    color: #000000;
  }
  h3 {
    margin: 37px 0 17px 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;

const ContainerWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 200px;
  p {
    margin: auto;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #8e8e8e;
  }
`;
