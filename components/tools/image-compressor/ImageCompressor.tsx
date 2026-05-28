'use client';

import { ChangeEvent, DragEvent, useRef, useState } from 'react';

import { compressImage } from '@/lib/image/compressImage';
import type { ImageCompressorFormat } from '@/types/imageCompressor';

type ImageCompressorProps = {
  defaultOutputFormat?: ImageCompressorFormat;
  locale?: 'ko' | 'en';
};

const formatOptions: ImageCompressorFormat[] = [
  'image/jpeg',
  'image/png',
  'image/webp',
];

const formatLabels: Record<ImageCompressorFormat, string> = {
  'image/jpeg': 'JPG',
  'image/png': 'PNG',
  'image/webp': 'WEBP',
};

function formatFileSize(size: number) {
  if (size < 1024) {
    return `${size} B`;
  }

  if (size < 1024 * 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }

  return `${(size / 1024 / 1024).toFixed(2)} MB`;
}

export default function ImageCompressor({
  defaultOutputFormat = 'image/jpeg',
  locale = 'ko',
}: ImageCompressorProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const isEnglish = locale === 'en';

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] =
    useState<ImageCompressorFormat>(defaultOutputFormat);
  const [quality, setQuality] = useState(0.75);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [compressedFileName, setCompressedFileName] = useState('');
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [reductionRate, setReductionRate] = useState(0);
  const [isCompressing, setIsCompressing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const resetCompressedFile = () => {
    if (compressedUrl) {
      URL.revokeObjectURL(compressedUrl);
    }

    setCompressedUrl(null);
    setCompressedFileName('');
    setOriginalSize(0);
    setCompressedSize(0);
    setReductionRate(0);
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

    resetCompressedFile();
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

  const handleCompress = async () => {
    if (!selectedFile) {
      setErrorMessage(
        isEnglish
          ? 'Please upload an image first.'
          : '먼저 이미지를 업로드해 주세요.',
      );
      return;
    }

    try {
      setIsCompressing(true);
      setErrorMessage('');
      resetCompressedFile();

      const result = await compressImage({
        file: selectedFile,
        outputFormat: targetFormat,
        quality,
      });

      setCompressedUrl(result.url);
      setCompressedFileName(result.fileName);
      setOriginalSize(result.originalSize);
      setCompressedSize(result.compressedSize);
      setReductionRate(result.reductionRate);
    } catch {
      setErrorMessage(
        isEnglish
          ? 'Image compression failed. Please try again with another file.'
          : '이미지 압축에 실패했습니다. 다른 파일로 다시 시도해 주세요.',
      );
    } finally {
      setIsCompressing(false);
    }
  };

  return (
    <section className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-main)]">
            {isEnglish ? 'Image Compressor' : '이미지 압축기'}
          </h2>

          <p className="mt-2 text-sm leading-6 text-[var(--color-text-sub)]">
            {isEnglish
              ? 'Compress JPG, PNG, and WEBP images directly in your browser.'
              : 'JPG, PNG, WEBP 이미지를 브라우저에서 바로 압축할 수 있습니다.'}
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
            {isEnglish ? 'Output format' : '압축 후 형식'}
          </label>

          <div className="grid grid-cols-3 gap-3">
            {formatOptions.map((format) => (
              <button
                key={format}
                type="button"
                onClick={() => {
                  resetCompressedFile();
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

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            <label className="text-sm font-semibold text-[var(--color-text-main)]">
              {isEnglish ? 'Compression quality' : '압축 품질'}
            </label>

            <span className="text-sm font-bold text-[var(--color-primary)]">
              {Math.round(quality * 100)}%
            </span>
          </div>

          <input
            type="range"
            min="0.2"
            max="1"
            step="0.05"
            value={quality}
            onChange={(event) => {
              resetCompressedFile();
              setQuality(Number(event.target.value));
            }}
            className="w-full"
          />

          <p className="text-xs leading-6 text-[var(--color-text-muted)]">
            {isEnglish
              ? 'Lower quality usually creates a smaller file. PNG compression may be limited depending on browser processing.'
              : '품질을 낮추면 보통 파일 용량이 줄어듭니다. PNG는 브라우저 처리 방식에 따라 압축 효과가 제한될 수 있습니다.'}
          </p>
        </div>

        {errorMessage && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <button
          type="button"
          onClick={handleCompress}
          disabled={isCompressing}
          className="rounded-2xl bg-[var(--color-primary)] px-5 py-4 text-base font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isCompressing
            ? isEnglish
              ? 'Compressing...'
              : '압축 중...'
            : isEnglish
              ? 'Compress Image'
              : '이미지 압축하기'}
        </button>

        {compressedUrl && (
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-page)] p-5">
            <div className="grid gap-3 text-sm md:grid-cols-3">
              <div className="rounded-xl bg-[var(--color-surface)] p-4">
                <p className="font-bold text-[var(--color-text-main)]">
                  {isEnglish ? 'Original' : '압축 전'}
                </p>
                <p className="mt-2 text-[var(--color-text-sub)]">
                  {formatFileSize(originalSize)}
                </p>
              </div>

              <div className="rounded-xl bg-[var(--color-surface)] p-4">
                <p className="font-bold text-[var(--color-text-main)]">
                  {isEnglish ? 'Compressed' : '압축 후'}
                </p>
                <p className="mt-2 text-[var(--color-text-sub)]">
                  {formatFileSize(compressedSize)}
                </p>
              </div>

              <div className="rounded-xl bg-[var(--color-surface)] p-4">
                <p className="font-bold text-[var(--color-text-main)]">
                  {isEnglish ? 'Reduced' : '절감률'}
                </p>
                <p className="mt-2 text-[var(--color-primary)]">
                  {reductionRate}%
                </p>
              </div>
            </div>

            <a
              href={compressedUrl}
              download={compressedFileName}
              className="mt-5 block rounded-2xl border border-[var(--color-primary)] bg-[var(--color-surface)] px-5 py-4 text-center text-base font-bold text-[var(--color-primary)] transition hover:bg-[var(--color-primary-soft)]"
            >
              {isEnglish ? 'Download Compressed Image' : '압축된 이미지 다운로드'}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}