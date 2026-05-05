import React from "react";
import "./Careers.css";

function Careers() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Surat, Gujarat",
      description: "Build UI using React. Work with APIs and improve user experience."
    },
    {
      title: "Backend Developer",
      location: "Surat, Gujarat",
      description: "Develop APIs using Python/Node.js and manage databases."
    },
    {
      title: "HR Manager",
      location: "Mumbai",
      description: "Handle recruitment, employee relations, and company policies."
    }
  ];

  return (
    <div className="careers">
      <h1>Careers</h1>
      <p className="subtitle">Join our team and build your career.</p>

      <div className="job-container">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <h2>{job.title}</h2>
            <p className="location"><b>Location:</b> {job.location}</p>
            <p className="desc">{job.description}</p>

            <button className="apply-btn">
              Apply Now →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Careers;