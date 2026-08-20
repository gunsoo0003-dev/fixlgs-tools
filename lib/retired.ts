const redirects: Record<string, string> = {
  "/": "https://toolbox.fixlgs.com/ko/jpg-png-webp-image-converter",
  "/image-converter": "https://toolbox.fixlgs.com/ko/jpg-png-webp-image-converter",
  "/jpg-to-png": "https://toolbox.fixlgs.com/ko/jpg-png-webp-image-converter",
  "/png-to-webp": "https://toolbox.fixlgs.com/ko/jpg-png-webp-image-converter",
  "/webp-to-jpg": "https://toolbox.fixlgs.com/ko/jpg-png-webp-image-converter",
  "/en/image-converter": "https://toolbox.fixlgs.com/en/jpg-png-webp-image-converter",
  "/en/image-converter/jpg-to-png": "https://toolbox.fixlgs.com/en/jpg-png-webp-image-converter",
  "/en/image-converter/png-to-webp": "https://toolbox.fixlgs.com/en/jpg-png-webp-image-converter",
  "/en/image-converter/webp-to-jpg": "https://toolbox.fixlgs.com/en/jpg-png-webp-image-converter",
  "/image-compressor": "https://toolbox.fixlgs.com/ko/image-compressor",
  "/image-compressor/jpg-compressor": "https://toolbox.fixlgs.com/ko/image-compressor",
  "/image-compressor/png-compressor": "https://toolbox.fixlgs.com/ko/image-compressor",
  "/image-compressor/webp-compressor": "https://toolbox.fixlgs.com/ko/image-compressor",
  "/en/image-compressor": "https://toolbox.fixlgs.com/en/image-compressor",
  "/en/image-compressor/jpg-compressor": "https://toolbox.fixlgs.com/en/image-compressor",
  "/en/image-compressor/png-compressor": "https://toolbox.fixlgs.com/en/image-compressor",
  "/en/image-compressor/webp-compressor": "https://toolbox.fixlgs.com/en/image-compressor"
};

export function handleRetiredRequest(request: Request) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/$/, "") || "/";

  if (path === "/robots.txt") {
    return new Response("User-agent: *\nAllow: /\n", {
      status: 200,
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
    });
  }

  if (path === "/sitemap.xml") {
    return new Response("Gone\n", {
      status: 410,
      headers: { "content-type": "text/plain; charset=utf-8", "x-robots-tag": "noindex" },
    });
  }

  const destination = redirects[path] ?? "https://toolbox.fixlgs.com/ko/jpg-png-webp-image-converter";
  return new Response(null, {
    status: 301,
    headers: {
      location: destination,
      "cache-control": "public, max-age=3600",
      "x-robots-tag": "noindex",
    },
  });
}
