import React from 'react';
import './css/Home.css';

const Home = () => (
  <section id="home">
    <h1 id="home__title">
      Welcome to our page,
      <b> Math</b>
      <i> Magicians</i>
      !
    </h1>
    <p className="home__body-text">
      Prepare to immerse yourself in the captivating world of numbers, calculations, and boundless
      imagination. Whether you&apos;re a seasoned mathematician or a curious explorer, our platform
      is here to empower and inspire you.
    </p>
    <p className="home__body-text">
      Unleash the full potential of your mathematical prowess with our state-of-the-art calculator,
      it&apos;s your trusted companion for all your numerical adventures. Embrace the thrill of
      problem-solving and witness the beauty of precision unfold before your eyes.
    </p>
    <p className="home__body-text">
      But Math Magicians offers more than just calculations; it&apos;s a sanctuary for dreamers and
      visionaries. Delve into our treasury of quotes, where imagination takes center stage. Let the
      words of great minds transport you to extraordinary realms, igniting the spark of creativity
      within you.
    </p>
    <center>
      <p className="home__body-text">
        <b>Welcome once again, dear visitor. Math Magicians is here to guide and inspire you!</b>
      </p>
    </center>
  </section>
);

export default Home;
