import React from 'react';
// import { Link } from 'react-router-dom';

const About = () => (
  <header>
    <h1
      style={{
        fontSize: '6rem',
        fontWeight: '600',
        marginTop: '4rem',
        marginBottom: '2rem',
        lineHeight: '1em',
        color: '#888',
        textTransform: 'lowercase',
        textAlign: 'center',
      }}
    >
      About
    </h1>
    <h2
      style={{
        fontSize: '4rem',
        fontWeight: '600',
        marginBottom: '4rem',
        lineHeight: '1em',
        color: '#888',
        textTransform: 'lowercase',
        textAlign: 'center',
      }}
    >
      Todo List
    </h2>
    <p
      style={{
        fontSize: '2rem',
        fontWeight: '600',
        lineHeight: '1em',
        color: '#888',
        textTransform: 'lowercase',
        textAlign: 'center',
      }}
    >
      &copy; Copyright EAOrigami Inc. 2022
    </p>
  </header>
  // <div>
  //  /* <ul>
  //    <li>
  //      <Link to="/about-app">About App</Link>
  //    </li>
  //    <li>
  //      <Link to="/about-author">About Author</Link>
  //    </li>
  //  </ul> */
  // </div>
);

export default About;
