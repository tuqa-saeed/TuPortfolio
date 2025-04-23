import React from 'react';
import client1Logo from '../assets/images/offtec_logo.jfif';
import client2Logo from '../assets/images/orange logo.png';
import client3Logo from '../assets/images/the_hope_international_logo.jfif';
import client4Logo from '../assets/images/digital_opportunity_trust_dot_jordan_logo.jfif';

function ClientsSection() {
  const clients = [
    { name: 'Offtec', logo: client1Logo },
    { name: 'Orange', logo: client2Logo },
    { name: 'The Hope International', logo: client3Logo },
    { name: 'Digital Opportunity Trust', logo: client4Logo },
  ];

  return (
    <section className="clients section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-12">
            <h3 className="text-center mb-5">Companies I've worked with</h3>
          </div>

          {clients.map((client, index) => (
            <div key={index} className="col-lg-2 col-4 clients-item-height">
              <img src={client.logo} className="clients-image img-fluid" alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
