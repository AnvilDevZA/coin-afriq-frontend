import Link from "next/link";
import { contentMenu } from "@/menu.config";


export default function Footer( props: any ) {
  return (
    <footer className="bg-[#261a12] px-12 py-6 text-white dark:text-white">
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
      <div className="max-w-6xl m-auto flex item-center justify-between mt-0 mb-0 pt-0 pb-0">
        <p className="font-sans text-xl">
          Copyright &copy; Coin Afriq (Pty) Ltd 2025. All rights reserved
        </p>
        <ul className="flex gap-4 items-center m-0 p-0">
          <li><Link href="https://www.facebook.com/coinafriq"><svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="lucide lucide-facebook"
            {...props}
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg></Link></li>
          <li><Link href="https://www.instragram.com/coinafriq"> <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="lucide lucide-instagram"
            {...props}
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
          </svg></Link></li>
          <li><Link href="https://x.com/CoinAfriq"><svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="lucide lucide-twitter"
            {...props}
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg></Link></li>
        </ul>
      </div>
    </footer>
  );
}
