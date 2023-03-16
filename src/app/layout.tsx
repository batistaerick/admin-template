import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Admin',
  description: 'Created by Erick',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
