import type { Metadata } from 'next';

import ImageConverter from '@/components/image-converter/ImageConverter';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title:
    'Image Converter | JPG PNG WEBP Converter | 무료 이미지 변환기',
  description:
    'Free online image converter for JPG, PNG and WEBP. 무료 이미지 변환기로 JPG, PNG, WEBP 이미지를 브라우저에서 바로 변환하세요.',
};

export default function ImageConverterPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text-main)]">
      <SiteHeader />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-8">
        <header className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <p className="text-sm font-bold text-[var(--color-primary)]">
            Free Image Converter
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text-main)] md:text-5xl">
            Image Converter
          </h1>

          <p className="mt-2 text-xl font-bold text-[var(--color-text-sub)]">
            무료 이미지 변환기
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-sub)] md:text-base">
            Convert JPG, PNG and WEBP images online for free. The conversion
            runs directly in your browser, so your file is not uploaded or saved
            on our server.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-muted)]">
            JPG, PNG, WEBP 이미지를 회원가입 없이 브라우저에서 바로 변환할 수
            있습니다. 업로드한 이미지는 서버에 저장되지 않습니다.
          </p>
        </header>

        <ImageConverter />

        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <h2 className="text-xl font-black text-[var(--color-text-main)]">
            Supported Image Conversions
          </h2>
          <p className="mt-1 text-sm font-semibold text-[var(--color-text-muted)]">
            지원하는 이미지 변환
          </p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-[var(--color-surface-soft)] p-4">
              <p className="font-bold text-[var(--color-text-main)]">
                WEBP Converter
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-sub)]">
                Convert WEBP images to JPG or PNG for easier sharing and
                uploading.
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                WEBP 이미지를 JPG 또는 PNG로 변환할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--color-surface-soft)] p-4">
              <p className="font-bold text-[var(--color-text-main)]">
                JPG Converter
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-sub)]">
                Convert JPG images to PNG or WEBP while keeping the original
                image size.
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                JPG 이미지를 PNG 또는 WEBP 형식으로 변환할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--color-surface-soft)] p-4">
              <p className="font-bold text-[var(--color-text-main)]">
                PNG Converter
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-sub)]">
                Convert PNG images to JPG or WEBP directly in your browser.
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                PNG 이미지를 JPG 또는 WEBP 형식으로 변환할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
          <h2 className="text-xl font-black text-[var(--color-text-main)]">
            FAQ
          </h2>
          <p className="mt-1 text-sm font-semibold text-[var(--color-text-muted)]">
            자주 묻는 질문
          </p>

          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl bg-[var(--color-surface-soft)] p-4">
              <p className="font-bold text-[var(--color-text-main)]">
                Are my images uploaded to a server?
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-sub)]">
                No. This image converter works in your browser. Your image is
                not uploaded to our server.
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                아닙니다. 이미지는 서버에 업로드되지 않고 브라우저 안에서
                처리됩니다.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--color-surface-soft)] p-4">
              <p className="font-bold text-[var(--color-text-main)]">
                Can I use it for free?
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-sub)]">
                Yes. This tool is free and does not require sign-up.
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                네. 회원가입 없이 무료로 사용할 수 있습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-[var(--color-surface-soft)] p-4">
              <p className="font-bold text-[var(--color-text-main)]">
                Does it keep the original resolution?
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-sub)]">
                Yes. The converter keeps the original image width and height.
                JPG conversion may still apply normal image compression.
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                원본 가로세로 크기를 유지합니다. JPG 변환은 포맷 특성상 일반
                압축이 적용될 수 있습니다.
              </p>
            </div>
          </div>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}