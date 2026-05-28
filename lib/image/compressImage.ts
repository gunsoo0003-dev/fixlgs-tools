import type {
  CompressImageInput,
  CompressImageResult,
  ImageCompressorFormat,
} from '@/types/imageCompressor';

const extensionMap: Record<ImageCompressorFormat, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

function getFileNameWithoutExtension(fileName: string) {
  return fileName.replace(/\.[^/.]+$/, '');
}

function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const imageUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(imageUrl);
      resolve(image);
    };

    image.onerror = () => {
      URL.revokeObjectURL(imageUrl);
      reject(new Error('Failed to load image.'));
    };

    image.src = imageUrl;
  });
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  outputFormat: ImageCompressorFormat,
  quality: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('Failed to compress image.'));
          return;
        }

        resolve(blob);
      },
      outputFormat,
      quality,
    );
  });
}

export async function compressImage({
  file,
  outputFormat,
  quality,
}: CompressImageInput): Promise<CompressImageResult> {
  const image = await loadImageFromFile(file);

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    throw new Error('Canvas is not supported.');
  }

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  if (outputFormat === 'image/jpeg') {
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  context.drawImage(image, 0, 0);

  const compressedBlob = await canvasToBlob(canvas, outputFormat, quality);
  const compressedUrl = URL.createObjectURL(compressedBlob);

  const originalSize = file.size;
  const compressedSize = compressedBlob.size;
  const reductionRate =
    originalSize > 0
      ? Math.max(0, Math.round(((originalSize - compressedSize) / originalSize) * 100))
      : 0;

  const baseName = getFileNameWithoutExtension(file.name);
  const extension = extensionMap[outputFormat];

  return {
    url: compressedUrl,
    fileName: `${baseName}-compressed.${extension}`,
    originalSize,
    compressedSize,
    reductionRate,
  };
}