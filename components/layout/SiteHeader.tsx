import Link from 'next/link';

const FEEDBACK_URL = 'https://blog.naver.com/zzzlgs/224295297191';

type SiteHeaderProps = {
  locale?: 'ko' | 'en';
};

export default function SiteHeader({ locale = 'ko' }: SiteHeaderProps) {
  const isEnglish = locale === 'en';

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
            href={isEnglish ? '/en/image-converter' : '/image-converter'}
            className="hover:text-[var(--color-primary)]"
          >
            {isEnglish ? 'Image Converter' : '이미지 변환기'}
          </Link>

          <Link
            href={isEnglish ? '/image-converter' : '/en/image-converter'}
            className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-bold text-[var(--color-text-main)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            {isEnglish ? '한국어' : 'English'}
          </Link>

          <a
            href={FEEDBACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)]"
          >
            {isEnglish ? 'Feedback' : '문의'}
          </a>
        </nav>
      </div>
    </header>
  );
}