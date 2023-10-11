import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/hidai.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Hidai Bar-Mor</h2>
        <p><a href="mailto:hidai25@gmail.com">hidai25@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Hidai. I like building things.
        I am a <a href="https://extension.harvard.edu/">Harvard extension school</a> software engineering graduate, Financial professional, and
        currently employed as interest rates trader in Mizrahi Bank in Tel-Aviv.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Hidai Bar-Mor <Link to="/">hidaibarmor.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
