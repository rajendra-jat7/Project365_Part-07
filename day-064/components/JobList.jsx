import PropTypes from "prop-types";
import JobCard from "./JobCard";

export default function JobList({ jobs, deleteJob, editJob }) {
  return (
    <div className="job-list">
      {jobs.length === 0 ? (
        <p>No jobs added yet.</p>
      ) : (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} deleteJob={deleteJob} editJob={editJob} />
        ))
      )}
    </div>
  );
}

JobList.propTypes = {
  jobs: PropTypes.array.isRequired,
  deleteJob: PropTypes.func.isRequired,
  editJob: PropTypes.func.isRequired,
};
