import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Featured projects by Hidai Bar-Mor - LLM evaluation tools, data analytics platforms, and ML applications."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>Featured work in AI/ML and software engineering</p>
        </div>
      </header>
      <p className="projects-intro">
        A selection of projects I&apos;ve built, from AI evaluation frameworks
        to full-stack applications. Each project represents a real solution
        to a real problem.
      </p>
      <div className="projects-grid">
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </div>
    </article>
  </Main>
);

export default Projects;
