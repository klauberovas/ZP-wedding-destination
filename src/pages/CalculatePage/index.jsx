import React from 'react';
import { ButtonBack } from '../../components/ButtonBack';
import { Title } from '../../components/Title';
import { ButtonUp } from '../../components/ButtonUp';
import { Form } from './components/Form';

import './style.css';

export const CalculatePage = () => {
  return (
    <>
      <ButtonBack />
      <main>
        <Title label="Svatební kalkulačka" />
        <Form />
        <ButtonUp />
      </main>
    </>
  );
};
