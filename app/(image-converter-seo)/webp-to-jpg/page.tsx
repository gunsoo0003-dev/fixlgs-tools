import ImageConverter from '@/components/tools/image-converter/ImageConverter';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata = {
  title: 'WEBP to JPG Converter | Free Online Image Converter',
  description:
    'Convert WEBP images to JPG online for free. Fast browser-based WEBP to JPG converter with no signup required.',
};

export default function WebpToJpgPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)]">
      <SiteHeader />

      <div className="px-4 py-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          <section>
            <p className="text-sm font-semibold text-[var(--color-primary)]">
              Free Online Tool · 무료 이미지 변환기
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-text-main)]">
              WEBP to JPG Converter
            </h1>

            <p className="mt-4 text-base leading-7 text-[var(--color-text-sub)]">
              Convert WEBP images to JPG directly in your browser. Simple, fast,
              and useful when JPG compatibility is needed.
              <br />
              WEBP 이미지를 JPG로 변환할 수 있는 무료 웹도구입니다.
            </p>
          </section>

          <ImageConverter defaultOutputFormat="image/jpeg" />
        </div>
      </div>
    </main>
  );
}