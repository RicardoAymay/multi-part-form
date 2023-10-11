import './globals.css'

import { Ubuntu } from 'next/font/google';

export const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic", "greek"],
  variable: "--font-ubuntu",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ubuntu.variable} font-sans`}>
      <body className='flex flex-col max-w-screen min-h-screen'>{children}</body>
    </html>
  )
}
