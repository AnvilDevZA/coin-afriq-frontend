import Image from "next/image";
import { Menu } from "lucide-react";
import { mainMenu, contentMenu } from "@/menu.config";
import { MobileNav } from "@/components/nav/mobile-nav";

export default function Header() {
  return (
    <header className="bg-[url('/tree.avif')] bg-cover bg-fixed min-h-screen flex flex-col">
      <header className="top-0 py-6 items-center gap-2 border-b backdrop-blur sticky bg-[#007A4DBB] m-0">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl m-auto">
          <div>
            <span className="flex items-center gap-6">
              <Image src="/coin-afriq.svg" width={96} height={96} alt="Logo" />
              <span>
                <h3 className="font-serif text-3xl lg:text-6xl text-[#D4AF37] font-black uppercase">
                  CoinAfriq
                </h3>
                <p className="font-sans text-2xl">
                  Africa&apos;s Digital Currency
                </p>
              </span>
            </span>
          </div>
          <MobileNav />
        </div>
      </header>
      <section className="m-auto bg-[#000000bb] px-12 py-6 min-h-80 max-h-screen">
        <div className="flex flex-col items-center justify-center lg:max-w-2xl">
          <Image
            src="/coin-afriq.svg"
            width={256}
            height={256}
            className="w-32 lg:w-48 h-auto"
            alt="Logo"
          />
          <h1 className="text-4xl lg:text-8xl font-serif font-black uppercase py-6">
            CoinAfriq
          </h1>
          <p className="text-xl font-sans">
            Coin Afriq is the first secure digital currency made for the African
            continent. Secure your finances with cutting edge technology to
            ensure your money is safe, your data private and your privacy
            respected.
          </p>
          <br />
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 py-6">
            <button className="bg-[#D4AF37] text-black font-bold font-sans border px-6 py-2 text-xl rounded-lg">
              Buy
            </button>
            <button className="border px-6 py-2 text-xl font-sans rounded-lg">
              Get your wallet
            </button>
            <button className="border px-6 py-2 text-xl font-sans rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
