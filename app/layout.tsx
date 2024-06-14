import { Metadata } from "next";
import "./globals.css";
import { Links } from "../components/links";

export const metadata: Metadata = {
  title: "Tom Baker",
  description: "Personal Website of Tom Baker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
        <nav>
          <Links />
        </nav>
        {children}
        <footer>
          <p>&copy; 2024 Tom Baker</p>
        </footer>
      </body>
    </html>
  );
}
