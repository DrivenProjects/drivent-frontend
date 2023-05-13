import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import { savePayment } from '../../services/paymentApi';
import useToken from '../../hooks/useToken';
import usePay from '../../hooks/api/usePayment';
import { toast } from 'react-toastify';
import useSavePayment from '../../hooks/api/useSavePayment';

export default function CreditCardForm(props) {
  const [form, setForm] = React.useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });
  const [formShown, setFormShown] = React.useState({
    number: '',
    expiry: '',
  });
  const { savePaymentLoading, savePayment } = useSavePayment();
  const [focus, setFocus] = React.useState('');
  const [submited, setSubmited] = React.useState(false);
  const token = useToken();
  const [cardIssuer, setCardIssuer] = React.useState('');

  function formatCardNumber(event) {
    const { value } = event.target;
    const cardNumberFormatted = value
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    setFormShown({ ...formShown, number: cardNumberFormatted });
    getIssuer();
  }

  function formatCardExpiry(event) {
    const { value } = event.target;
    const cardExpiryFormatted = value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{2})/, '$1/$2')
      .substr(0, 5);
    setFormShown({ ...formShown, expiry: cardExpiryFormatted });
  }

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'number') formatCardNumber(e);
    if (e.target.name === 'expiry') formatCardExpiry(e);
  }

  async function getIssuer() {
    const visaRegex = /^4/;
    const mastercardRegex = /^5[1-5]/;
    const amexRegex = /^3[47]/;
    const discoverRegex = /^(6011|65|64[4-9])/;

    if(visaRegex.test(form.number)) setCardIssuer('Visa');
    if(mastercardRegex.test(form.number)) setCardIssuer('Mastercard');
    if(amexRegex.test(form.number)) setCardIssuer('American Express');
    if(discoverRegex.test(form.number)) setCardIssuer('Discover');
  }

  async function Pay() {
    setSubmited(true);
    const body = {
      ticketId: props.ticketId,
      cardData: {
        issuer: cardIssuer,
        number: form.number,
        name: form.name,
        expirationDate: formShown.expiry,
        cvv: form.cvc,
      }
    };

    console.log(body);
    console.log(token);
    try{
      const paymentData = await savePayment(body, token);
      props.setPaymentData(paymentData);
      toast('pagamento realizado com sucesso!');
      setSubmited(false);
      props.setConfirmPayment(true);
    } catch(e) {
      toast('Não foi possível realizar o pagamento!');
      setSubmited(false);
    }
  }

  return(
    <>
      <CardDivTitle>
        Pagamento
      </CardDivTitle>
      <CardDiv>
        <Cards
          cvc={form.cvc}
          expiry={form.expiry}
          focused={focus}
          name={form.name}
          number={form.number}
        />
        <form>
          <BigInput
            type="tel"
            name="number"
            value={formShown.number}
            placeholder="Card Number"
            maxLength={19}
            onChange={handleForm}
            onFocus={e => setFocus(e.target.name)}
          />
          <NumberExample>
            E.g.: 49..., 51..., 36..., 37...
          </NumberExample>
          <BigInput
            type="text"
            name="name"
            value={form.name}
            placeholder="Name"
            maxLength={31}
            onChange={handleForm}
            onFocus={e => setFocus(e.target.name)}
          />
          <SmallerInputsDiv>
            <ExpiryInput
              type="text"
              name="expiry"
              value={formShown.expiry}
              placeholder="Valid Thru"
              maxLength={4}
              onChange={handleForm}
              onFocus={e => setFocus(e.target.name)}
            />
            <CvcInput
              type="tel"
              name="cvc"
              value={form.cvc}
              placeholder="CVC"
              maxLength={3}
              onChange={handleForm}
              onFocus={e => setFocus(e.target.name)}
            />
          </SmallerInputsDiv>
        </form>
      </CardDiv>
      <FinalizeButton
        disabled={submited}
        onClick={Pay}
      >FINALIZAR PAGAMENTO</FinalizeButton>
    </>
  );
}

const CardDivTitle = styled.div`
    margin-left: 5px;
    height: 40px;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: left;
    font-family: 'Roboto','sans-serif';
    color: #8E8E8E;
`;
const CardDiv = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: space-between;
    form{
        padding-left: 30px;
        width: 100%;
        display: flex;
        flex-direction: column;
        input{
            height: 40px;
            border: 1px solid #c9c9c9;
            border-radius: 5px;
            &::placeholder{
                font-family: 'Roboto','sans-serif';
                font-size: 20px;
                font-weight: 400;
                color: #a4a4a4;
            }
        }
    }
`;

const BigInput = styled.input`
    width: 300px;
`;

const NumberExample = styled.div`
    font-family: 'Roboto','sans-serif';
    font-size: 15px;
    font-weight: 500;
    color: #a4a4a4;
    height: 20px;
    margin-top: 5px;
    margin-bottom: 10px;
`;

const SmallerInputsDiv = styled.div`
    width: 300px;
    margin-top: 20px;
    display:flex;
    justify-content: space-between;
`;

const ExpiryInput = styled.input`
    width:  190px;
`;

const CvcInput = styled.input`
    width: 100px;
`;

const FinalizeButton = styled.button`
    margin: 40px 0px 0px 5px;
    height: 37px;
    width: 182px;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 2px 10px 0px #00000040;
`;
