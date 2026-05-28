import ImageConverter from '@/components/tools/image-converter/ImageConverter';

type ImageConverterPageContentProps = {
  locale?: 'ko' | 'en';
};

export default function ImageConverterPageContent({
  locale = 'ko',
}: ImageConverterPageContentProps) {
  const isEnglish = locale === 'en';

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-10">
      <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
        <p className="text-sm font-bold text-[var(--color-primary)]">
          FIXLGS TOOLS
        </p>

        <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
          {isEnglish ? 'Free Online Image Converter' : '무료 온라인 이미지 변환기'}
        </h1>

        <p className="mt-2 text-xl font-bold text-[var(--color-text-sub)]">
          {isEnglish
            ? 'Convert JPG, PNG and WEBP images in your browser'
            : 'JPG, PNG, WEBP 이미지를 브라우저에서 바로 변환'}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
          {isEnglish
            ? 'Convert JPG, PNG and WEBP images directly in your browser. No sign-up, no server upload, and no complicated settings.'
            : 'JPG, PNG, WEBP 이미지를 회원가입 없이 브라우저에서 바로 변환할 수 있습니다. 업로드한 이미지는 서버에 저장되지 않고 브라우저에서 처리됩니다.'}
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
          {isEnglish
            ? 'This tool is useful for blog images, website uploads, documents, thumbnails, and simple image format changes.'
            : '블로그 이미지, 웹사이트 업로드, 문서 첨부, 썸네일 제작처럼 간단한 이미지 포맷 변경이 필요할 때 사용할 수 있습니다.'}
        </p>
      </header>

      <ImageConverter locale={locale} />

      <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
        <h2 className="text-2xl font-black text-[var(--color-text-main)]">
          {isEnglish
            ? 'Browser-based image conversion'
            : '브라우저 기반 이미지 변환'}
        </h2>

        <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
          {isEnglish
            ? 'This image converter works directly inside your browser. You can convert JPG to PNG, PNG to WEBP, WEBP to JPG and other supported image formats without installing extra software.'
            : '이미지 변환은 브라우저에서 바로 처리됩니다. 별도 프로그램 설치 없이 JPG를 PNG로, PNG를 WEBP로, WEBP를 JPG로 변환할 수 있습니다.'}
        </p>

        <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
          {isEnglish
            ? 'Because the file is processed in the browser, it is not stored on the FIXLGS server.'
            : '파일은 서버에 저장되지 않고 사용자 브라우저에서 처리되므로, 간단한 이미지 포맷 변경 작업에 부담 없이 사용할 수 있습니다.'}
        </p>
      </section>
    </section>
  );
}