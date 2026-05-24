import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="text-lg font-black tracking-tight text-[var(--color-text-main)]"
        >
          FIXLGS
        </Link>

        <nav className="flex items-center gap-4 text-sm font-semibold text-[var(--color-text-sub)]">
          <Link
            href="/image-converter"
            className="hover:text-[var(--color-primary)]"
          >
            Image Converter
          </Link>
        </nav>
      </div>
    </header>
  );
}