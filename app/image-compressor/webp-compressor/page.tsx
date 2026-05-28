import type { Metadata } from 'next';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import ImageCompressor from '@/components/tools/image-compressor/ImageCompressor';

export const metadata: Metadata = {
  title: 'WEBP 압축기 | WEBP 용량 줄이기 무료 사이트 | FIXLGS',
  description:
    'WEBP 압축기로 WEBP 이미지 용량을 브라우저에서 바로 줄이세요. 회원가입 없이 사용할 수 있는 무료 이미지 압축 도구입니다.',
};

export default function WebpCompressorPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader locale="ko" />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-10">
        <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <p className="text-sm font-bold text-[var(--color-primary)]">
            FIXLGS TOOLS
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
            WEBP 압축기
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
            WEBP 이미지 용량을 브라우저에서 바로 줄일 수 있는 무료 이미지
            압축기입니다. 웹사이트 이미지, 블로그 이미지, 썸네일 작업에 사용할
            수 있습니다.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
            WEBP는 웹 이미지에 자주 사용되는 형식이며, 품질 조절을 통해 더
            가벼운 파일로 만들 수 있습니다.
          </p>
        </header>

        <ImageCompressor defaultOutputFormat="image/webp" locale="ko" />

        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <h2 className="text-2xl font-black text-[var(--color-text-main)]">
            WEBP 용량을 줄이는 이유
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
            WEBP는 웹페이지에서 이미지 용량을 줄이기 위해 자주 사용됩니다.
            하지만 원본 WEBP 파일도 상황에 따라 크기가 클 수 있으므로, 업로드
            전 한 번 더 압축하면 페이지 로딩 부담을 줄일 수 있습니다.
          </p>
        </section>
      </section>

      <SiteFooter locale="ko" />
    </main>
  );
}