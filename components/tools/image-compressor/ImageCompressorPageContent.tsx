import ImageCompressor from '@/components/tools/image-compressor/ImageCompressor';

type ImageCompressorPageContentProps = {
  locale?: 'ko' | 'en';
};

export default function ImageCompressorPageContent({
  locale = 'ko',
}: ImageCompressorPageContentProps) {
  const isEnglish = locale === 'en';

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-10">
      <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
        <p className="text-sm font-bold text-[var(--color-primary)]">
          FIXLGS TOOLS
        </p>

        <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
          {isEnglish ? 'Free Online Image Compressor' : '무료 온라인 이미지 압축기'}
        </h1>

        <p className="mt-2 text-xl font-bold text-[var(--color-text-sub)]">
          {isEnglish
            ? 'Compress JPG, PNG and WEBP images in your browser'
            : 'JPG, PNG, WEBP 이미지 용량 줄이기'}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
          {isEnglish
            ? 'Compress JPG, PNG and WEBP images directly in your browser. No sign-up, no server upload, and no complicated settings.'
            : 'JPG, PNG, WEBP 이미지를 회원가입 없이 브라우저에서 바로 압축할 수 있습니다. 업로드한 이미지는 서버에 저장되지 않고 브라우저에서 처리됩니다.'}
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
          {isEnglish
            ? 'This tool is useful for blog images, website uploads, thumbnails, documents, and lightweight web content.'
            : '블로그 이미지, 웹사이트 업로드, 썸네일, 문서 첨부처럼 이미지 용량을 줄여야 할 때 사용할 수 있습니다.'}
        </p>
      </header>

      <ImageCompressor locale={locale} />

      <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
        <h2 className="text-2xl font-black text-[var(--color-text-main)]">
          {isEnglish
            ? 'Browser-based image compression'
            : '브라우저 기반 이미지 압축'}
        </h2>

        <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
          {isEnglish
            ? 'This image compressor works directly inside your browser. JPG and WEBP are compressed by quality adjustment, while PNG compression may be limited depending on browser processing.'
            : '이미지 압축은 브라우저에서 바로 처리됩니다. JPG와 WEBP는 품질 조절 방식으로 압축되며, PNG는 브라우저 처리 방식에 따라 압축 효과가 제한될 수 있습니다.'}
        </p>

        <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
          {isEnglish
            ? 'Because the file is processed in the browser, it is not stored on the FIXLGS server.'
            : '파일은 서버에 저장되지 않고 사용자 브라우저에서 처리되므로, 간단한 이미지 용량 줄이기 작업에 부담 없이 사용할 수 있습니다.'}
        </p>
      </section>
    </section>
  );
}