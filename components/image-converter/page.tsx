import Link from 'next/link';

import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-10">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm font-bold text-emerald-400">FIXLGS TOOLS</p>

          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Free Online Browser Tools
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            Convert images directly in your browser. No sign-up, no server
            upload, and no complicated settings. FIXLGS Tools starts with a
            simple image converter for JPG, PNG and WEBP.
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            JPG, PNG, WEBP 이미지를 브라우저에서 간단하게 변환할 수 있습니다.
          </p>

          <Link
            href="/image-converter"
            className="mt-6 inline-flex rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-black text-slate-950"
          >
            Open Image Converter
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}