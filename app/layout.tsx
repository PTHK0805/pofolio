import './globals.css'
import {Inter, Poppins, Roboto, Plus_Jakarta_Sans} from 'next/font/google'
import {Analytics} from "@vercel/analytics/react"
import React from "react";

const inter = Plus_Jakarta_Sans({subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800"]})

export const metadata = {
  title: 'Phyo Thiha Kyaw - Web Developer',
  description: 'Portfolio of Phyo Thiha Kyaw, Web Developer',
  metadataBase: new URL('https://phyothihakyaw.com'),
  openGraph: {
    title: 'Phyo Thiha Kyaw - Web Developer',
    description: 'Portfolio of Phyo Thiha Kyaw, Web Developer',
    type: 'website',
    url: 'https://phyothihakyaw.com',
    images: '/home.png',
    siteName: 'Phyo Thiha Kyaw - Web Developer',
  }
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${inter.className}`}>
    {children}
    </body>
    <Analytics/>
    </html>
  )
}
