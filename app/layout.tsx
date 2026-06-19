import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import { Geist_Mono } from 'next/font/google'
import './globals.css'

const vazirmatn = Vazirmatn({
  variable: '--font-vazir',
  subsets: ['arabic', 'latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'تتر‌تام | خرید تتر با تحویل مستقیم در کیف پول',
  description:
    'تتر (USDT) را با بهترین نرخ، در کمترین زمان و با بالاترین امنیت خریداری کنید و مستقیماً در کیف پول شخصی خود دریافت نمایید. تحویل آنی، پشتیبانی ۲۴ ساعته.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a1410',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
