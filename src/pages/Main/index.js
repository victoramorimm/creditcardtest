import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import { Container, Informations } from './styles';

import cardImage from '../../assets/credit_card.png';
import Input from '../../components/Input';

export default function Main() {
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [focus, setFocus] = useState('');

  return (
    <Container>
      <h1>Cadastre seu cartão de crédito.</h1>
      <img src={cardImage} alt="creditcarimage" />
      <Informations>
        <Input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <Input
          type="text"
          name="name"
          placeholder="Name on Card"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <Input
          type="text"
          name="expiry"
          placeholder="MM/YY Data de Validade"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <Input
          type="tel"
          name="cvc"
          placeholder="Código de Verificação"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocusCapture={(e) => setFocus(e.target.name)}
        />
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </Informations>
    </Container>
  );
}
