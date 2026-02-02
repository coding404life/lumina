import type { Metadata } from "next"
import "./globals.css"
import { ReactNode } from "react"
import localFont from "next/dist/compiled/@next/font/dist/local"

const ibmBlexSans = localFont({
  src: [
    {
      path: "./fonts/IBMPlexSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
})

const bebasNeue = localFont({
  src: [{ path: "./fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--bebas-neue",
})

export const metadata: Metadata = {
  title: "Book Knowledge",
  description: "book knowledge is a book borrowing university library management solution",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ibmBlexSans.className} ${bebasNeue.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
