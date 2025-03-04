import Link from "next/link";
import PropTypes from "prop-types";

export default function ProjectCard({ id, title, description }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={`/projects/${id}`}>View Details →</Link>
    </div>
  );
}

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
