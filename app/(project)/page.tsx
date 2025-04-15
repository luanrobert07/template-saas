import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
       <h1 className="text-4xl front-told">Landing Page</h1>
       <Link href="/login">
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
          Login 
        </button>
       </Link>
    </div>
  );
}
