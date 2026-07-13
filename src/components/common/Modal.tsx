"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";

import { createPortal } from "react-dom";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * ==========================================================
 * Modal Props
 * ==========================================================
 */

export interface ModalProps {
  /**
   * Controls whether the modal is visible.
   */
  open: boolean;

  /**
   * Called when the modal should close.
   */
  onClose: () => void;

  /**
   * Optional title displayed in the header.
   */
  title?: string;

  /**
   * Modal content.
   */
  children: ReactNode;

  /**
   * Optional footer actions.
   */
  footer?: ReactNode;

  /**
   * Maximum modal width.
   */
  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl";

  /**
   * Prevent closing when clicking outside.
   */
  closeOnOverlayClick?: boolean;

  /**
   * Prevent closing with Escape key.
   */
  closeOnEscape?: boolean;

  /**
   * Hide close (X) button.
   */
  hideCloseButton?: boolean;

  /**
   * Additional class names.
   */
  className?: string;
}

/**
 * ==========================================================
 * Modal Width Variants
 * ==========================================================
 */

const maxWidthClasses = {
  sm: "max-w-sm",

  md: "max-w-md",

  lg: "max-w-lg",

  xl: "max-w-xl",

  "2xl": "max-w-2xl",
} as const;

/**
 * ==========================================================
 * Modal Component
 * ==========================================================
 */

export default function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  maxWidth = "lg",
  closeOnEscape = true,
  closeOnOverlayClick = true,
  hideCloseButton = false,
  className,
}: Readonly<ModalProps>) {
  const modalRef = useRef<HTMLDivElement>(null);

  /**
   * ----------------------------------------------------------
   * Lock body scroll while modal is open.
   * ----------------------------------------------------------
   */

  useEffect(() => {
    if (!open) return;

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        originalOverflow;
    };
  }, [open]);

  /**
   * ----------------------------------------------------------
   * Close modal with Escape key.
   * ----------------------------------------------------------
   */

  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    open,
    closeOnEscape,
    onClose,
  ]);

  /**
   * ----------------------------------------------------------
   * Don't render when closed.
   * ----------------------------------------------------------
   */

  if (!open) {
    return null;
  }

  /**
   * ----------------------------------------------------------
   * Render using React Portal.
   * ----------------------------------------------------------
   */

  return createPortal(

        <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50
        p-4
        backdrop-blur-sm
        animate-in fade-in-0
      "
      onClick={() => {
        if (closeOnOverlayClick) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        className={cn(
          "relative w-full overflow-hidden rounded-2xl",
          "border border-(--border)",
          "bg-(--card)",
          "text-(--card-foreground)",
          "shadow-2xl",
          "animate-in zoom-in-95 fade-in-0 duration-200",
          maxWidthClasses[maxWidth],
          className
        )}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {(title || !hideCloseButton) && (
          <div className="flex items-center justify-between border-b border-(--border) px-6 py-4">
            {title ? (
              <h2
                id="modal-title"
                className="text-lg font-semibold"
              >
                {title}
              </h2>
            ) : (
              <div />
            )}

            {!hideCloseButton && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="
                  rounded-lg
                  p-2
                  transition-colors
                  hover:bg-slate-100
                  dark:hover:bg-slate-800
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500
                "
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}

        <div className="max-h-[70vh] overflow-y-auto p-6">
          {children}
        </div>

        {footer && (
          <div className="flex items-center justify-end gap-3 border-t border-(--border) px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}