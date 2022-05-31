import React from 'react'
import './Contact.css'
import Header from '../../components/Header/Header';
const Contact = () => {
  return (
    <>
      <Header
        link="https://images.pexels.com/photos/1624600/pexels-photo-1624600.jpeg?cs=srgb&dl=pexels-joshua-welch-1624600.jpg&fm=jpg"
        title="Contact"
      />
      <div className="contact">
        <h1 className="contactCtx">Thank you for visiting !</h1>
        <p className="contactCtx">If you are interesting in this page</p>
        <p className="contactCtx">Feel free to contact me</p>
        <p className="contactCtx">Below is my personal webside</p>
        <p className="contactCtx">
          <a href="https://myr7you.github.io/Myr7You/" target="_blank" className="contactLink" rel="noreferrer">
            Myrs You
          </a>
        </p>
      </div>
    </>
  );
}

export default Contact