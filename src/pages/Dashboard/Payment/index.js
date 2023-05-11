import styled from 'styled-components';
import React, { useState } from 'react';
import PaymentSucess from '../../../components/PaymentSucess';
import ChoosenTicket from '../../../components/ChoosenTicket';
import useEnrollment from '../../../hooks/api/useEnrollment';
import { Title, Instructions, Div, Content, Presencial, Online, InstructionsNoEnroll, NoHotel, WithHotel } from '../../../components/Dashboard/Payments/payment';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const [opcaoHotelSelecionada, setOpcaoHotelSelecionada] = useState('');

  function handleOpcaoClicadaTicket(opcao) {
    if (opcao === opcaoSelecionada) {
      setOpcaoSelecionada(null);
    } else {
      setOpcaoSelecionada(opcao);
    }
  }
  function handleOpcaoClicadaHotel(opcao) {
    if (opcao === opcaoHotelSelecionada) {
      setOpcaoHotelSelecionada(null);
    } else {
      setOpcaoHotelSelecionada(opcao);
    }
  }

  return (

    <>
      {enrollment ? (
        <>
          <Title>
        Ingresso e Pagamento
          </Title>

          <Instructions>
          Primeiro, escolha sua modalidade de ingresso
          </Instructions>

          <Content>
            <>
              <Presencial opcaoSelecionada={opcaoSelecionada}  checked={opcaoSelecionada === 'presencial'}
                onClick={() => handleOpcaoClicadaTicket('presencial')} >
                <h2>Presencial</h2> 
                <h3>R$ 250</h3>
              </Presencial> 

              <Online opcaoSelecionada={opcaoSelecionada} checked={opcaoSelecionada === 'online'}
                onClick={() => handleOpcaoClicadaTicket('online')}>
                <h2>Online</h2> 
                <h3>R$ 100</h3>
              </Online>
            </>
          </Content>
          {opcaoSelecionada === 'presencial' ? 
            <>
              <Instructions>
              Ótimo! Agora escolha sua modalidade de hospedagem
              </Instructions> 

              <Content>
                <Div>
                  <NoHotel opcaoHotelSelecionada={opcaoHotelSelecionada} checked={opcaoHotelSelecionada === 'noHotel'}
                    onClick={() => handleOpcaoClicadaHotel('noHotel') }>
                    <h2>Sem Hotel</h2> 
                    <h3>+ R$ 0</h3>
                  </NoHotel> 

                  <WithHotel opcaoHotelSelecionada={opcaoHotelSelecionada} checked={opcaoHotelSelecionada === 'withHotel'}
                    onClick={() => handleOpcaoClicadaHotel('withHotel') }>
                    <h2>Com Hotel</h2> 
                    <h3>+ R$ 350</h3>
                  </WithHotel>
                </Div>
              </Content> 
               
              {opcaoHotelSelecionada === 'noHotel' ? 
                <>
                  <Instructions>
                  Fechado! O total ficou em R$250 Agora é só confirmar:
                  </Instructions> 
            
                </>

                : null}  

              {opcaoHotelSelecionada === 'withHotel' ? 
                <>
                  <Instructions>
                  Fechado! O total ficou em R$600 Agora é só confirmar:
                  </Instructions> 
            
                </>

                : null}  

            </>
      
            : opcaoSelecionada === 'online'  ? 
              <>
                <Instructions>
                Fechado! O total ficou em R$100 Agora é só confirmar:
                </Instructions>  
          
              </>
              : null
          }
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
    </>
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
