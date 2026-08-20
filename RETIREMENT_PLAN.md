# fixlgs-tools retirement deployment

- Domain: `https://tools.fixlgs.com`
- Mode: `redirect`
- Keep the Vercel project and DNS active while Google processes the retirement.
- `robots.txt` stays crawlable so crawlers can observe 301/410 responses.
- `sitemap.xml` is retired with HTTP 410.
- Do not restore the legacy sitemap or legacy content after deployment.

## Permanent redirect map

- `/` → `https://toolbox.fixlgs.com/ko/jpg-png-webp-image-converter` (301)
- `/image-converter` → `https://toolbox.fixlgs.com/ko/jpg-png-webp-image-converter` (301)
- `/jpg-to-png` → `https://toolbox.fixlgs.com/ko/jpg-png-webp-image-converter` (301)
- `/png-to-webp` → `https://toolbox.fixlgs.com/ko/jpg-png-webp-image-converter` (301)
- `/webp-to-jpg` → `https://toolbox.fixlgs.com/ko/jpg-png-webp-image-converter` (301)
- `/en/image-converter` → `https://toolbox.fixlgs.com/en/jpg-png-webp-image-converter` (301)
- `/en/image-converter/jpg-to-png` → `https://toolbox.fixlgs.com/en/jpg-png-webp-image-converter` (301)
- `/en/image-converter/png-to-webp` → `https://toolbox.fixlgs.com/en/jpg-png-webp-image-converter` (301)
- `/en/image-converter/webp-to-jpg` → `https://toolbox.fixlgs.com/en/jpg-png-webp-image-converter` (301)
- `/image-compressor` → `https://toolbox.fixlgs.com/ko/image-compressor` (301)
- `/image-compressor/jpg-compressor` → `https://toolbox.fixlgs.com/ko/image-compressor` (301)
- `/image-compressor/png-compressor` → `https://toolbox.fixlgs.com/ko/image-compressor` (301)
- `/image-compressor/webp-compressor` → `https://toolbox.fixlgs.com/ko/image-compressor` (301)
- `/en/image-compressor` → `https://toolbox.fixlgs.com/en/image-compressor` (301)
- `/en/image-compressor/jpg-compressor` → `https://toolbox.fixlgs.com/en/image-compressor` (301)
- `/en/image-compressor/png-compressor` → `https://toolbox.fixlgs.com/en/image-compressor` (301)
- `/en/image-compressor/webp-compressor` → `https://toolbox.fixlgs.com/en/image-compressor` (301)

- Any other legacy path also redirects to the default replacement tool.
