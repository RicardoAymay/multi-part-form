import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col max-w-screen min-h-screen font-'>{children}</body>
    </html>
  )
}
