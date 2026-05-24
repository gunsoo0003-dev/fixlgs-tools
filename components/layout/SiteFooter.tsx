export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto w-full max-w-5xl px-5 py-6 text-sm text-[var(--color-text-muted)]">
        <p>© FIXLGS Tools. Browser-based free online tools.</p>
        <p className="mt-2">
          Files are processed in your browser and are not stored on our server.
        </p>
        <p className="mt-2">
          파일은 서버에 저장되지 않고 사용자 브라우저에서 처리됩니다.
        </p>
      </div>
    </footer>
  );
}