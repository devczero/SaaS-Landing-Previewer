import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from 'next/font/google'
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from '@/lib/utils'
import { ClerkProvider } from "@clerk/nextjs";

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: "SaaS Application",
  description: "SaaS Application",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body 
          className={cn(
            'antialiased',
            fontHeading.variable,
            fontBody.variable
          )}
        >
          <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Navbar/>
                {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}