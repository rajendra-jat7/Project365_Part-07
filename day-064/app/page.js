"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  // Load Jobs from localStorage
  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(savedJobs);
  }, []);

  // Save Jobs to localStorage
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // Add Job
  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  // Delete Job
  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  // Edit Job
  const editJob = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
  };

  return (
    <div>
      <Header />
      <JobForm addJob={addJob} />
      <JobList jobs={jobs} deleteJob={deleteJob} editJob={editJob} />
    </div>
  );
}
