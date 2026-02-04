import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="project-card">
    <div className="project-content">
      <div className="project-header">
        <h3>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            {data.title}
          </a>
        </h3>
        <span className="project-subtitle">{data.subtitle}</span>
      </div>
      <p className="project-desc">{data.desc}</p>
      {data.highlights && (
        <ul className="project-highlights">
          {data.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {data.tech && (
        <div className="project-tech">
          {data.tech.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
      <a
        href={data.link}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </div>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string),
    highlights: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Cell;
