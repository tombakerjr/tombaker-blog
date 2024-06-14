import { Metadata } from 'next';
import './globals.css'

export const metadata: Metadata = {
  title: "Tom Baker",
  description: "Personal Website of Tom Baker",
};

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
