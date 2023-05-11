import React from 'react';
import styled from 'styled-components';
import HotelCard from './HotelCard';
import useHotel from '../../../hooks/api/useHotel';

function HotelsContainer({ rooms, setRooms }) {
  const { hotels } = useHotel();

  return (
    <Container>
      {hotels?.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} rooms={rooms} setRooms={setRooms} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export default HotelsContainer;
