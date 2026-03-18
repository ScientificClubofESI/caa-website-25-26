import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "CAA 4.0",
  description: "CSE Around Algeria unites learners and innovators, boosting collaboration and tech community growth.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
    openGraph: {
    title: 'CAA 4.0',
    description: 'CSE Around Algeria unites learners and innovators, boosting collaboration and tech community growth.',
    images: ['/images/cover.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataHack 3.0',
    description: 'CSE Around Algeria unites learners and innovators, boosting collaboration and tech community growth.',
    images: ['/images/cover.png'],
  },
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