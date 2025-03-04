import Link from "next/link";
import { contentMenu } from "@/menu.config";

export default function Footer() {
  return (
    <footer className="bg-[#261a12] px-12 py-6">
      <div className="max-w-6xl m-auto">
        <h1 className="text-3xl lg:text-6xl font-serif">More Information</h1>
        <ul className="text-2xl font-sans py-4 flex gap-4">
          {Object.entries(contentMenu).map(([key, href]) => (
            <Link
              className="hover:underline underline-offset-4"
              key={href}
              href={href}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          ))}
        </ul>
      </div>
      <hr className="max-w-6xl m-auto" />
      <br />
      <div className="max-w-6xl m-auto">
        <p className="font-sans text-xl">
          Copyright &copy; Coin Afriq (Pty) Ltd 2025. All rights reserved
        </p>
      </div>
    </footer>
  );
}
