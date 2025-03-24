import './globals.css';
import type { Metadata } from 'next';
import Terminal from '@/components/layout/Terminal';
import { Fira_Code } from 'next/font/google';

// Initialize the Fira Code font
const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Marc Ferrer Margarit | Software Architect',
  description: 'Personal portfolio of Marc Ferrer Margarit, Software Architect',
};

/**
 * Root layout component that wraps all pages in the Terminal component
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={firaCode.className}>
      <head>
        {/* DevIcon for programming language and framework icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        {/* Font Awesome for general icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Terminal>{children}</Terminal>
      </body>
    </html>
  );
}