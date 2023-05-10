import styled from 'styled-components';
import PaymentSucess from '../../../components/PaymentSucess';
import ChoosenTicket from '../../../components/ChoosenTicket';
import useEnrollment from '../../../hooks/api/useEnrollment';
import { Title, Instructions, Div, Content, Presencial, Online, InstructionsNoEnroll } from '../../../components/Dashboard/Payments/payment';

export default function Payment() {
  const { enrollment } = useEnrollment();

  return (

    <div>
      {enrollment ? (
        <>
          <Title>
        Ingresso e Pagamento
          </Title>

          <Instructions>
          Primeiro, escolha sua modalidade de ingresso
          </Instructions>

          <Content>
            <Div>
              <Presencial >
                <h2>Presencial</h2> 
                <h3>R$ 250</h3>
              </Presencial> 

              <Online>
                <h2>Online</h2> 
                <h3>R$ 100</h3>
              </Online>
            </Div>
          </Content>
        </>
      ) : (
        <>
          <Title>
            Ingresso e Pagamento
          </Title>
          <InstructionsNoEnroll>
            Você precisa completar sua inscrição antes
            de prosseguir pra escolha de ingresso
          </InstructionsNoEnroll>
        </>
      )}
      {/* ///////////// Comentando para implementação de primeira tela ///////////       
      <Container>
        <h3>Ingresso escolhido</h3>
        <ChoosenTicket />
        <PaymentSucess />
      </Container> */}
    </div>
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
