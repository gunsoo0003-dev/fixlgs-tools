import ImageConverter from '../../components/image-converter/ImageConverter';

export const metadata = {
  title: 'JPG to PNG Converter | Free Online Image Converter',
  description:
    'Convert JPG images to PNG online for free. Fast browser-based JPG to PNG converter with no signup required.',
};

export default function JpgToPngPage() {
  return (
    <main className="min-h-screen bg-[var(--color-page)] px-4 py-10">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <section>
          <p className="text-sm font-semibold text-[var(--color-primary)]">
            Free Online Tool · 무료 이미지 변환기
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-text-main)]">
            JPG to PNG Converter
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--color-text-sub)]">
            Convert JPG images to PNG directly in your browser. No signup, no
            upload to server, and no complicated settings.
            <br />
            JPG 이미지를 PNG로 빠르게 변환할 수 있는 무료 웹도구입니다.
          </p>
        </section>

        <ImageConverter defaultOutputFormat="image/png" />
      </div>
    </main>
  );
}