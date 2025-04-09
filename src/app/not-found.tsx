import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>This is custom not found page.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
