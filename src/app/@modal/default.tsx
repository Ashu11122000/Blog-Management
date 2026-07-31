/**
 * ==========================================================
 * Default Modal Slot
 * ==========================================================
 *
 * This component is rendered whenever there is no active
 * route inside the @modal parallel route.
 *
 * Example:
 *
 *   /gallery
 *
 * The Gallery page is displayed normally and this slot
 * renders nothing.
 *
 * When a modal route becomes active, Next.js replaces
 * this component with the intercepted route component.
 */

export default function DefaultModal() {
  return null;
}