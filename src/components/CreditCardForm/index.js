import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';

export default function CreditCardForm() {
  const [form, setForm] = React.useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });
  const [focus, setFocus] = React.useState('');
  const [submited, setSubmited] = React.useState(false);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  function Pay() {
    setSubmited(true);
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
            value={form.number}
            placeholder="Card Number"
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
            onChange={handleForm}
            onFocus={e => setFocus(e.target.name)}
          />
          <SmallerInputsDiv>
            <ExpiryInput
              type="text"
              name="expiry"
              value={form.expiry}
              placeholder="Valid Thru"
              onChange={handleForm}
              onFocus={e => setFocus(e.target.name)}
            />
            <CvcInput
              type="tel"
              name="cvc"
              value={form.cvc}
              placeholder="CVC"
              onChange={handleForm}
              onFocus={e => setFocus(e.target.name)}
            />
          </SmallerInputsDiv>
        </form>
      </CardDiv>
      <FinalizeButton
        disabled={submited}
        type="submit"
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
