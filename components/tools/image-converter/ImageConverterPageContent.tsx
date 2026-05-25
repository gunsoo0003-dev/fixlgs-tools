import ImageConverter from '@/components/tools/image-converter/ImageConverter';

export default function ImageConverterPageContent() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-10">
      <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
        <p className="text-sm font-bold text-[var(--color-primary)]">
          FIXLGS TOOLS
        </p>

        <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
          Free Online Image Converter
        </h1>

        <p className="mt-2 text-xl font-bold text-[var(--color-text-sub)]">
          무료 온라인 이미지 변환기
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
          Convert JPG, PNG and WEBP images directly in your browser. No sign-up,
          no server upload, and no complicated settings.
        </p>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
          JPG, PNG, WEBP 이미지를 회원가입 없이 브라우저에서 바로 변환할 수
          있습니다. 업로드한 이미지는 서버에 저장되지 않고 브라우저에서
          처리됩니다.
        </p>
      </header>

      <ImageConverter />

      <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
        <h2 className="text-2xl font-black text-[var(--color-text-main)]">
          Browser-based image conversion
        </h2>

        <p className="mt-3 text-sm leading-7 text-[var(--color-text-sub)]">
          This image converter works directly inside your browser. You can
          convert JPG to PNG, PNG to WEBP, WEBP to JPG and other supported image
          formats without installing extra software.
        </p>

        <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
          이미지 변환은 브라우저에서 바로 처리되며, 간단한 이미지 포맷 변경이
          필요할 때 빠르게 사용할 수 있습니다.
        </p>
      </section>
    </section>
  );
}