import { ImageOutputFormat } from '../../types/imageTool';

type ConvertImageParams = {
  file: File;
  outputFormat: ImageOutputFormat;
  quality?: number;
};

type ConvertImageResult = {
  url: string;
  fileName: string;
};

function getExtension(outputFormat: ImageOutputFormat) {
  if (outputFormat === 'image/png') {
    return 'png';
  }

  if (outputFormat === 'image/webp') {
    return 'webp';
  }

  return 'jpg';
}

export async function convertImage({
  file,
  outputFormat,
  quality = 0.92,
}: ConvertImageParams): Promise<ConvertImageResult> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Only image files can be converted.'));
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement('canvas');

      canvas.width = image.width;
      canvas.height = image.height;

      const context = canvas.getContext('2d');

      if (!context) {
        URL.revokeObjectURL(imageUrl);
        reject(new Error('Could not prepare the image conversion environment.'));
        return;
      }

      context.drawImage(image, 0, 0);

      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(imageUrl);

          if (!blob) {
            reject(new Error('Image conversion failed.'));
            return;
          }

          const convertedUrl = URL.createObjectURL(blob);
          const originalName = file.name.replace(/\.[^/.]+$/, '');
          const extension = getExtension(outputFormat);

          resolve({
            url: convertedUrl,
            fileName: `${originalName}.${extension}`,
          });
        },
        outputFormat,
        quality,
      );
    };

    image.onerror = () => {
      URL.revokeObjectURL(imageUrl);
      reject(new Error('Could not load the selected image.'));
    };

    image.src = imageUrl;
  });
}