import PropTypes from "prop-types";

export default function JobCard({ job, deleteJob, editJob }) {
  const { id, company, position, status } = job;

  const handleEdit = () => {
    const newStatus = prompt(
      "Update Status (Applied, Interview, Offer, Rejected):",
      status
    );
    if (newStatus) editJob({ ...job, status: newStatus });
  };

  return (
    <div className="job-card">
      <h3>{company}</h3>
      <p>Position: {position}</p>
      <p>Status: {status}</p>
      <button onClick={() => deleteJob(id)}>❌ Delete</button>
      <button onClick={handleEdit}>✏️ Edit</button>
    </div>
  );
}

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
  deleteJob: PropTypes.func.isRequired,
  editJob: PropTypes.func.isRequired,
};
