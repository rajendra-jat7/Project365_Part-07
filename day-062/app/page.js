import Link from "next/link";

export default function Home() {
  return (
    <section className="container">
      <h1 className="title">🚀 Portfolio Builder</h1>
      <p className="description">Showcase your projects beautifully.</p>
      <div className="links">
        <Link href="/dashboard">🧑‍💼 Go to Dashboard</Link>
        <Link href="/about">ℹ️ About Us</Link>
      </div>
    </section>
  );
}
