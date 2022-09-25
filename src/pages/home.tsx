import React from 'react';
import { Chart1 } from './Components/charts/charts-1';
import image from '../images/header.png';
import './home.scss';

export const Home = () => {
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${image})` }}></header>
      <main>
        <section className="section1">
          <Chart1 />
        </section>
        <section className="section2">
          <div className="borderd sec"></div>
        </section>
        <section className="section3">
          <div className="borderd sec"></div>
        </section>
        <section className="section4">
          <div className="borderd sec"></div>
        </section>
        <section className="section5">
          <div className="borderd sec"></div>
        </section>
      </main>
    </div>
  );
};
