import type { ID } from "./common";

/**
 * Supported editor modes.
 */
export type EditorMode = "edit" | "preview" | "readonly";

/**
 * Supported editor output formats.
 */
export type EditorFormat = "html" | "json" | "markdown";

/**
 * Supported text alignment.
 */
export type TextAlignment = "left" | "center" | "right" | "justify";

/**
 * Heading levels.
 */
export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Link information.
 */
export interface EditorLink {
  readonly href: string;
  readonly title?: string;
  readonly target?: "_self" | "_blank";
}

/**
 * Image information.
 */
export interface EditorImage {
  readonly id?: ID;
  readonly src: string;
  readonly alt: string;
  readonly title?: string;
  readonly width?: number;
  readonly height?: number;
}

/**
 * Rich text document stored by the editor.
 */
export interface EditorDocument {
  readonly type: string;
  readonly content?: readonly EditorDocument[];
  readonly attrs?: Readonly<Record<string, unknown>>;
  readonly marks?: readonly EditorMark[];
  readonly text?: string;
}

/**
 * Text formatting mark.
 */
export interface EditorMark {
  readonly type: string;
  readonly attrs?: Readonly<Record<string, unknown>>;
}

/**
 * Editor content.
 */
export interface EditorContent {
  readonly html: string;
  readonly json: EditorDocument;
  readonly markdown?: string;
}

/**
 * Toolbar button.
 */
export interface EditorToolbarItem {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
  readonly active: boolean;
  readonly disabled?: boolean;
}

/**
 * Editor configuration.
 */
export interface EditorConfiguration {
  readonly editable: boolean;
  readonly autofocus: boolean;
  readonly placeholder?: string;
  readonly mode: EditorMode;
}
