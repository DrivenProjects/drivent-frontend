import styled from 'styled-components';
import PaymentSucess from '../../../components/PaymentSucess';
import ChoosenTicket from '../../../components/ChoosenTicket';

export default function Payment() {
  return (
    <Container>
      <h1>Ingresso e pagamento</h1>
      {/* <h3>Primeiro, escolha sua modalidade de ingresso</h3> */}
      <h3>Ingresso escolhido</h3>
      <ChoosenTicket />
      <PaymentSucess />
    </Container>
  );
}

const Container = styled.div`
  padding: 20px 34px;
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
`;
