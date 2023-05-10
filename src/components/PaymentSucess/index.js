import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

function PaymentSucess() {
  return (
    <Container>
      <h3>Pagamento</h3>
      <div className="box">
        <FaCheckCircle size={32} color="#00B049" />
        <div>
          <h7>Pagamento confirmado! </h7>
          <p>Prossiga para escolha de hospedagem e atividades</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .box {
    display: flex;
    gap: 10px;
    color: #454545;
    font-size: 16px;
    h7 {
      font-weight: 700;
    }
    p {
      margin-top: 2px;
    }
  }
`;
export default PaymentSucess;
