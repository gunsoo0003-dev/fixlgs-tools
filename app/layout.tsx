import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FIXLGS Tools | Free Online Image Converter | 무료 이미지 변환기',
  description:
    'Free online image converter for JPG, PNG and WEBP. 무료 이미지 변환기로 JPG, PNG, WEBP 이미지를 브라우저에서 바로 변환하세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}