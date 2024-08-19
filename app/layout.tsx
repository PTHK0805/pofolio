import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

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
                <ThemeProvider attribute="class">
                    {children}
                </ThemeProvider>
            </body>
            <Analytics />
        </html>
    )
}
