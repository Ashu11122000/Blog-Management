import type { ISODateString } from "./common";
import type { OpenGraphImage } from "./metadata";

/**
 * Supported schema.org types.
 */
export type SchemaType =
  | "WebSite"
  | "WebPage"
  | "Blog"
  | "BlogPosting"
  | "Person"
  | "Organization"
  | "BreadcrumbList";

/**
 * Robots directives.
 */
export interface RobotsDirectives {
  readonly index: boolean;
  readonly follow: boolean;
  readonly noarchive?: boolean;
  readonly nosnippet?: boolean;
  readonly noimageindex?: boolean;
  readonly nocache?: boolean;
}

/**
 * Breadcrumb item.
 */
export interface SeoBreadcrumbItem {
  readonly name: string;
  readonly url: string;
}

/**
 * Canonical SEO information.
 */
export interface CanonicalSeo {
  readonly canonical: string;
  readonly alternates?: Readonly<Record<string, string>>;
}

/**
 * Base SEO configuration.
 */
export interface SeoMetadata {
  readonly title: string;
  readonly description: string;

  readonly keywords?: readonly string[];

  readonly canonical?: CanonicalSeo;

  readonly robots?: RobotsDirectives;

  readonly openGraphImages?: readonly OpenGraphImage[];
}

/**
 * Article SEO.
 */
export interface ArticleSeo extends SeoMetadata {
  readonly publishedTime: ISODateString;
  readonly modifiedTime: ISODateString;

  readonly author: string;

  readonly section?: string;

  readonly tags?: readonly string[];
}

/**
 * Organization schema.
 */
export interface OrganizationSchema {
  readonly "@context": "https://schema.org";
  readonly "@type": "Organization";

  readonly name: string;
  readonly url: string;
  readonly logo: string;
}

/**
 * Person schema.
 */
export interface PersonSchema {
  readonly "@context": "https://schema.org";
  readonly "@type": "Person";

  readonly name: string;
  readonly url?: string;
  readonly image?: string;
}

/**
 * Blog posting schema.
 */
export interface BlogPostingSchema {
  readonly "@context": "https://schema.org";
  readonly "@type": "BlogPosting";

  readonly headline: string;

  readonly description: string;

  readonly image?: readonly string[];

  readonly datePublished: ISODateString;

  readonly dateModified: ISODateString;

  readonly author: PersonSchema;
}

/**
 * Breadcrumb schema.
 */
export interface BreadcrumbSchema {
  readonly "@context": "https://schema.org";
  readonly "@type": "BreadcrumbList";

  readonly itemListElement: readonly SeoBreadcrumbItem[];
}

/**
 * Sitemap entry.
 */
export interface SitemapEntry {
  readonly url: string;
  readonly lastModified: ISODateString;
  readonly priority?: number;
  readonly changeFrequency?:
    "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
}
