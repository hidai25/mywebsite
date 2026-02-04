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
        <p>AI/ML Engineer</p>
        <p><a href="mailto:hidai25@gmail.com">hidai25@gmail.com</a></p>
      </header>
    </section>
    <section className="blurb" />
    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Hidai Bar-Mor <Link to="/">hidaibarmor.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
