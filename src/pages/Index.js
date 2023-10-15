import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Hidai Bar-Mor\'s personal website. '
      + 'Tel-Aviv based Harvard extensions school '
      + 'software engineering graduate'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">About</Link>
          </h2>
          <p>
            Welcome to my website. Please feel free to read more{' '}
            <Link to="/about">about me</Link>, or you can check out my{' '}
            <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>, view{' '}
            <Link to="/stats">site statistics</Link>, or{' '}
            <Link to="/contact">contact</Link> me.
          </p>
          <p>
            Source available{' '}
            <a href="https://github.com/hidai25/my_website">here</a>.
          </p>
        </div>
      </header>
      <p>I&apos;m Hidai. I like building things.
        I am a <a href="https://extension.harvard.edu/">Harvard extension school</a> software engineering graduate, Financial professional, and
        currently employed as interest rates trader in Mizrahi Bank in Tel-Aviv.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </article>
  </Main>
);

export default Index;
