import type { Metadata } from 'next';

import ImageConverterPageContent from '@/components/tools/image-converter/ImageConverterPageContent';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title: 'Image Converter | JPG PNG WEBP Converter | 무료 이미지 변환기',
  description:
    'Free online image converter for JPG, PNG and WEBP. 무료 이미지 변환기로 JPG, PNG, WEBP 이미지를 브라우저에서 바로 변환하세요.',
};

export default function ImageConverterPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader />

      <ImageConverterPageContent />

      <SiteFooter />
    </main>
  );
}