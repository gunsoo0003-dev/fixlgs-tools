import type { Metadata } from 'next';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import ImageCompressor from '@/components/tools/image-compressor/ImageCompressor';

export const metadata: Metadata = {
  title: 'JPG Compressor | Compress JPG Online Free | FIXLGS',
  description:
    'Compress JPG images online for free. Browser-based JPG compressor with no signup and no server upload.',
};

export default function JpgCompressorPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader locale="en" />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-10">
        <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <p className="text-sm font-bold text-[var(--color-primary)]">
            FIXLGS TOOLS
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
            JPG Compressor
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
            Compress JPG images directly in your browser. No signup, no server
            upload, and no complicated settings.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
            This tool is useful for blog photos, website uploads, thumbnails,
            and document images.
          </p>
        </header>

        <ImageCompressor defaultOutputFormat="image/jpeg" locale="en" />

        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <h2 className="text-2xl font-black text-[var(--color-text-main)]">
            When should you compress JPG images?
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
            JPG images are widely used for photos, but large image files can
            slow down uploads and web pages. Compressing JPG files can make them
            easier to use for blogs, websites, documents, and online forms.
          </p>
        </section>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}