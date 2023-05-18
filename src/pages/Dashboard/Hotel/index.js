import styled from 'styled-components';
import HotelsContainer from './HotelsContainer';
import RoomsContainer from './RoomsContainer';
import { useState } from 'react';
import useRoomsBooked from '../../../hooks/api/useRoomsBooked';
import HotelResume from '../../../components/HotelResume';

export default function Hotel() {
  const [rooms, setRooms] = useState([]);
  const { roomsBooked } = useRoomsBooked();

  const allBookedRooms = roomsBooked?.map((r) => r.roomId);

  return (
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
      {/** ///// implementação do desktop 12
      <h3>Você já escolheu seu quarto</h3>
      <HotelResume/>
      <ChangeRoomButton>TROCAR DE QUARTO</ChangeRoomButton>
    */}
    </Container>
  );
}

/* <ContainerWarning>
    <p>Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades</p>
  </ContainerWarning> */

//   <ContainerWarning>
//   <p>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</p>
// </ContainerWarning>

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
  p {
    margin: auto;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #8e8e8e;
  }
`;

const ChangeRoomButton = styled.button`
  height: 37px;
  width: 182px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 10px 0px #00000040;
  margin-top: 20px;
  cursor: pointer;
`;
