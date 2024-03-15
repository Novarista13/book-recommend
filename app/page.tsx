import Link from "next/link";
import Markdown from "react-markdown";
export default function Home() {
  return (
    <div className="prose">
      <h1>Hello World</h1>
      <Link href="/books">Books</Link>
      
    </div>
  );
}
