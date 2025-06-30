import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thiruvasagam - திருவாசகம்',
  description: 'A website dedicated to the Tamil devotional text Thiruvasagam, featuring verses, translations, and resources for spiritual seekers.',
  generator: 'Pranesh',
  icons: {
  icon: '/hero-bg.jpg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
