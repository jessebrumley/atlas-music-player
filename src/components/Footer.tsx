/**
 * Footer.tsx
 *
 * Simple footer component that displays a centered copyright
 * notice with the current year and brand name.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return <div className="text-center text-text">&copy; {year} Atlas School</div>;
}
