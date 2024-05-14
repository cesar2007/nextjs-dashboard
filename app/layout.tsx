import { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Toaster } from "@/components/ui/sonner"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <Toaster/>
    </html>
  );
}
