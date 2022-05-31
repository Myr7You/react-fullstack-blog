import React from 'react'
import './About.css'
import Header from '../../components/Header/Header';
const About = () => {
  return (
    <>
      <Header
        link="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="About"
      />
      <div className="about">
        {/* <h1 className="aboutTitle">About</h1> */}
        <p className="aboutCtx">
          This is a react fullstack ( <b>MERN Stack</b> ) blog created by Myrs
          You.
        </p>
        <p className="aboutCtx">
          <b>MERN Stack</b>: MERN Stack is a Javascript Stack that is used for
          easier and faster deployment of full-stack web applications. MERN
          Stack comprises of 4 technologies namely: <b>MongoDB</b>,{' '}
          <b>Express</b>,<b>React</b> and <b>Node.js</b>. It is designed to make
          the development process smoother and easier. Each of these 4 powerful
          technologies provides an end-to-end framework for the developers to
          work in and each of these technologies play a big part in the
          development of web applications.
        </p>
        <p className="aboutCtx">
          Below is the link to get the code and you can simply download and run
          the code yourself to see how it works : <br />
          <a
            className="aboutLink"
            href="https://github.com/Myr7You/react-fullstack-blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-fullstack-blog
          </a>
        </p>
        <p className="aboutCtxEnd">Thank you for visiting !</p>
      </div>
    </>
  );
}

export default About