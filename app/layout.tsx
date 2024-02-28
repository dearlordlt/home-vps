import React from 'react';
import { Metadata } from 'next';

import TopNav from '../components/TopNav';

import './globals.css';

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <TopNav />
        <main>{children}</main>
      </body>
    </html>
  )
}