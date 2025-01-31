import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Next Delivery",
  description: "Your next delivery is on its way!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <main className={`w-full p-[20px] h-screen items-center flex justify-center`}>
          {children}
        </main>
      </body>
    </html>
  );
}
