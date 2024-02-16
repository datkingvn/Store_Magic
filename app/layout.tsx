import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DatPay Shop",
  description: "Cửa hàng bán lẻ các sản phẩm mà bạn cần ^^",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header/>
          <main className="layout-w">{children}</main>
      <Footer/>
      </body>
    </html>
  );
}
