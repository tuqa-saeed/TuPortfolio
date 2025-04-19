import React from 'react';

function ProjectsSection({ projects }) {
  return (
    <section className="projects section-padding" id="section_4">
      <div className="container">
        <div className="row">

          <div className="col-lg-8 col-md-8 col-12 ms-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
              <img src="images/project.png" className="avatar-image img-fluid" alt="" />
              <h2 className="text-white ms-4 mb-0">Projects</h2>
            </div>
          </div>

          <div className="clearfix"></div>
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <div className="projects-thumb">
                <div className="projects-info">
                  <small className="projects-tag">{project.category}</small>
                  <h3 className="projects-title">{project.title}</h3>
                </div>
                <a href={project.image} className="popup-image">
                  <img src={project.image} className="projects-image img-fluid" alt={project.title} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
