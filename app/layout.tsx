import type { Metadata } from 'next';
import Nav from './(components)/Nav';
import './styles/globals.scss';

export const metadata: Metadata = {
  title: 'Pakistan Railways',
  description: 'Developed for the people of Pakistan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}</body>
    </html>
  )
}
