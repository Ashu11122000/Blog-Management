import type { ID, ISODateString } from "./common";
import type { UserSummary } from "./user";

/**
 * Gallery image.
 */
export interface GalleryImage {
  readonly id: ID;
  readonly title: string;
  readonly description?: string;
  readonly alt: string;
  readonly url: string;
  readonly thumbnailUrl?: string;
  readonly width: number;
  readonly height: number;
  readonly uploadedBy?: UserSummary;
  readonly createdAt: ISODateString;
}

/**
 * Gallery image summary.
 */
export interface GalleryImageSummary {
  readonly id: ID;
  readonly title: string;
  readonly url: string;
  readonly thumbnailUrl?: string;
}

/**
 * Gallery album.
 */
export interface GalleryAlbum {
  readonly id: ID;
  readonly name: string;
  readonly description?: string;
  readonly coverImage?: GalleryImageSummary;
  readonly images: readonly GalleryImageSummary[];
  readonly createdAt: ISODateString;
}

/**
 * Gallery filters.
 */
export interface GalleryFilters {
  readonly search?: string;
  readonly albumId?: ID;
}

/**
 * Gallery statistics.
 */
export interface GalleryStats {
  readonly totalImages: number;
  readonly totalAlbums: number;
  readonly totalStorageUsed: number;
}

/**
 * Gallery upload request.
 */
export interface GalleryUploadRequest {
  readonly title: string;
  readonly description?: string;
  readonly alt: string;
  readonly albumId?: ID;
}

/**
 * Gallery upload result.
 */
export interface GalleryUploadResult {
  readonly image: GalleryImage;
  readonly success: boolean;
}
