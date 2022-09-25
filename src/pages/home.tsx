import React from 'react';
import image from '../images/header.png';
import './home.scss';
import { Chart1 } from './Components/charts/charts-1';
import { Chart2 } from './Components/charts/charts-2';
import { Chart3 } from './Components/charts/charts-3';
import { Chart4 } from './Components/charts/charts-4';
import { Chart5 } from './Components/charts/charts-5';
import { Chart6 } from './Components/charts/charts-6';
import { Chart7 } from './Components/charts/charts-7';
import { Chart8 } from './Components/charts/charts-8';
import { Chart9 } from './Components/charts/charts-9';

export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${image})` }}></header>
      <main>
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2">
          <Chart3 />
          <Chart4 />
        </section>
        <section className="bordered section3">
          <Chart5 />
        </section>
        <section className="section4">
          <Chart6 />
          <div className="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7 />
              <Chart8 />
              <Chart9 />
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="borderd sec"></div>
        </section>
      </main>
      <footer> &copy; Sean 2020-{year} </footer>
    </div>
  );
};
