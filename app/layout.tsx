import './globals.css'
import {Inter, Poppins, Roboto, Plus_Jakarta_Sans} from 'next/font/google'
import {Analytics} from "@vercel/analytics/react"
import React from "react";

const inter = Plus_Jakarta_Sans({subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800"]})

  export const metadata = {
  title: 'Phyo Thiha Kyaw - Full-Stack Developer',
  description: 'Portfolio of Phyo Thiha Kyaw, a Full-Stack Developer',
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
