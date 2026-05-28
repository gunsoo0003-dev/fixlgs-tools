import type { Metadata } from 'next';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import ImageCompressor from '@/components/tools/image-compressor/ImageCompressor';

export const metadata: Metadata = {
  title: 'PNG Compressor | Compress PNG Online Free | FIXLGS',
  description:
    'Compress PNG images online for free. Browser-based PNG compressor with no signup and no server upload.',
};

export default function PngCompressorPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader locale="en" />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-10">
        <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <p className="text-sm font-bold text-[var(--color-primary)]">
            FIXLGS TOOLS
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
            PNG Compressor
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
            Compress PNG images directly in your browser. No signup, no server
            upload, and no complicated settings.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
            PNG compression may be limited depending on browser processing. If
            you need a smaller web image, you can also compare the WEBP output.
          </p>
        </header>

        <ImageCompressor defaultOutputFormat="image/png" locale="en" />

        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <h2 className="text-2xl font-black text-[var(--color-text-main)]">
            What should you know about PNG compression?
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
            PNG is often used for sharp graphics, screenshots, and images with
            transparent areas. Browser-based PNG compression can be limited, so
            it is useful to compare the final file size after compression.
          </p>
        </section>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}