import type { Metadata } from 'next';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import ImageConverter from '@/components/tools/image-converter/ImageConverter';

export const metadata: Metadata = {
  title: 'WEBP to JPG Converter | Free Online Image Converter | FIXLGS',
  description:
    'Convert WEBP images to JPG online for free. Browser-based WEBP to JPG converter with no signup and no server upload.',
};

export default function WebpToJpgPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader locale="en" />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-10">
        <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <p className="text-sm font-bold text-[var(--color-primary)]">
            FIXLGS TOOLS
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
            WEBP to JPG Converter
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
            Convert WEBP images to JPG directly in your browser. No signup, no
            server upload, and no complicated settings.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
            This tool is useful when a website, document editor, upload form, or
            older system does not support WEBP images.
          </p>
        </header>

        <ImageConverter defaultOutputFormat="image/jpeg" locale="en" />

        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <h2 className="text-2xl font-black text-[var(--color-text-main)]">
            Why convert WEBP to JPG?
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
            WEBP is useful for modern web images, but some upload systems,
            document tools, and older platforms may still require JPG. In that
            case, converting WEBP to JPG can make the file easier to use.
          </p>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
            Upload your WEBP image, choose JPG, convert it in the browser, and
            download the converted file.
          </p>
        </section>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}