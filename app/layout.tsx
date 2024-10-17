import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Schedule At Your Life",
  description: "Scheduling life at your pace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='p-8'
      >
        {children}
      </body>
    </html>
  );
}
