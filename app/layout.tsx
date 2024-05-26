import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from 'next/font/local';
import {cn} from '@/lib/utils';
import { ThemeProvider } from "./_components/theme-provider";
import "./globals.css";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.ttf',
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Luana Cardoso - Dev fullstack",
  keywords: ["full-stack", "dev", "python", "django", "pytest", "sql", "javascript", "react"],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans anti-aliasing text-foreground',
        fontSans.variable,
        fontHeading.variable,
      )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider> 
        </body>
    </html>
  );
}
