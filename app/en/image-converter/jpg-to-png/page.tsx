import type { Metadata } from 'next';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import ImageConverter from '@/components/tools/image-converter/ImageConverter';

export const metadata: Metadata = {
  title: 'JPG to PNG Converter | Free Online Image Converter | FIXLGS',
  description:
    'Convert JPG images to PNG online for free. Fast browser-based JPG to PNG converter with no signup and no server upload.',
};

export default function JpgToPngPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader locale="en" />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-10">
        <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <p className="text-sm font-bold text-[var(--color-primary)]">
            FIXLGS TOOLS
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
            JPG to PNG Converter
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
            Convert JPG images to PNG directly in your browser. No signup, no
            server upload, and no complicated settings.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
            This tool is useful when you need a PNG image for websites,
            documents, thumbnails, transparent workflows, or simple format
            changes.
          </p>
        </header>

        <ImageConverter defaultOutputFormat="image/png" locale="en" />

        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <h2 className="text-2xl font-black text-[var(--color-text-main)]">
            When should you convert JPG to PNG?
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
            JPG is commonly used for photos and compressed images. PNG is often
            preferred when you need clearer edges, screenshots, graphics, or
            images that should keep sharp visual quality.
          </p>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
            Upload your JPG image, choose PNG, convert it in the browser, and
            download the converted file.
          </p>
        </section>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}