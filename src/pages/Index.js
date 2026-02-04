import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Hidai Bar-Mor - Software Engineer & Quantitative Finance Professional. '
      + 'Harvard ALM in Software Engineering. Building AI/ML applications '
      + 'at the intersection of technology and financial markets.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">Hidai Bar-Mor</Link>
          </h2>
          <p>Software Engineer | Quantitative Finance</p>
        </div>
      </header>
      <p>
        I build intelligent systems at the intersection of finance and technology.
        With 15+ years trading derivatives and managing risk at major financial
        institutions, I now apply that domain expertise to software engineering
        and AI/ML development.
      </p>
      <p>
        <strong>Background:</strong> Master&apos;s in Software Engineering from{' '}
        <a href="https://extension.harvard.edu/">Harvard Extension School</a>.
        Former derivatives trader at Fortis Bank and quantitative developer at
        Mizrahi Tefahot Bank.
      </p>
      <p>
        <strong>Focus areas:</strong> AI/ML applications, LLM systems, quantitative
        modeling, full-stack development, and data engineering.
      </p>
      <ul className="actions">
        <li>
          <Link to="/projects" className="button">
            View Projects
          </Link>
        </li>
        <li>
          <Link to="/resume" className="button">
            Resume
          </Link>
        </li>
      </ul>
    </article>
  </Main>
);

export default Index;
