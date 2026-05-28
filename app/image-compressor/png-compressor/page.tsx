import type { Metadata } from 'next';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';
import ImageCompressor from '@/components/tools/image-compressor/ImageCompressor';

export const metadata: Metadata = {
  title: 'PNG 압축기 | PNG 용량 줄이기 무료 사이트 | FIXLGS',
  description:
    'PNG 압축기로 PNG 이미지 용량을 브라우저에서 바로 줄이세요. 회원가입 없이 사용할 수 있는 무료 이미지 압축 도구입니다.',
};

export default function PngCompressorPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader locale="ko" />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-10">
        <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <p className="text-sm font-bold text-[var(--color-primary)]">
            FIXLGS TOOLS
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
            PNG 압축기
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
            PNG 이미지 용량을 브라우저에서 바로 줄일 수 있는 무료 이미지
            압축기입니다. 파일은 서버에 저장되지 않고 사용자 브라우저에서
            처리됩니다.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
            PNG는 브라우저 처리 방식에 따라 압축 효과가 제한될 수 있습니다.
            용량 절감이 크게 필요하면 WEBP 형식도 함께 비교해볼 수 있습니다.
          </p>
        </header>

        <ImageCompressor defaultOutputFormat="image/png" locale="ko" />

        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <h2 className="text-2xl font-black text-[var(--color-text-main)]">
            PNG 압축 시 참고할 점
          </h2>

          <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
            PNG는 선명한 이미지나 투명 배경에 자주 사용됩니다. 다만 JPG나 WEBP
            방식과 다르게 브라우저 압축 효과가 제한될 수 있으므로, 압축 결과의
            용량과 품질을 함께 확인하는 것이 좋습니다.
          </p>
        </section>
      </section>

      <SiteFooter locale="ko" />
    </main>
  );
}