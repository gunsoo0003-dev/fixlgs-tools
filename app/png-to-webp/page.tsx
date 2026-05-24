import ImageConverter from '../../components/image-converter/ImageConverter';

export const metadata = {
  title: 'PNG to WEBP Converter | Free Online Image Converter',
  description:
    'Convert PNG images to WEBP online for free. Reduce image file size directly in your browser.',
};

export default function PngToWebpPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] px-4 py-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <section>
          <p className="text-sm font-semibold text-[var(--color-primary)]">
            Free Online Tool · 무료 이미지 변환기
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-text-main)]">
            PNG to WEBP Converter
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--color-text-sub)]">
            Convert PNG images to WEBP directly in your browser. Useful for
            reducing image size while keeping good visual quality.
            <br />
            PNG 이미지를 WEBP로 변환해 이미지 용량을 줄이는 무료 웹도구입니다.
          </p>
        </section>

        <ImageConverter defaultOutputFormat="image/webp" />
      </div>
    </main>
  );
}