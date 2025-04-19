import React from 'react';

function ContactSection({ socialLinks, servicess, contactInfo }) {
  return (
    <section className="contact section-padding" id="section_5">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-md-8 col-12">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <img src="images/call_cellular_contact_phone_icon.png" className="avatar-image img-fluid" alt="" />
              <h2 className="text-white ms-4 mb-0">Get A Touch With Me</h2>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
            <div className="contact-info contact-info-border-start d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">Services</strong>
              <ul className="footer-menu">
                {servicess.map((servicess, index) => (
                  <li key={index} className="footer-menu-item">
                    <a href="#" className="footer-menu-link">{servicess}</a>
                  </li>
                ))}
              </ul>

              <ul className="social-icon">
                {socialLinks.map((link, index) => (
                  <li key={index} className="icon">
                    <a href={link.url} className="social-icon-link">
                      <img src={link.icon} alt={link.name} width="30px" height="30px" className="social-img" />
                    </a>
                  </li>
                ))}
              </ul>

              <strong className="site-footer-title d-block mt-4 mb-3">Start a project</strong>
              <p className="mb-0">I’m available for freelance projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 ps-lg-0">
            <div className="contact-info d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">About</strong>
              <p className="mb-2">
                {contactInfo.about}
              </p>

              <strong className="site-footer-title d-block mt-4 mb-3">Email</strong>
              <p>
                <a href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </a>
              </p>

              <strong className="site-footer-title d-block mt-4 mb-3">Call</strong>
              <p className="mb-0">
                <a href={`tel:${contactInfo.phone}`}>
                  {contactInfo.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12 mt-5 mt-lg-0">
            <form action="#" method="get" className="custom-form contact-form" role="form">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="form-floating">
                    <input type="text" name="name" id="name" className="form-control" placeholder="Name" required />
                    <label for="floatingInput">Name</label>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12"> 
                  <div className="form-floating">
                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                    <label for="floatingInput">Email address</label>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-6">
                  <div className="form-check form-check-inline">
                    <input name="website" type="checkbox" className="form-check-input" id="inlineCheckbox1" value="1" />
                    <label className="form-check-label" for="inlineCheckbox1">
                      <i className="bi-globe form-check-icon"></i>
                      <span className="form-check-label-text">Websites</span>
                    </label>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-6">
                  <div className="form-check form-check-inline me-0">
                    <input name="seo" type="checkbox" className="form-check-input" id="inlineCheckbox4" value="1" />
                    <label className="form-check-label" for="inlineCheckbox4">
                      <i className="bi-google form-check-icon"></i>
                      <span className="form-check-label-text">SEO</span>
                    </label>
                  </div>
                </div>

                <div className="col-lg-12 col-12">
                  <div className="form-floating">
                    <textarea className="form-control" id="message" name="message" placeholder="Tell me about the project"></textarea>
                    <label for="floatingTextarea">About the project</label>
                  </div>
                </div>

                <div className="col-lg-3 col-12 ms-auto">
                  <button type="submit" className="form-control">Send</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
