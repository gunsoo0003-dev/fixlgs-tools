'use client';

import { ChangeEvent, DragEvent, useRef, useState } from 'react';

import { convertImage } from '../../lib/image/convertImage';
import { ImageOutputFormat } from '../../types/imageTool';

type ImageConverterProps = {
  defaultOutputFormat?: ImageOutputFormat;
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
}: ImageConverterProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
        'Please upload an image file. 이미지 파일만 업로드할 수 있습니다.',
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
        'Please upload an image first. 먼저 이미지를 업로드해 주세요.',
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
    } catch (error) {
      setErrorMessage(
        'Image conversion failed. 이미지 변환에 실패했습니다. 다른 파일로 다시 시도해 주세요.',
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
            Image Converter
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-sub)]">
            Convert JPG, PNG, and WEBP images directly in your browser.
            <br />
            JPG, PNG, WEBP 이미지를 브라우저에서 바로 변환할 수 있습니다.
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
            Drag & drop your image here
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-sub)]">
            or click to upload
          </p>
          <p className="mt-4 text-xs text-[var(--color-text-sub)]">
            JPG · PNG · WEBP supported
          </p>

          {selectedFile && (
            <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-text-main)]">
              Selected file: {selectedFile.name}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-[var(--color-text-main)]">
            Convert to
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
          {isConverting ? 'Converting...' : 'Convert Image'}
        </button>

        {convertedUrl && (
          <a
            href={convertedUrl}
            download={convertedFileName}
            className="rounded-2xl border border-[var(--color-primary)] bg-[var(--color-surface)] px-5 py-4 text-center text-base font-bold text-[var(--color-primary)] transition hover:bg-[var(--color-primary-soft)]"
          >
            Download Converted Image
          </a>
        )}
      </div>
    </section>
  );
}