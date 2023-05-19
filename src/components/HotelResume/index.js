import React from 'react';
import styled from 'styled-components';

function HotelResume(props) {
  const { booking, hotels } = props;
  console.log(hotels);

  if(hotels) {
    const hotelFiltered = hotels.filter(e => (e.id === booking.Room.hotelId));
    const hotel = hotelFiltered[0];
    return (
      <Container>
        <img src={hotel.image} alt="hotel"/>
        <HotelName>{hotel.name}</HotelName>
        <ContentDiv>
          <h4>Quarto reservado</h4>
          <h5>
            {`${booking.Room.name} `}
            {  
              booking.Room.capacity === 1 ? ('(Single)') 
                : ( booking.Room.capacity === 2 ? ('(Double)')
                  : (booking.Room.capacity === 3 ? ('(Triple)')
                    : (booking.Room.capacity === 4 ? ('(Quadra)')
                      : ('(Penta)'))) )
            }
          </h5>
        </ContentDiv>
        <ContentDiv>
          <h4>Pessoas no seu quarto</h4>
          <h5>{`Você e mais ${(booking.Room.capacity-1) === 0 ? 'ninguem' : booking.Room.capacity-1}`}</h5>
        </ContentDiv>
      </Container>
    );
  }
  return(
    <Container/>
  );
}

const Container = styled.div`
  display: flex;
  padding:15px;
  flex-direction: column;
  align-items: flex-start;
  height: 264px;
  width: 196px;
  border-radius: 10px;

  background: #ffeed2;
  border-radius: 20px;
  margin-bottom: 20px;

  font-family: 'Roboto',sans-serif;

  img {
    height: 109px;
    width: 168px;
    border-radius: 5px;
  }

  h4{
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #3C3C3C;
  }

  h5 {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    text-align: left;
    margin-top: 3px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #898989;
  }
`;

const HotelName = styled.div`
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    color: #3C3C3C;
    margin:10px 0px 0px 0px;
`;

const ContentDiv = styled.div`
margin-top: 10px;
`;

export default HotelResume;
