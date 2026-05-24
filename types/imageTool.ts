export type ImageOutputFormat = 'image/png' | 'image/jpeg' | 'image/webp';

export type ImageFormatOption = {
  label: string;
  value: ImageOutputFormat;
  extension: string;
};

export const imageFormatOptions: ImageFormatOption[] = [
  {
    label: 'PNG',
    value: 'image/png',
    extension: 'png',
  },
  {
    label: 'JPG',
    value: 'image/jpeg',
    extension: 'jpg',
  },
  {
    label: 'WEBP',
    value: 'image/webp',
    extension: 'webp',
  },
];