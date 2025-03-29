import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100', '200', '400', '700', '900'],
  subsets: ['latin'],
})



export const metadata: Metadata = {
  title: "A CoolStack Developer",
  description: "It's a portfolio site for Pritam Chakroborty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} dark:bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
