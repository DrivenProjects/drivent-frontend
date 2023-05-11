import React from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaRegUser } from 'react-icons/fa';

function RoomCard({ room, allBookedRooms }) {
  let occupied = 0;

  for (let i = 0; i < allBookedRooms.length; i++) {
    if (allBookedRooms[i] === room.id) {
      occupied++;
    }
  }

  const vaciences = room.capacity - occupied;

  const iconsFilled = Array(occupied).fill(<FaUserAlt />);
  const iconsEmpty = Array(vaciences).fill(<FaRegUser />);
  return (
    <Container>
      <p>{room.name}</p>
      <div>
        <div>
          {iconsFilled.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
          {iconsEmpty.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 190px;
  height: 45px;
  padding: 0 10px;
  border: 1px solid #cecece;
  border-radius: 10px;
  p {
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    color: #454545;
  }
  div {
    display: flex;
    gap: 4px;
  }
`;

export default RoomCard;
