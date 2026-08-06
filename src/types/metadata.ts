import type { ISODateString } from "./common";

/**
 * Canonical URL information.
 */
export interface CanonicalMetadata {
  readonly canonical: string;
}

/**
 * Open Graph image.
 */
export interface OpenGraphImage {
  readonly url: string;
  readonly width?: number;
  readonly height?: number;
  readonly alt?: string;
}

/**
 * Open Graph metadata.
 */
export interface OpenGraphMetadata {
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly siteName: string;
  readonly locale: string;
  readonly type: "website" | "article" | "profile";

  readonly images?: readonly OpenGraphImage[];
}

/**
 * Twitter metadata.
 */
export interface TwitterMetadata {
  readonly card: "summary" | "summary_large_image";

  readonly title: string;
  readonly description: string;

  readonly creator?: string;

  readonly images?: readonly string[];
}

/**
 * Robots directives.
 */
export interface RobotsMetadata {
  readonly index: boolean;
  readonly follow: boolean;

  readonly noarchive?: boolean;
  readonly nocache?: boolean;
  readonly nosnippet?: boolean;
}

/**
 * Alternate language.
 */
export interface AlternateLanguage {
  readonly locale: string;
  readonly url: string;
}

/**
 * Metadata alternates.
 */
export interface AlternateMetadata {
  readonly canonical?: string;
  readonly languages?: readonly AlternateLanguage[];
}

/**
 * Complete page metadata.
 */
export interface PageMetadata {
  readonly title: string;
  readonly description: string;

  readonly keywords?: readonly string[];

  readonly authors?: readonly string[];

  readonly category?: string;

  readonly alternates?: AlternateMetadata;

  readonly openGraph?: OpenGraphMetadata;

  readonly twitter?: TwitterMetadata;

  readonly robots?: RobotsMetadata;
}

/**
 * Article metadata.
 */
export interface ArticleMetadata extends PageMetadata {
  readonly publishedTime: ISODateString;
  readonly modifiedTime: ISODateString;

  readonly tags?: readonly string[];
}
