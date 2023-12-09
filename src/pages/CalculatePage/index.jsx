import React from 'react';
import { ButtonBack } from '../../components/ButtonBack';
import { Title } from '../../components/Title';
import { ButtonUp } from '../../components/ButtonUp';
import { Form } from './components/Form';
import { useState } from 'react';

import './style.css';

export const CalculatePage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ButtonBack />
      <main>
        {formSubmitted ? null : (
          <>
            <Title label="Svatební kalkulačka" />

            <h3 className="text--center text--mobile">
              Už jste někdy snili o svatbě v zahraničí, ale jste nervózní, když
              začnete zvažovat náklady? Zkuste naši svatební kalkulačku pro
              odhad nákladů na vaši svatbu!
            </h3>
          </>
        )}
        <Form onFormSubmit={handleFormSubmit} />
        <ButtonUp />
      </main>
    </>
  );
};
