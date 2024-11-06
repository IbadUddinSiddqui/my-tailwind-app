import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'],      // Specify the subsets
});


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ibad's Portfolio",
  description: "Ibad uddins Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>     
      
        </head>
      <body
        className={` ${playfair.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
