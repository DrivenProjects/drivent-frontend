import styled from 'styled-components';

export const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 37px;
`;

export const InstructionsNoEnroll = styled.h2`
font-family: 'Roboto', sans-serif;
font-size: 20px;
color: #8E8E8E;
margin: 220px 230px;
`;

export const Instructions = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #8E8E8E;
  margin-top: 37px;
`;

export const noEnrollment = styled.div`
  margin: auto;
  display: flex;
  width: 45%;
  text-align: center;
  color: #8e8e8e;
  margin-top: 26%;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  h2 {
    font-size: 16px;
  }
  h3 {
    color: #898989;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Box = styled.div`
  height: 145px;
  width: 145px;
  border-radius: 20px;
  border: 1px solid #CECECE;
  margin: 17px 24px 7px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;

export const Presencial = styled(Box)`
  background-color: ${(prop) => prop.opcaoSelecionada === 'presencial' ? '#FFEED2' : '#FFFFFF'};
`;

export const Online = styled(Box)`
  background-color: ${(prop) => prop.opcaoSelecionada === 'online' ? '#FFEED2' : '#FFFFFF'};
`;

export const NoHotel = styled(Box)`
  background-color: ${(prop) => prop.opcaoHotelSelecionada === 'noHotel' ? '#FFEED2' : '#FFFFFF'};
`;

export const WithHotel = styled(Box)`
  background-color: ${(prop) => prop.opcaoHotelSelecionada === 'withHotel' ? '#FFEED2' : '#FFFFFF'};
`;
