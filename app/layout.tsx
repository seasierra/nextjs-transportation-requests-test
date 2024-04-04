import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parcel requests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark text-foreground bg-background`}>
        <Providers>
          <div className="container mx-auto h-screen">
            <div className="flex justify-center items-center h-full">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
