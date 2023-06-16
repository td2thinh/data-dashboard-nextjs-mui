import './globals.css'

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard built with Next.js and Material UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
