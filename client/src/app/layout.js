import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
export const metadata = {
  title : "hi",
  description : "gg"
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
