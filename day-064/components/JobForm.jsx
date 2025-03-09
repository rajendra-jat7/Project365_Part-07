"use client";
import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const JobForm = ({ addJob }) => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    status: "Applied",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.company || !formData.position) return alert("Fill all fields");

    addJob({ id: uuidv4(), ...formData });
    setFormData({ company: "", position: "", status: "Applied" });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="position"
        placeholder="Job Position"
        value={formData.position}
        onChange={handleChange}
        required
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button type="submit">Add Job</button>
    </form>
  );
};

JobForm.propTypes = {
  addJob: PropTypes.func.isRequired,
};

export default JobForm;
