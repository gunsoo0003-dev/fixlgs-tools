export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-5 py-7 text-sm text-[var(--color-text-muted)] md:flex-row md:items-start md:justify-between">
        <div>
          <p>© FIXLGS Tools. Browser-based free online tools.</p>

          <p className="mt-2">
            Files are processed in your browser and are not stored on our server.
          </p>

          <p className="mt-2">
            파일은 서버에 저장되지 않고 사용자 브라우저에서 처리됩니다.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 font-semibold text-[var(--color-text-main)]">
          <a
            href="https://fixlgs.com"
            className="transition hover:text-[var(--color-primary)]"
          >
            FIXLGS Home
          </a>

          <a
            href="https://fixlgs.com/privacy"
            className="transition hover:text-[var(--color-primary)]"
          >
            Privacy
          </a>

          <a
            href="https://fixlgs.com/terms"
            className="transition hover:text-[var(--color-primary)]"
          >
            Terms
          </a>

          <a
            href="https://fixlgs.com/contact"
            className="transition hover:text-[var(--color-primary)]"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}