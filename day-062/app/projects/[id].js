import { useRouter } from "next/router";

const projects = {
  "1": { title: "Next.js Blog", details: "A modern blog using Next.js, Tailwind, and MDX." },
  "2": { title: "E-Commerce Site", details: "Built with Next.js, Stripe, and MongoDB." }
};

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects[id];

  if (!project) return <p>Project not found</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="text-gray-600 mt-2">{project.details}</p>
    </div>
  );
};

export default ProjectDetails;
