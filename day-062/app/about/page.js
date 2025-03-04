import Link from 'next/link';

export default function About() {
  return (
    <section className='about'>
      <h1>ℹ️ About Portfolio Builder</h1>
      <p>
        This app allows you to create and showcase your projects seamlessly.
      </p>
      <Link href='/'>🏠 Go Back Home</Link>
    </section>
  );
}
