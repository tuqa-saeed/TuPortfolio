import React from 'react';
import keyboardImage from '../assets/images/keyboard.png';
function ServicesSection({ services }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-12 mx-auto">
          <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
          <img src={keyboardImage} className="avatar-image img-fluid" alt="Keyboard" />

            <h2 className="text-white ms-4 mb-0">Services</h2>
          </div>

          <div className="row pt-lg-5">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6 col-12">
                <div className={`services-thumb ${service.isFeatured ? 'services-thumb-up' : ''}`}>
                  <div className="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                    <h3 className="mb-0">{service.title}</h3>
                    <div className="services-price-wrap ms-auto">
                      <p className="services-price-text mb-0">{service.price}</p>
                      <div className="services-price-overlay"></div>
                    </div>
                  </div>
                  <p>{service.description}</p>
                  <a href={service.link} className="custom-btn custom-border-btn btn mt-3">Discover More</a>
                  <div className="services-icon-wrap d-flex justify-content-center align-items-center">
                    <i className={`services-icon ${service.iconClass}`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
