import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div>
    <ul>
      <li>
        <Link to="/about-app">About App</Link>
      </li>
      <li>
        <Link to="/about-author">About Author</Link>
      </li>
    </ul>
  </div>
);

export default About;
