import React from 'react';

function ClientsSection({ clients }) {
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
