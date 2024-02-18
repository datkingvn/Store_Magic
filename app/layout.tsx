import Header from '@/components/header/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers'
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "DatPay Shop",
  description: "Cửa hàng bán lẻ các sản phẩm mà bạn cần ^^",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <>
            <Header />
            {children}
            <Footer/>
          </>
        </Providers>
      </body>
    </html>
  )
}
