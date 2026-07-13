export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  src: string;
  blurDataURL?: string;
  alt: string;
  width: number;
  height: number;
  category: string;
  tags: string[];
  featured: boolean;
  uploadedAt: string;
}