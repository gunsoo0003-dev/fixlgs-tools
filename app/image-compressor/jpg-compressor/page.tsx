import type { Metadata } from 'next';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import ImageCompressor from '@/components/tools/image-compressor/ImageCompressor';

export const metadata: Metadata = {
  title: 'JPG 압축기 | JPG 용량 줄이기 무료 사이트 | FIXLGS',
  description:
    'JPG 압축기로 JPG 이미지 용량을 브라우저에서 바로 줄이세요. 회원가입 없이 사용할 수 있는 무료 이미지 압축 도구입니다.',
};

export default function JpgCompressorPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader locale="ko" />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-10">
        <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <p className="text-sm font-bold text-[var(--color-primary)]">
            FIXLGS TOOLS
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
            JPG 압축기
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
            JPG 이미지 용량을 브라우저에서 바로 줄일 수 있는 무료 이미지
            압축기입니다. 회원가입 없이 사용할 수 있고, 파일은 서버에 저장되지
            않습니다.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
            블로그 이미지, 웹사이트 업로드, 문서 첨부, 썸네일 제작처럼 JPG
            용량을 줄여야 할 때 사용할 수 있습니다.
          </p>
        </header>

        <ImageCompressor defaultOutputFormat="image/jpeg" locale="ko" />

        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <h2 className="text-2xl font-black text-[var(--color-text-main)]">
            JPG 용량을 줄여야 하는 경우
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
            JPG는 사진 이미지에 자주 사용되지만, 원본 이미지가 크면 업로드나
            페이지 로딩이 느려질 수 있습니다. 품질을 조절해 적절한 용량으로
            줄이면 블로그와 웹페이지 작업에 더 편하게 사용할 수 있습니다.
          </p>
        </section>
      </section>

      <SiteFooter locale="ko" />
    </main>
  );
}