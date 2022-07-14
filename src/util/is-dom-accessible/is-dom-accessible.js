/**
 * If the window object exists and the document object exists, then return true.
 * @returns A function that returns a boolean.
 */
export default function isDomAccessible() {
  return (
    typeof window !== 'undefined' && typeof window.document !== 'undefined'
  );
}
