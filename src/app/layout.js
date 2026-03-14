import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "CAA 4",
  description: "CAA 4 — CSE AROUND ALGERIA 4.0",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className={quicksand.variable}>
        {children}
      </body>
    </html>
  );
}