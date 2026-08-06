import type { ID, ISODateString } from "./common";
import type { UserSummary } from "./user";

/**
 * Supported media types.
 */
export type MediaType = "image" | "video" | "audio" | "document";

/**
 * Supported image formats.
 */
export type ImageFormat =
  "jpeg" | "jpg" | "png" | "webp" | "gif" | "svg" | "avif";

/**
 * Supported video formats.
 */
export type VideoFormat = "mp4" | "webm" | "mov";

/**
 * Supported audio formats.
 */
export type AudioFormat = "mp3" | "wav" | "ogg";

/**
 * Generic media file.
 */
export interface MediaFile {
  readonly id: ID;
  readonly type: MediaType;

  readonly name: string;
  readonly alt?: string;
  readonly mimeType: string;

  readonly url: string;
  readonly thumbnailUrl?: string;

  readonly size: number;

  readonly width?: number;
  readonly height?: number;

  readonly duration?: number;

  readonly uploadedBy?: UserSummary;

  readonly createdAt: ISODateString;
}

/**
 * Image asset.
 */
export interface ImageAsset extends MediaFile {
  readonly type: "image";
  readonly format: ImageFormat;
}

/**
 * Video asset.
 */
export interface VideoAsset extends MediaFile {
  readonly type: "video";
  readonly format: VideoFormat;
}

/**
 * Audio asset.
 */
export interface AudioAsset extends MediaFile {
  readonly type: "audio";
  readonly format: AudioFormat;
}

/**
 * Document asset.
 */
export interface DocumentAsset extends MediaFile {
  readonly type: "document";
}

/**
 * Responsive image source.
 */
export interface ResponsiveImage {
  readonly small?: string;
  readonly medium?: string;
  readonly large?: string;
  readonly original: string;
}

/**
 * Image dimensions.
 */
export interface ImageDimensions {
  readonly width: number;
  readonly height: number;
}

/**
 * Media metadata.
 */
export interface MediaMetadata {
  readonly dimensions?: ImageDimensions;
  readonly blurDataUrl?: string;
  readonly dominantColor?: string;
}

/**
 * Media statistics.
 */
export interface MediaStats {
  readonly totalFiles: number;
  readonly totalImages: number;
  readonly totalVideos: number;
  readonly totalAudio: number;
  readonly totalDocuments: number;
  readonly totalStorageUsed: number;
}
