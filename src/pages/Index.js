import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Hidai Bar-Mor - AI/ML Engineer building LLM applications, '
      + 'evaluation frameworks, and data products. Harvard Extension School '
      + 'graduate with 15+ years in quantitative finance.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">Hidai Bar-Mor</Link>
          </h2>
          <p>AI/ML Engineer</p>
        </div>
      </header>
      <p>
        I build AI-powered products that solve real problems. From LLM evaluation
        frameworks to ML-driven analytics platforms, I focus on shipping tools
        that deliver measurable impact.
      </p>
      <p>
        With 15+ years in quantitative finance and a Master&apos;s in Software
        Engineering from{' '}
        <a href="https://extension.harvard.edu/">Harvard Extension School</a>,
        I bring a unique blend of technical depth and business acumen to
        every project.
      </p>
      <p>
        <strong>What I do:</strong> LLM applications, prompt engineering,
        RAG systems, ML pipelines, full-stack development.
      </p>
      <ul className="actions">
        <li>
          <Link to="/projects" className="button">
            View My Work
          </Link>
        </li>
        <li>
          <Link to="/about" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </article>
  </Main>
);

export default Index;
