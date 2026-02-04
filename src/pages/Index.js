import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Hidai Bar-Mor - AI/ML Engineer & Software Developer. '
      + 'Harvard Extension School graduate specializing in LLMs, '
      + 'machine learning, and intelligent systems.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">Hi, I&apos;m Hidai</Link>
          </h2>
          <p>
            AI/ML Engineer building intelligent systems at the intersection of
            finance and technology.
          </p>
        </div>
      </header>
      <p>
        I&apos;m an{' '}
        <a href="https://extension.harvard.edu/">Harvard Extension School</a>{' '}
        software engineering graduate with 15+ years in quantitative finance.
        I build LLM-powered applications, ML pipelines, and data products that
        solve complex problems.
      </p>
      <p>
        Currently focused on AI evaluation frameworks, RAG systems, and
        applying machine learning to financial markets.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/projects') ? (
            <Link to="/projects" className="button">
              View Projects
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </article>
  </Main>
);

export default Index;
