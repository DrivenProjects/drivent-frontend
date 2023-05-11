import React from 'react';
import styled from 'styled-components';
import useRoomsByHotelId from '../../../hooks/api/useRoomsByHotelId';

function HotelCard({ hotel, setRooms }) {
  const { roomsByHotelId } = useRoomsByHotelId(hotel.id);

  function openRooms() {
    setRooms(roomsByHotelId?.Rooms);
  }

  return (
    <Container onClick={openRooms}>
      <img src={hotel.image} alt="" />
      <h4>{hotel.name}</h4>
      <h6>Tipos de acomodação:</h6>
      <p>Single e Doble</p>
      <h6>Vagas disponíveis:</h6>
      <p>{hotel.Rooms.reduce((sum, room) => sum + room.capacity, 0)}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 12px 12px 12px;
  width: 194px;
  height: 264px;
  background: #ebebeb;
  border-radius: 10px;
  img {
    border-radius: 10px;
  }

  h4 {
    margin: 10px 0 12px 0;
    font-weight: 400;
    font-size: 20px;
    color: #343434;
  }

  h6,
  p {
    font-size: 12px;
    color: #3c3c3c;
  }
  h6 {
    font-weight: 700;
  }
  p {
    font-weight: 400;
    margin-top: 4px;
    margin-bottom: 13px;
  }
`;

export default HotelCard;
