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
      <meta name="google-site-verification" content="2fq1XRWmLJezhFi39_we9_hLx0x-GiexB7Q30EARWVQ" />
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DYE71TCK6X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DYE71TCK6X');
</script>
      <body>
        <Providers>{children}</Providers>
        <ChatSupport />
      </body>
    </html>
  )
}
