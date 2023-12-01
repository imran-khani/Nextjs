import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Do Next.js",
  description: "Web site created using create-next-app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
