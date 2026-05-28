import type { Metadata } from 'next';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import ImageCompressorPageContent from '@/components/tools/image-compressor/ImageCompressorPageContent';

export const metadata: Metadata = {
  title: 'Free Online Image Compressor | JPG PNG WEBP Compressor | FIXLGS',
  description:
    'Compress JPG, PNG and WEBP images online for free. Browser-based image compressor with no signup and no server upload.',
};

export default function EnglishImageCompressorPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader locale="en" />

      <ImageCompressorPageContent locale="en" />

      <SiteFooter locale="en" />
    </main>
  );
}