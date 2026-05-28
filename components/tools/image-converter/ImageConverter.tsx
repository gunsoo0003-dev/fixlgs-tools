'use client';

import { ChangeEvent, DragEvent, useRef, useState } from 'react';

import { convertImage } from '@/lib/image/convertImage';
import type { ImageOutputFormat } from '@/types/imageTool';

type ImageConverterProps = {
  defaultOutputFormat?: ImageOutputFormat;
  locale?: 'ko' | 'en';
};

const formatOptions: ImageOutputFormat[] = [
  'image/jpeg',
  'image/png',
  'image/webp',
];

const formatLabels: Record<ImageOutputFormat, string> = {
  'image/jpeg': 'JPG',
  'image/png': 'PNG',
  'image/webp': 'WEBP',
};

export default function ImageConverter({
  defaultOutputFormat = 'image/png',
  locale = 'ko',
}: ImageConverterProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const isEnglish = locale === 'en';

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] =
    useState<ImageOutputFormat>(defaultOutputFormat);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [convertedFileName, setConvertedFileName] = useState<string>('');
  const [isConverting, setIsConverting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const resetConvertedFile = () => {
    if (convertedUrl) {
      URL.revokeObjectURL(convertedUrl);
    }

    setConvertedUrl(null);
    setConvertedFileName('');
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMessage(
        isEnglish
          ? 'Please upload an image file.'
          : '이미지 파일만 업로드할 수 있습니다.',
      );
      return;
    }

    resetConvertedFile();
    setSelectedFile(file);
    setErrorMessage('');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    handleFileSelect(file);
  };

  const handleUploadBoxClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (!file) {
      return;
    }

    handleFileSelect(file);
  };

  const handleConvert = async () => {
    if (!selectedFile) {
      setErrorMessage(
        isEnglish
          ? 'Please upload an image first.'
          : '먼저 이미지를 업로드해 주세요.',
      );
      return;
    }

    try {
      setIsConverting(true);
      setErrorMessage('');
      resetConvertedFile();

      const result = await convertImage({
        file: selectedFile,
        outputFormat: targetFormat,
      });

      setConvertedUrl(result.url);
      setConvertedFileName(result.fileName);
    } catch {
      setErrorMessage(
        isEnglish
          ? 'Image conversion failed. Please try again with another file.'
          : '이미지 변환에 실패했습니다. 다른 파일로 다시 시도해 주세요.',
      );
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-main)]">
            {isEnglish ? 'Image Converter' : '이미지 변환기'}
          </h2>

          <p className="mt-2 text-sm leading-6 text-[var(--color-text-sub)]">
            {isEnglish
              ? 'Convert JPG, PNG, and WEBP images directly in your browser.'
              : 'JPG, PNG, WEBP 이미지를 브라우저에서 바로 변환할 수 있습니다.'}
          </p>
        </div>

        <div
          role="button"
          tabIndex={0}
          onClick={handleUploadBoxClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              handleUploadBoxClick();
            }
          }}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-12 text-center transition ${
            isDragging
              ? 'border-[var(--color-primary)] bg-[var(--color-primary-soft)]'
              : 'border-[var(--color-border)] bg-[var(--color-page)]'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleInputChange}
            className="hidden"
          />

          <p className="text-lg font-semibold text-[var(--color-text-main)]">
            {isEnglish
              ? 'Drag & drop your image here'
              : '이미지를 여기에 끌어다 놓으세요'}
          </p>

          <p className="mt-2 text-sm text-[var(--color-text-sub)]">
            {isEnglish ? 'or click to upload' : '또는 클릭해서 업로드'}
          </p>

          <p className="mt-4 text-xs text-[var(--color-text-sub)]">
            JPG · PNG · WEBP supported
          </p>

          {selectedFile && (
            <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-main)]">
              {isEnglish ? 'Selected file: ' : '선택한 파일: '}
              {selectedFile.name}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-[var(--color-text-main)]">
            {isEnglish ? 'Convert to' : '변환 형식'}
          </label>

          <div className="grid grid-cols-3 gap-3">
            {formatOptions.map((format) => (
              <button
                key={format}
                type="button"
                onClick={() => {
                  resetConvertedFile();
                  setTargetFormat(format);
                }}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  targetFormat === format
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                    : 'border-[var(--color-border)] bg-[var(--color-page)] text-[var(--color-text-main)]'
                }`}
              >
                {formatLabels[format]}
              </button>
            ))}
          </div>
        </div>

        {errorMessage && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <button
          type="button"
          onClick={handleConvert}
          disabled={isConverting}
          className="rounded-2xl bg-[var(--color-primary)] px-5 py-4 text-base font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isConverting
            ? isEnglish
              ? 'Converting...'
              : '변환 중...'
            : isEnglish
              ? 'Convert Image'
              : '이미지 변환하기'}
        </button>

        {convertedUrl && (
          <a
            href={convertedUrl}
            download={convertedFileName}
            className="rounded-2xl border border-[var(--color-primary)] bg-[var(--color-surface)] px-5 py-4 text-center text-base font-bold text-[var(--color-primary)] transition hover:bg-[var(--color-primary-soft)]"
          >
            {isEnglish ? 'Download Converted Image' : '변환된 이미지 다운로드'}
          </a>
        )}
      </div>
    </section>
  );
}