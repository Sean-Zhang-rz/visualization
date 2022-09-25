import React from 'react';
import './home.scss';
import image from '../images/header.png';

export const Home = () => {
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${image})` }}></header>
      <main>
        <section className="section1"></section>
        <section className="section2"></section>
        <section className="section3"></section>
        <section className="section4"></section>
      </main>
    </div>
  );
};
