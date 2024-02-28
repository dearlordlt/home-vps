import React from 'react';

import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Erah',
  description: 'Violence is the last refuge of the incompetent.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  )
}