import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cust = localFont({
  src: '../public/fonts/Varino-Normal.otf',
  variable: '--font-cust',
  display: 'swap',
});

export const metadata = {
  title: "UoJ Coders v5.0 - (2026)",
  description: "12-hour inter-university competitive programming hackathon.",
  keywords: ["Hackathon", "Coding Competition", "Coders", "UOJ"],
  locale: "en_US",
  type: "website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cust.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
