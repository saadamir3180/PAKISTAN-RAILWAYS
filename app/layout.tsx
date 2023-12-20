import type { Metadata } from 'next';
import './styles/globals.scss';
import Header from './(components)/Header/Header';
import Footer from './(components)/Footer';

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
      <div className='bodyEnclosure'>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
      </div>
    </body>
    </html>
  )
}
