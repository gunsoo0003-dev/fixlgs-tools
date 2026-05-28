import type { Metadata } from 'next';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import ImageConverterPageContent from '@/components/tools/image-converter/ImageConverterPageContent';

export const metadata: Metadata = {
  title: 'Free Online Image Converter | JPG PNG WEBP Converter | FIXLGS',
  description:
    'Convert JPG, PNG and WEBP images online for free. Browser-based image converter with no signup and no server upload.',
};

export default function EnglishImageConverterPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader locale="en" />

      <ImageConverterPageContent locale="en" />

      <SiteFooter locale="en" />
    </main>
  );
}