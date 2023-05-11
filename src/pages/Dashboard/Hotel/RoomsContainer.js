import React from 'react';
import styled from 'styled-components';
import RoomCard from './RoomCard';

function RoomsContainer({ rooms, allBookedRooms }) {
  return (
    <Container>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} allBookedRooms={allBookedRooms} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export default RoomsContainer;
