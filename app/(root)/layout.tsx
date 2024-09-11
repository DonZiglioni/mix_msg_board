import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";

import Bottombar from "@/components/shared/Bottombar";
import Topbar from "@/components/shared/Topbar";
import Leftbar from "@/components/shared/Leftbar";
import Rightbar from "@/components/shared/Rightbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Mix Techniques',
  description: 'A web forum for audio and mix engineers!'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={inter.className}>

          <Topbar />

          <main className='flex flex-row'>
            <Leftbar />
            <section className='main-container'>
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
            {/* @ts-ignore */}
            <Rightbar />
          </main>
          <Bottombar />

        </body>
      </html>
    </ClerkProvider>
  )
}