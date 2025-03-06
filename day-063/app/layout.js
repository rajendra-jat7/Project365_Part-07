import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Cricket Scorecard',
  description: 'Manually update and track cricket scores in real time.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
