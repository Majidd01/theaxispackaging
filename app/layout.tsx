import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import Script from "next/script"
import "./globals.css"
import { Providers } from "./providers"
import { ChatSupport } from "@/components/chat-support"

export const metadata: Metadata = {
  title: "Axis Packaging - Premium Custom Packaging Solutions",
  description:
    "Leading provider of premium custom packaging solutions. From retail boxes to industrial shipping, we offer innovative, sustainable, and high-quality packaging tailored to your brand.",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PGRM8ZJSRX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PGRM8ZJSRX');
        `}
      </Script>
      <body>
        <Providers>{children}</Providers>
        <ChatSupport />
      </body>
    </html>
  )
}
