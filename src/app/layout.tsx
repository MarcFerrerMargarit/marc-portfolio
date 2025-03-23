import './globals.css';
import type { Metadata } from 'next';
import Terminal from '@/components/layout/Terminal';

export const metadata: Metadata = {
  title: 'Marc Ferrer Margarit | Software Developer',
  description: 'Personal portfolio of Marc Ferrer Margarit, Software Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Terminal>{children}</Terminal>
      </body>
    </html>
  );
}