import type { Metadata } from 'next';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import ImageConverter from '@/components/tools/image-converter/ImageConverter';

export const metadata: Metadata = {
  title: 'PNG to WEBP Converter | Free Online Image Converter | FIXLGS',
  description:
    'Convert PNG images to WEBP online for free. Browser-based PNG to WEBP converter with no signup and no server upload.',
};

export default function PngToWebpPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader locale="en" />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-10">
        <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <p className="text-sm font-bold text-[var(--color-primary)]">
            FIXLGS TOOLS
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
            PNG to WEBP Converter
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
            Convert PNG images to WEBP directly in your browser. No signup, no
            server upload, and no complicated settings.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
            WEBP is commonly used for websites because it can help reduce image
            file size while keeping practical visual quality.
          </p>
        </header>

        <ImageConverter defaultOutputFormat="image/webp" locale="en" />

        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <h2 className="text-2xl font-black text-[var(--color-text-main)]">
            Why convert PNG to WEBP?
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
            PNG files are often larger than needed for web use. WEBP can be a
            practical format for blog images, website uploads, landing pages,
            and lightweight image delivery.
          </p>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
            Upload your PNG image, choose WEBP, convert it in the browser, and
            download the converted file.
          </p>
        </section>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}