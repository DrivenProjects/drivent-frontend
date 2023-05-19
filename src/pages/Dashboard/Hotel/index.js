import styled from 'styled-components';
import HotelsContainer from './HotelsContainer';
import RoomsContainer from './RoomsContainer';
import { useState } from 'react';
import useRoomsBooked from '../../../hooks/api/useRoomsBooked';
import HotelResume from '../../../components/HotelResume';
import { toast } from 'react-toastify';
import useSaveBooking from '../../../hooks/api/useSaveBooking';
import useBooking from '../../../hooks/api/useBooking';

export default function Hotel() {
  const [rooms, setRooms] = useState([]);
  const { roomsBooked } = useRoomsBooked();
  const { booking } = useBooking();
  const [ableReserveButton, setAbleReserveButton] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [hotelClicked, setHotelClicked] = useState(null);

  const { saveBooking } = useSaveBooking();

  const allBookedRooms = roomsBooked?.map((r) => r.roomId);
  async function handleSaveBooking(e) {
    e.preventDefault();
    const newData = {
      roomId: selectedRoom,
    };

    try {
      await saveBooking(newData);
      toast('Reserva realizada!');
      // renderize resumo da reserva
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  return (
    <Container>
      <h1>Escolha de hotel e quarto</h1>
      { !booking ? (
        <>
          <h3>Primeiro, escolha seu hotel</h3>
          <HotelsContainer
            rooms={rooms}
            setRooms={setRooms}
            setAbleReserveButton={setAbleReserveButton}
            hotelClicked={hotelClicked}
            setHotelClicked={setHotelClicked}
          />
          {rooms?.length > 0 && (
            <>
              <h3>Ótima pedida! Agora escolha seu quarto:</h3>
              <RoomsContainer
                rooms={rooms}
                allBookedRooms={allBookedRooms}
                ableReserveButton={ableReserveButton}
                setAbleReserveButton={setAbleReserveButton}
                selectedRoom={selectedRoom}
                setSelectedRoom={setSelectedRoom}
              />
            </>
          )}
          {ableReserveButton && <button onClick={(e) => handleSaveBooking(e)}>Reserve Quarto</button>}
        </>
      ) : (
        <>
          <h3>Você já escolheu seu quarto</h3>
          <HotelResume booking={booking}/>
          <ChangeRoomButton>TROCAR DE QUARTO</ChangeRoomButton>
        </>
      ) }
      
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
  button {
    margin-top: 40px;
    width: 182px;
    height: 37px;
    background: #e0e0e0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 4px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000000;
    text-transform: uppercase;
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
