import React from 'react';
import styled from 'styled-components';

function ChoosenTicket() {
  return (
    <Container>
      <h6>Presencial + Com Hotel</h6>
      {/* <h6>Presencial + Sem Hotel</h6>
      <h6>Online</h6> */}
      <p>R$ 600</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 108px;
  left: 330px;
  top: 292px;
  gap: 7px;
  background: #ffeed2;
  border-radius: 20px;

  h6 {
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #454545;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #898989;
  }
`;

export default ChoosenTicket;
