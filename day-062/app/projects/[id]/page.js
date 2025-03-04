export default function ProjectPage({ params }) {
    return (
      <div className="project-detail">
        <h1>📂 Project: {params.id}</h1>
        <p>Details about project {params.id}</p>
      </div>
    );
  }
  