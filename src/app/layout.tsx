import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const lexend = Lexend({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Weekday Works",
  description: "Created with ❤️ by Chirag Sonar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <StoreProvider>
          {children}
        </StoreProvider>

      </body>
    </html>
  );
}
