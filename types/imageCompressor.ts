export type ImageCompressorFormat = 'image/jpeg' | 'image/png' | 'image/webp';

export type CompressImageInput = {
  file: File;
  outputFormat: ImageCompressorFormat;
  quality: number;
};

export type CompressImageResult = {
  url: string;
  fileName: string;
  originalSize: number;
  compressedSize: number;
  reductionRate: number;
};