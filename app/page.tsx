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
            Free Online Image Converter
          </h1>

          <p className="mt-2 text-xl font-bold text-[var(--color-text-sub)]">
            무료 온라인 이미지 변환기
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
            Convert JPG, PNG and WEBP images directly in your browser. No
            sign-up, no server upload, and no complicated settings.
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
            JPG, PNG, WEBP 이미지를 회원가입 없이 브라우저에서 바로 변환할 수
            있습니다.
          </p>

          <Link
            href="/image-converter"
            className="mt-6 inline-flex rounded-2xl bg-[var(--color-primary)] px-5 py-3 text-sm font-black text-white hover:bg-[var(--color-primary-hover)]"
          >
            Open Image Converter
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}