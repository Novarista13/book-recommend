import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h3>Hello World</h3>
      <Link href="/books">Books</Link>
    </div>
  );
}
