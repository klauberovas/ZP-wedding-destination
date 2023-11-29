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
        <h3 className="text--center text--mobile">
          Už jste někdy snili o svatbě v zahraničí, ale jste nervózní, když
          začnete zvažovat náklady? Zkuste naši svatební kalkulačku pro odhad
          nákladů na vaši svatbu!
        </h3>
        <Form />
        <ButtonUp />
      </main>
    </>
  );
};
