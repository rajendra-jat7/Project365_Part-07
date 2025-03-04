import Link from "next/link";
import "../app/globals.css";

export default function Header() {
  return (
    <header className="header">
      <h2>🚀 Portfolio Builder</h2>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
