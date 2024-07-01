import { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Tom Baker",
  description: "Personal Website of Tom Baker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
        <Navbar />

        <main className="max-w-container mt-8 mx-auto px-4 sm:px-6 lg:px-8">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
