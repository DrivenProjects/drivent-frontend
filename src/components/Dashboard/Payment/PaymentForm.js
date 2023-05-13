import React from 'react';
import Cards from 'react-credit-cards-2';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from './PaymentUtils';

export default class PaymentForm extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async(e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    try {
      const number = this.state.number.replace(/\s+/g, '');
      const body = {
        ticketId: this.props.ticket.id,
        cardData: {
          issuer: issuer,
          number: number,
          name: this.state.name,
          expirationDate: this.state.expiry,
          cvv: this.state.cvc,
        },
      };

      await this.props.savePayment(body);
      this.props.setConfirmPayment(true);
      toast('Pagamento realizado com sucesso!');
    } catch (error) {
      toast('Não foi possível salvar suas informações!');
    }
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <>
        <CardContainer>
          <p>Pagamento</p>
          <FormContainer>
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focused}
              callback={this.handleCallback}
            />

            <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
              <Input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <p>E.g.: 49..., 51..., 36..., 37...</p>
              <Input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <CardValidation>
                <ExpiryInput
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
                <CvcInput
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </CardValidation>
              <input type="hidden" name="issuer" value={issuer} />
              <PayButton type="submit">FINALIZAR PAGAMENTO</PayButton>
            </form>
          </FormContainer>
        </CardContainer>
      </>
    );
  }
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  & > p {
    font-size: 20px;
    font-weight: 400;
    color: #8e8e8e;
    margin-bottom: 19px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  position: relative;

  & > div {
    margin: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: #8e8e8e;
    margin: 5px 0 15px 30px;
  }
`;

const Input = styled.input`
  width: 345px;
  height: 45px;
  border-radius: 5px;
  border: 2px solid #cecece;
  margin-left: 30px;
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`;

const ExpiryInput = styled(Input)`
  width: 205px;
`;

const CvcInput = styled(Input)`
  width: 120px;
  margin-left: 20px;
`;

const CardValidation = styled.div`
  display: flex;
  margin-top: 15px;
`;

const PayButton = styled.button`
  width: 182px;
  height: 37px;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  border: none;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 57px;
  position: absolute;
  left: 0;
  cursor: pointer;
`;
