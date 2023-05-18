import React from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaRegUser } from 'react-icons/fa';

function RoomCard({ room, allBookedRooms, selectedRoom, setSelectedRoom, setAbleReserveButton }) {
  let occupied = 0;

  for (let i = 0; i < allBookedRooms?.length; i++) {
    if (allBookedRooms[i] === room.id) {
      occupied++;
    }
  }

  const vaciences = room.capacity - occupied;
  const clickedIcon = vaciences - 1;

  const iconsFilled = Array(occupied).fill(<FaUserAlt />);
  const iconsEmpty = clickedIcon > 0 ? Array(clickedIcon).fill(<FaRegUser />) : null;

  function handleClicked() {
    setSelectedRoom(room.id);
    setAbleReserveButton(true);
  }

  return (
    <Container
      onClick={handleClicked}
      style={{
        background: selectedRoom === room.id ? '#FFEED2' : vaciences <= 0 || clickedIcon <= -1 ? '#E9E9E9' : 'white',
        pointerEvents: vaciences <= 0 || clickedIcon <= -1 ? 'none' : 'pointer',
      }}
    >
      <p style={{ color: vaciences <= 0 || clickedIcon <= -1 ? 'gray' : 'black' }}>{room.name}</p>
      <div>
        <div>
          {iconsFilled.map((icon, index) => (
            <div
              key={index}
              style={{
                color: vaciences <= 0 || clickedIcon <= -1 ? 'gray' : 'black',
              }}
            >
              {icon}
            </div>
          ))}
          {selectedRoom === room.id ? (
            <div style={{ color: 'red' }}>
              <FaUserAlt />
            </div>
          ) : (
            <div>{vaciences <= 0 || clickedIcon <= -1 ? null : <FaRegUser />}</div>
          )}
          {clickedIcon > 0 ? iconsEmpty?.map((icon, index) => <div key={index}>{icon}</div>) : null}
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
  cursor: pointer;
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
