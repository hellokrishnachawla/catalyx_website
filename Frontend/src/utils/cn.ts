/**
 * Simple className utility for conditionally joining class names.
 * Usage: cn("base-class", condition && "conditional-class", "another-class")
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
