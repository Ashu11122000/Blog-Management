import type { ID } from "./common";
import type { MediaFile } from "./media";

/**
 * Supported upload providers.
 */
export type UploadProvider = "cloudinary" | "uploadthing" | "local";

/**
 * Upload status.
 */
export type UploadStatus =
  "pending" | "uploading" | "completed" | "failed" | "cancelled";

/**
 * Upload progress.
 */
export interface UploadProgress {
  readonly loaded: number;
  readonly total: number;
  readonly percentage: number;
}

/**
 * Upload request.
 */
export interface UploadRequest {
  readonly provider: UploadProvider;
  readonly folder?: string;
  readonly publicId?: string;
}

/**
 * Upload result.
 */
export interface UploadResult {
  readonly success: boolean;
  readonly media: MediaFile;
}

/**
 * Upload error.
 */
export interface UploadError {
  readonly code: string;
  readonly message: string;
}

/**
 * Upload task.
 */
export interface UploadTask {
  readonly id: ID;
  readonly provider: UploadProvider;
  readonly status: UploadStatus;
  readonly progress: UploadProgress;
}

/**
 * Upload response.
 */
export interface UploadResponse {
  readonly task: UploadTask;
  readonly result?: UploadResult;
  readonly error?: UploadError;
}
