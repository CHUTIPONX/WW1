import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Footer() {
  return (
    <footer className="text-center text-white">
      {/* Grid container */}
      <div className="container-fluid p-4 pb-0">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a className="btn btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="#" role="button">
            <i className="fab fa-facebook-f" />
          </a>
          {/* Twitter */}
          <a className="btn btn-floating m-1" style={{backgroundColor: '#55acee'}} href="#" role="button">
            <i className="fab fa-twitter" />
          </a>
          {/* Google */}
          <a className="btn btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="#" role="button">
            <i className="fab fa-google" />
          </a>
          {/* Instagram */}
          <a className="btn btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="#" role="button">
            <i className="fab fa-instagram" />
          </a>
          {/* Linkedin */}
          <a className="btn btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="#" role="button">
            <i className="fab fa-linkedin-in" />
          </a>
          {/* Github */}
          <a className="btn btn-floating m-1" style={{backgroundColor: '#333333'}} href="#" role="button">
            <i className="fab fa-github" />
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}
    </footer>
  );
}
