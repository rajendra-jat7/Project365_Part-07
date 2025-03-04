import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Portfolio Builder',
  description: 'Create and showcase your projects with ease.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
