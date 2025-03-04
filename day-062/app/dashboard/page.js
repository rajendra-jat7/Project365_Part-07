// app/dashboard/page.js
import Link from "next/link";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <h1>📊 Admin Dashboard</h1>
      <p>Manage your projects and view analytics here.</p>
      <Link href="/">🏠 Back to Home</Link>
    </section>
  );
}
