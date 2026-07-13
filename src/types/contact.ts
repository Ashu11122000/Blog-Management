export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string[]>>;
}