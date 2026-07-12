import Link from 'next/link';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-10">
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <p className="text-sm font-bold text-[var(--color-primary)]">
            FIXLGS TOOLS
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
            Free Online Image Tools
          </h1>

          <p className="mt-2 text-xl font-bold text-[var(--color-text-sub)]">
            무료 온라인 이미지 도구
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
            Convert, compress and create JPG, PNG and WEBP images directly in
            your browser. No sign-up, no server upload, and no complicated
            settings.
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
            JPG, PNG, WEBP 이미지를 회원가입 없이 브라우저에서 변환하고
            압축하거나 글 이미지와 워터마크를 만들 수 있습니다.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href="/image-converter"
            className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-primary)]"
          >
            <p className="text-sm font-bold text-[var(--color-primary)]">
              IMAGE CONVERTER
            </p>

            <h2 className="mt-3 text-2xl font-black text-[var(--color-text-main)]">
              Free Image Converter
            </h2>

            <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
              Convert JPG, PNG and WEBP images in your browser.
            </p>

            <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
              JPG / PNG / WEBP 이미지 변환
            </p>
          </Link>

          <Link
            href="/image-compressor"
            className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-primary)]"
          >
            <p className="text-sm font-bold text-[var(--color-primary)]">
              IMAGE COMPRESSOR
            </p>

            <h2 className="mt-3 text-2xl font-black text-[var(--color-text-main)]">
              Free Image Compressor
            </h2>

            <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
              Compress JPG, PNG and WEBP images in your browser.
            </p>

            <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
              JPG / PNG / WEBP 이미지 용량 줄이기
            </p>
          </Link>

          <a
            href="https://studio.fixlgs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-primary)] md:col-span-2"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[var(--color-primary)]">
                  IMAGE STUDIO
                </p>

                <h2 className="mt-3 text-2xl font-black text-[var(--color-text-main)]">
                  FIXLGS Image Studio
                </h2>
              </div>

              <span
                className="text-lg font-black text-[var(--color-primary)]"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>

            <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
              Create text images, transparent watermarks and apply watermarks
              directly in your browser.
            </p>

            <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
              글 이미지 제작, 워터마크 만들기와 이미지 적용 도구
            </p>
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}