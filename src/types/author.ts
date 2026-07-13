export interface Author {
  id: string;
  name: string;
  username: string;
  email: string;

  avatar: string;
  bio: string;

  role: string;
  company?: string;
  location?: string;
  website?: string;

  twitter?: string;
  linkedin?: string;
  github?: string;

  featured?: boolean;
}