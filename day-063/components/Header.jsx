import Link from 'next/link';

export default function Header() {
  return (
    <header className='header'>
      <h2>🏏 Cricket Scorecard</h2>
      <nav>
        <Link href='/'>Home</Link>
      </nav>
    </header>
  );
}
