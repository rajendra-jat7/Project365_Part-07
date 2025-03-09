import "./globals.css";

export const metadata = {
  title: "Job Tracker",
  description: "Track your job applications easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
