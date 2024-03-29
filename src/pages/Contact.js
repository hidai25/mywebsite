import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
// import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Hidai Bar-Mor via email @ hidai25@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div>
        <p>Feel free to get in touch. You can email me at: hidai25@gmail.com </p>
      </div>
      {/* <ContactIcons /> */}
    </article>
  </Main>
);

export default Contact;
