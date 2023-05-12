import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useToken from '../../../hooks/useToken';

export default function Hotel() {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const token = useToken();
  console.log(token);

  useEffect(() => { 
    async function checkPaymentStatus() {
      try {
        // Verificando se o token está presente
        if (!token) {
          setPaymentConfirmed(false);
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        // Fazer a solicitação GET para verificar o status do pagamento
        const response = await axios.get(`http://localhost:4000/payments?ticketId=${data.ticketId}`, config);
        const data = response.data;
        console.log(data);
      
        // Verificar se o pagamento foi confirmado
        if (data.paymentConfirmed) {
          setPaymentConfirmed(true);
        } else {
          setPaymentConfirmed(false);
        }
      } catch (error) {
        console.log(error);
      }
    }

    checkPaymentStatus();
  }, [token]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
      <p style={{ textAlign: 'center' }}>
        {paymentConfirmed ? (
          'Você pode prosseguir com a reserva do hotel.'
        ) : (
          'Sua modalidade de ingresso não inclui hospedagem'
        )}
      </p>
    </div>
  );
}
