import type { Metadata } from 'next';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import ImageCompressor from '@/components/tools/image-compressor/ImageCompressor';

export const metadata: Metadata = {
  title: 'WEBP Compressor | Compress WEBP Online Free | FIXLGS',
  description:
    'Compress WEBP images online for free. Browser-based WEBP compressor with no signup and no server upload.',
};

export default function WebpCompressorPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader locale="en" />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-10">
        <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <p className="text-sm font-bold text-[var(--color-primary)]">
            FIXLGS TOOLS
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
            WEBP Compressor
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
            Compress WEBP images directly in your browser. No signup, no server
            upload, and no complicated settings.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
            WEBP is commonly used for lightweight web images. Compressing WEBP
            files can help reduce image size for websites, blogs, and landing
            pages.
          </p>
        </header>

        <ImageCompressor defaultOutputFormat="image/webp" locale="en" />

        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <h2 className="text-2xl font-black text-[var(--color-text-main)]">
            Why compress WEBP images?
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
            WEBP is already efficient, but large WEBP files can still slow down
            uploads and web pages. A browser-based WEBP compressor helps you
            reduce file size quickly without installing extra software.
          </p>
        </section>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}