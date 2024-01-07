import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import BgBlur from "@/components/NavBar/BgBlur/BgBlur";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-slate-800 text-slate-50">
        <BgBlur />
        <NavBar />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
