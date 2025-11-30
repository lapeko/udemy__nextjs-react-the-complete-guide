import AppHeader from './components/app-header';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <AppHeader />
          {children}
        </div>
      </body>
    </html>
  )
}
