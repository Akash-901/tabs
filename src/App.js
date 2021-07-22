import React, { useState } from 'react';
import './App.css';
import data from './data';
import { FaAngleDoubleRight } from 'react-icons/fa'

function App() {
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0);
  const { dates, company, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h1 className="heading">Experience</h1>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <div className="btn-container">
          {
            jobs.map((job, index) => {
              return (
                <button key={job.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}>
                  {job.company}
                </button>
              )
            })
          }
        </div>
        <article className="job-info">
          <h2>{title}</h2>
          <h4>{company}</h4>
          <p>{dates}</p>
          {
            duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight />
                  <p>{duty}</p>
                </div>
              )
            })
          }
        </article>
      </div>
    </section>
  );
}

export default App;
