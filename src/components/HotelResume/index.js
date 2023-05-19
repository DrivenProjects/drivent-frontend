import React from 'react';
import styled from 'styled-components';
import useRoomsByHotelId from '../../hooks/api/useRoomsByHotelId';

function HotelResume(props) {
  const { booking } = props;

  return (
    <Container>
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJYAyAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABBEAACAQMCBAIIAwQJBAMBAAABAgMABBEFIQYSMVETQQcUImFxgZGhMrHBQlJi4RUjJDNDcoKSohZTstGD8PEI/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgICAgIBAwUBAAAAAAAAAAECEQMhEjEEQSITUZEUMmGBsQX/2gAMAwEAAhEDEQA/ALFQoUK9g8QApVCOXHnmiBTR1SgaFM7VzmGcVzkB6k0YKKYU2CgNqB2oobm6UCoPmhmuqpNGERFIKsKFNDFLKMeVFegtRoAAIpNtiaHMR0rnU0A9hCnNuxoLGBS6pSixE/hUn4CgSiNguKMRnYil2j91JTNFCvPPIkcfTmdgo+9F0UoMSKL2ojAAghadeFlOdd1IzkdKTMeaE0+glFrtDVutcwSaclPdXOUDyoJ4jc7UKXKjtSTKc0CaE2jRvxKCaFH5TQotoVMN4Z86UVAK5zUYH3UrNuJ2hR1jY9K6Ym91Ow4sJim+p3kWlabLqN9zR2sQ9pwvN8gPOpG3tfHkWIZ5mPlTLj3hLVOI9M9QsrmG3VpMuWB3UdB9cfSuPyvInicVBW2/wvudHj+PHJbk6ooA9KcEl6sMejStG7hVLXAVzk7ZHKR96v8AFKPYWfwoZX2EKyeI2e2wH61jep+jjiDT7uO1KQTPI6qnhv3OAcHyz17Vr/DXDsGgWMdvHI091yYnupCSznrgE9Fz0FYN5s7rHOl70dDxYsSuUSQCBds7jrRqOYm86MsOdya74R4qjikpSYiSACcE+5etEhKXCloWDqp5XI/YPY9j7jinXg7dajOIOH01iEvBcyWWpKMQ3kDFWGOgbH4l930ok2toccd6Y78IZ2OT7qN4ZXqtZZda7rmmWc9lqepXQvIG5ZAWxhvcRgkEYI33zTHh30mahpd6sWrStf2BOHDYMkY7q3n8DWf6hfYpYL6NiKlQM+dGjmkiDBGKhhg4ApeNoLm3iubWVZreZQ8cinIYHfNDw1PWteSkhfTcWFhniVcSweLnozHGKy7XtE13ibi+5gs9LvfDidQpun5ookwDkN+Hfrgb/nWw2em80XjOuQPwA9D7/wCVIHUJrAYmAVXc4OMZOP5V5OfNijnWKN2/wduLHLhzfoYahFPZWLZeNJVTbzA2phot8NS0uG6yC5ykvKNudTyt9xmoXjni+3soypPiyPtyqenxpn6JLxLnRdSjRyfCvS/Kf2VdBj7q9b+F42Pxlxh7/kz8jI8zt+i4lc+VFMWaWPWuV6FnL9NCHhE+dAwHvS9Ciw+mhs0ZHlQpdnCjqM0KLDjQFs996UFqq06zjqaA6jtSNKExbD3/ACrpgHanseOXajqoJ3FQ5UUkNbRPVpfGIOACD7qmvF8WEmMc221R2p8kWlXbkYCxMSflS2hTF9Btrpv7ydPEPz6fbFcHl5HWuzfFFELf6awvor6Zj4sfTBz32+9OzETgjoelC8Mk02fIdDmlrXIiVG8uhrj/AOZiyYJyUnd/6dHkzjkivuhsUOdwaMsTHoKkAimlFRRtgGvZeQ4aI3wW7D611Ye+wqRcLjoPpRQEJo5hRRfSJwRFxTpxmtFVNYgXMMhOBKo/Yb9D5H3GsHv9InsA4m9mSM8siEEFTnBH1r1i5ijPPI6Ii7lmOAPjWL+l5NPv7z+kdM5WLACfAxzkbBh9hXNki5SXH+zaEoxi+Qp6EdZn9Yl0G4kLwSIZbZWP92w/Eo9xG+Pca14W3M3IBudq8+ejSb1fiuwlYlQso5v8p2P2Nej7P2rlR2BNWpcU6Mv3MkUjVY1QDCqMAVTvSlaytwjd3dqeW4scXK+9V/GP9pb6VcZHCLk1T+N7o3GgatAuQrWE4J/+Nq8ubakpe7OpK9HnfVLqS8BkkYsSNq0b0ICF9G1VVObgXSGRf4eT2PuHrOLW2eS2UhfZ5aunoSl9X4m1OyfI8e0DAZ29lhv9CfrXrt1TOPHW0asIR76BgGNs0/5BnNBwvKc7VtyCiKZCpx1pJoi/mRT9hkZxXAAPKqJoYm0JGSTQp6zgDBoUgpBZGBNKIwKimgOa6M5GDQMkI5Au1KLOoPWmkY23o4GWAHelSGmNOMdVGm8LajdMoYLAwUE4ySOlTVjELbQ9Pg5yRFbRoD3woGaxr0xa2Zb0aJDKeSzg8WZQdjIwyoPwU5/1VrDXjPCqnpyiuHNj5zTRtCVJiTnfrTm0BcFVwGPQmmPOOcDNPrIHmrV/Ensj9F4i0/V2lht51W8t3aOe0YgSRMpIbI8wCDuMipb1hk8vtWeavwVpMvFF5dyC78e4uPFRYZfD5C3UggZyTk/Opky/9PYW/wBccx49m2vJFlcfBsB/zojkXTBxLQJ2k2rrt4ahjknOAB1NUnUOPbK0OLKBp2YbFjgH5dcfSnvBmtTX+lXWrapLzhJXUYGFQADYD51pKSXRMduhHjjWGsbFI5ACWJZhnt0H/wB7Vims6xLeTsSSEyTy5q3ce6w2pXLlSAG2AB6Cs8nXlaoS9g3bomtDnKXMcgGMdSO1eheHdZ9b4as9SiYGXwuST/Op5W+4P1rzxpSrDbGR9smtF4J4rs7fSLzR5mYSyTiSBsbb4BH2z86ckRGVSo1ubUUntwyeycbqarWo/wBdBcRMQRIjIQfMEYpSKQlMLuKKy+7aol46lE2WRnn2CeaOCNC5HKvKQO461YvRzeLa8d6UWIAuS9uxJ6ll9n/kAKh+NtJm0XXbq3ZWEEjGWB/J0bf6jp8qhrG+ls7u3vIyRLazJMh96sCPyqm/jRnGFSs9YGPzANIsSG5SKPBqEF7aQ3cGPCnjWRcdiM/rTaWUF8ritIWxsctCCuSB8abNDueXeuetHoTR1kHmKtWidDaW1kzQp14o/dPzoUWGhmkSjy+tG5V7CpaPTY/PNL+oRgYCg1H1oj4EHkChzhFMj+yijmZuwHU/apaTTwTlVqE4sAs9GMUYJlu5FhVe4O5Hzxj50nlVBxZjE+iXuucWnUr6NvVL6+zIQNgmCwUnvyrjFbCrq65yfnSWqaN/Ruh6fbIvNJHJzzPjq3KxP3Y/IYpvazc8Q5utRCmWx0zYfY0+S6gtbV7m7mSCCNC0kjtgKo8zUNLLynNZb6S+KpL+7OjWjctnayZmwdpZR+i5x8cnyFOaCDRNcQccvq1zcXGmBrS1QlFmY4kcDfm/h67DrVWs72G4ul9YlGXOXZm/U064D4D1Xiv+0FvVNMVsG5dcmTHURr5/E7fHpW7cMcK6Tw7aR29hYxgqN5pFDyOe5Y//AJUckuiXBt7PP15a3VzqjQWBAjOFWVsiMbZPtd/cKtNzONF0GDSoZCyxLl36c56k4+Nbu8cMkLQyxxtCfxIyjlI94rzPxNfrPfXBjVlRnYxoT+FcnA/L6URk5MJrhHRD6jdl7nnJztUHPKXlBPlS9wxye9M2HRvfTl/A8cSXicLbZB3x0pK0nYYJYg9welJW2XUIoyzHAHxqUvuHr2yjjlVDJG55SU6g/CqckQodmhcFcaw3Cpp+qyrFMMLFcM2Fk8sN2PTfofdV9bzB6gV5rVniJXy8wwrQuB+M3Xk0rUpeeNtreZzuh8kJ7dvp2xcZBVCXpjuB6xpsSkZCSOR8wB+tZxGxJ9rzq4ek66S71yMR7iO3AJ95ZjVQUYT4VlLs1j0ehPRPqK6jwLYhm5pLRntn/wBJyv8AxZatMgUdBj5VnX/87XUc0GsaY+OZXS4QH3jlP5CtieyT90GiGVR0EoWyvJHzNuv2qTt4lwMinTQxqNlApJQQ2wNW8nInjQqbeNhuB9K5SqcxHShWXJoukHDUuhyKQJQV1HAPWs2hocFc1X7+AXfFunRMvNHaW8lyR/GSqofs1TokFRdkofXNTvW6gRWqn3IvOfvKR8qnY9BtSC+PaRSkYlZ1x39gn8gaokqNZ3MkLdUYirXxDM761o0cOT4cjO/wI5f1NQHEcJi1KbIwc5+taY5UyZK0MZpS65G3KC1ZHwJwzJxRrAkvg409H57mQHBkJ35F958+wzWrRPg82OlO4X8NlfoarI2xQVFv4fSGEPDbxpHDDGiJGgwqLuAAPLpU0OXHeoLhvL29xJ3cLn4D+dS4JBrNooS1STwdMvJcfggdv+Jry5qgy/sn3ZPavS3Fs6wcLaq7EjFq4294xXmLU5W59xjbGK0x92Y5fsQ94cOR1360ljKDNC4bJrgywUU/Zqlos3A+nm91iAkexADMwPnj8I+pH0rTOKuGr259HUWo6VG5vobgzMsZ9oxAuvsj5g491VX0b2xSwmuAhMk8wjQ46gAbf7mP0r0JYW/qtnBbLgCJAg+QxU5NJCjtswDVdFtuItAsNQs44Yb2W3VlddgzY9pW/wBXNg+XwrPeSWCd4ZkaOVCQ6tsVIr1Dx7Yq+kpcIo5oZRkgdQdvzrF+NdIS8t/XLdP7ZEPa5RvInb3keX0ohJ2El6KHdSySyl5nLsfMnNJY2rvlnNct8uxrQXouHoh1c6Nx/pxL8sN2TbSjuGHs/wDLlr1Lsa8YQTeqX1vcLkNDKsmR5cpB/SvZVvIJYI5Ac86K2e+RWE1TNYu0daPmNARClK4TU2wpHFUChRS+KFFMBnGnmTmlcDypslxEdgy/I0r4qY/FWrJDgcxwDikLBAIGYjlMkjuQe5Y/pSiTR7+1TeK7iwIw26jGKVAFt4Y59auLh19m1VY1J/exzfk1QnF88Mx54iC0a7nuKfXWppDb3YiGOeU5YeewH6Y+VUfUtQAkcF9jtmnCPtikxD1hlbY4UeVde93G+w99RE9+rEiP696sno+sLe81UXF7ytHBHzIjdDJkYJ+G/wBqTJT2aDoNtJaaTBHMvLIRzuvYnfH6U+wM0k91ErY513rrzIFzzUkmWVv0oTtbcEXzJ1do42/ys4BrzbqDtJIWPmPrW++l+8VOD0hBybq6SNTnpy5Y/wDjWA3bBFKld/hWmPpmGT9yIqQZO9KQrzEUnI24p5p9vJdSxwwDMsriNBjqTsKaWzV9G0eiLT1nttOByVhDTvnzPMSv3I+lbBzAGqRwHbQaaLiLCryRRxrv1xnP6VbEnjYn2s/OpzL5Cxv42H1CBL+xntXOBKhXPbsfrisYu7eSK7kinHJJG3Kyk9CK2dbiIuQGBI8s1UeOuHRqAOp6eubtABLHzY8VR59sj7iojpjlvZgvGOiNYz+v2yH1SdvawNo3Pl8DuR8xSXCFimo3NzbtsWgJU56b4/WrvcsL6xu9Pu0wHQqwYYKnyJHcHBqmcLJNp/EyQzqVYI6tgbEY6j3Vrjrkr6Jk/gyCvIninkilHK6MVbbz6V614KvhqPCGi3mVLS2URblO3MFAI+oNeZ+PkhGsiSHpLCrMf4skH7AVsHoG11LzhKTS5H/rNPmIUZ/w3yw+/NUZY1Ki8buCZqXPRGakWlQftYohlTzeoUR2LEjzrlIesQn9uhVUIzHx5v8AvSf7jSi3U4/x5h8JDTVWyN6Nmsxj1bmVx/fy58/6w11XI35iW75NMgSOho/i8gJHQDJosY9uLtYtIVA4DBmJ925qk3txJI2Q+M537mpfWZJorCNJFKuVDHPnt1qqwtc6pbzXdpBI1rb5y+AAMdTv1GO1b3pIwl2PYH8RwAuQPMbYNXPR0MNmj7gtvttt5VUtFRruWNQMAtvjsOtXPmAwBsB0A8qiRWNexz4pY5LN9aMJnIx4j47cxpsDtsaC7noak2Ir0myCfhfRbfJMh1Lr1xlZf/YrMeJbOS1nWIjfl6VpnE8BuzosHa6dzv5Bc/niqbxvBHbX0UYP9ZyZPuHlW0DnyadlBk22PWrR6PpI4NdWWVC5SFmQfunYZ+marsic8/zqz8EWzS6zyqf8IrjHcgfzpxVSsqctGt2MhNqJGyplJfHbt9sUsJWU5V2+tJnGAMYAGAB2oYUedZSbbtmkVSDiZlOQ7fImuNdSgbyv/uNN5DJk8iBveWxScjy5HLGDjqC1TZWguvWi3VkuoRxjxrYcswQbsnf5f+6p1/AIG9Zg5T4ntIx8h2FXu0nMMpcgGN15JFO4INULiO3S01B9KlkPg3IMtn36n2f0q4S2Y5I6KjxVIJ9QBDcxEXbA6nFWD0SXb2uqajAJGR5LdWUA4zyuP0Y1XNYtJI7mGMKSX2A6nPb8qd8J+s2vF1kkqSRSlyjowweUqf5GqnT2GLUUjYG1O8J9q4kOOm9JtqN0es7028z1HxpPJbOKxTZoOTqVyP8AHc0KYnufpQqiWxRN2JHQUem4BbpR1JOxGahoaFhR4H8ORWIBweh6GkhgjpR+Zd9z8KQ7KFxtxHqOo3S26Wjwq7GIYH4zkjlBxj9a0HRoRo9nb2ihT4MKxsCM8xwOY/M5qFufXbQ3Jh1BGjkfxUtzak4bb9sOD9qjoOL7+Nv7VolzM645jEjb7+Xs7/ar5WFUNOAL4PrF9Y8uFRTJEF35UyMDPu5gKvoQYyWPyrMOH9Pn0q9l1O39bSRUblgNk5Dg/sHz7VYoeLtR5VEnDF+JCfaILcvyyuaNsWkW0KRkq5I7YoyZz8elQf8A1AWQsmlakG22ktmH5A00XVJU5pbu6khTmzyyxFce7cZpcWPkiY1R1j1PRxJ+AyzLnyzyAj/xrO9bFzxBxdd2lpytM07xKWbCoqEjJPy+9Smu8ViDULG4skF+kMUgZCrBQzYGenZajeDpYLed57y1vTcyEs83gOR1ztjpVxk0TKKZMT8EadY6RI1xOz3ccZZ5lOADgnZe1M/R8Yor65d8eKEXG/l3+9POJda0t9Iu0XxmupIzGnMjAgnbOSOlU3hLWRomsJdSxvNCUaNlXyB8x5UKTSBx5bNhW7LqAiOx94wK7HNOy5aMD51XIuM7Cd+WNLiMDozx4op4swWVbVyp6MHAOfgelRUhuSXZZyZ3HMgVe+c0SRbpi2HiUEfu+dVhuJ2ceLKFh5VP9SpLs57htvypinEN3GrPi4m3ykatsvxIG9HFi5ouSRXOwkuAcjqEAqt8eoZoNPLSB57MkwSY9rmJXAPfJFMjxXfIqFNNZmB9vnmIB92AMmmd9ruqX0sT/wBExQyRHKFUkIB79OtOmFojrNn1Dii3iuW8IRN4rsvVeVc/ngVbtSsNMubmHUGuSl7CwKTxtnIH7JHTpVOto9TXUZr2Wyupp5xvywOMfDbptUwbrUYYVB0i5LHrkEjPyH6CqpvsltR6LLDfI6EtcFQq9XAyaby6j4cKsDK8jZwqQk/Oq+mp6rGSp02Qcw/7Dk4peDWtUROT+i5ZM9MxsuPlijgxcx3Lqd86ExxvIc7BPZbHw/nQoQ6nqzOuNF5Obzdyn5ihRTGqZO8+PhSqye0oA2JrlCsrLD53LN38qHiAHOOlChTAMOUsox1Oa6XBLjH4evvoUKBhVZFZsLvjNKMFc4ZQcDNChQARY0bJxjt7q74UIB5oI2+IzQoUrCkG5VEfKBgdhRCqSEFkB8ulChQBxrC2AJW3hI/iQZ/L3UBZwFfEMEOcYOEFChQmyqRxLWBgGMSZB7Ur4MRyDGhHU5Ub0KFO2TSDI5VmK7bY2opznmJyRtvQoUrY6QkArEtyjPwohYI2AMEnyoUKZIFmkTnSNiFYYbI60mOy9euTQoUrYg8bCNWYDc0kSSetChQAVDzHGNlNChQpoD//2Q==" alt="hotel-image"/>
      <HotelName>Driven Resort</HotelName>
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
