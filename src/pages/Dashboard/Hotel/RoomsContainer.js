import React from 'react';
import styled from 'styled-components';
import RoomCard from './RoomCard';

function RoomsContainer({ rooms, allBookedRooms, setAbleReserveButton, selectedRoom, setSelectedRoom }) {
  return (
    <Container>
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
          allBookedRooms={allBookedRooms}
          setAbleReserveButton={setAbleReserveButton}
        />
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
