import styled from 'styled-components';
import HotelsContainer from './HotelsContainer';
import RoomsContainer from './RoomsContainer';
import { useState } from 'react';
import useRoomsBooked from '../../../hooks/api/useRoomsBooked';
import HotelResume from '../../../components/HotelResume';
import { toast } from 'react-toastify';
import useSaveBooking from '../../../hooks/api/useSaveBooking';
import useBooking from '../../../hooks/api/useBooking';
import useHotel from '../../../hooks/api/useHotel';
import useToken from '../../../hooks/useToken';
import api from '../../../services/api';

export default function Hotel({ hotel }) {
  const [rooms, setRooms] = useState([]);
  const token = useToken();
  const { roomsBooked } = useRoomsBooked();
  const { booking } = useBooking();
  const [ableReserveButton, setAbleReserveButton] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [hotelClicked, setHotelClicked] = useState(null);
  const { hotels } = useHotel();
  const { saveBooking } = useSaveBooking();
  const allBookedRooms = roomsBooked?.map((r) => r.roomId);
  const [update, setUpdate] = useState(false);
  const [ableUpdateButton, setAbleUpdateButton] = useState(true);
  console.log(update);

  /*   console.log(openRooms);
 */  async function handleSaveBooking(e) {
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

  const handleClick = () => {
    setAbleUpdateButton(false);
    setUpdate(true);
  };
  async function handleUpdateBooking(e) {
    e.preventDefault();
    setTimeout(() => {
      window.location.reload();
    }, 1500);    
    try {
      const response = await api.put(
        `/booking/${booking.id}`,
        { roomId: selectedRoom },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      /* await updateBooking(update, booking.id, token);
      console.log(token); */
      toast('Reserva realizada!');
      return response.data;
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  return (
    <Container>
      <h1>Escolha de hotel e quarto</h1>
      {!booking ? (
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
          <HotelResume booking={booking} hotels={hotels} />
          {ableUpdateButton && <ChangeRoomButton onClick={() => handleClick(true)} > Trocar de quarto</ChangeRoomButton>}
          {update === true && (
            <>
              <HotelsContainer
                rooms={rooms}
                setRooms={setRooms}
                setAbleReserveButton={setAbleReserveButton}
                hotelClicked={hotelClicked}
                setHotelClicked={setHotelClicked}
              />
              <RoomsContainer
                rooms={rooms}
                allBookedRooms={allBookedRooms}
                ableReserveButton={ableReserveButton}
                setAbleReserveButton={setAbleReserveButton}
                selectedRoom={selectedRoom}
                setSelectedRoom={setSelectedRoom}
              />
              <ChangeRoomButton onClick={(e) => handleUpdateBooking(e)} > Trocar de quarto</ChangeRoomButton>
            </>
          )}
        </>
      )}
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
