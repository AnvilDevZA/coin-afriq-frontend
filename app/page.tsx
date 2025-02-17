import { Menu } from "lucide-react";

import Image from 'next/image';

export default function Page() {
  return (
    <>
    <header className="bg-[url('/tree.avif')] bg-cover bg-fixed h-screen flex flex-col">
        <header className="top-0 py-6 items-center gap-2 border-b backdrop-blur sticky bg-[#007A4DBB] m-0">
        <div className="flex items-center justify-between max-w-6xl m-auto">
        <div>
          <span className="flex items-center gap-6">
          <Image
          src="/coin-afriq.svg"
          width={96}
          height={96}
          alt="Logo"
        />
          <span>
          <h3 className="font-serif text-6xl text-[#D4AF37] font-black uppercase">CoinAfriq</h3>
          <p className="font-sans text-2xl">Africa's Digital Currency</p>
          </span>
          </span>
          
        </div>
        <button>
          <Menu />
        </button>
          </div>
        </header>
    
    <section className="m-auto bg-[#000000bb] px-12 py-6">
      <div className="flex flex-col items-center justify-center max-w-2xl">
        <Image
          src="/coin-afriq.svg"
          width={256}
          height={256}
          alt="Logo"
        />
        <h1 className="text-8xl font-serif font-black uppercase py-6">CoinAfriq</h1>
        <p className="text-xl font-sans">
          Africoin is the first secure digital currency made for the African continent. Secure your finances with cutting edge technology
          to ensure your money is safe, your data private and your privacy respected. 
        </p>
        <br />
        <div className="flex items-center justify-center gap-6 py-6">
          <button className="bg-[#D4AF37] border px-6 py-2 text-xl rounded-lg">Buy</button>
          <button className="border px-6 py-2 text-xl rounded-lg">Get your wallet</button>
          <button className="border px-6 py-2 text-xl rounded-lg">Learn More</button>
        </div>
      </div>
    </section>
    </header>
    <main>
    <section className="bg-[#E6BE8A] text-black px-6 py-8">
    <div className="max-w-6xl m-auto py-6 flex gap-6"> 
    <article>
    <h2 className="text-6xl text-[#4c3525] pb-4 font-serif">Why CoinAfriq</h2>
    <p className="text-[#4c3525] font-sans text-xl max-w-3xl">
    There are many cryptocurrencies out there. You might ask, what sets us apart.
    We wish to uplift our continent though a decentralized democratic payment system where no matter your privacy
    background or economic system, your money is yours.
    </p>
    <p className="text-[#4c3525] font-sans text-xl max-w-3xl pt-4">
    CoinAfriq is for everyone. With an advanced system in place to ensure not only the highest stakeholders
    get all the wealth, and a fault tolerant ecosystem that ensures the utmost security for your finances,
    you truly are in charge of your wealth.
    </p>
    </article>
    <Image 
      src="/traditional.jpg"
      width={500}
      height={500}
      alt="Traditioanl African crafts"
    />
    </div>

    <div className="max-w-6xl m-auto py-8 flex gap-6">
     <Image 
      src="/people.jpg"
      width={500}
      height={500}
      alt="African kids"
    /> 
    <article >
    <h2 className="text-6xl text-[#4c3525] pb-4 font-serif text-right">How Secure is it?</h2>
    <p className="text-[#4c3525] font-sans text-xl max-w-3xl text-right">
    There are many cryptocurrencies out there. You might ask, what sets us apart.
    We wish to uplift our continent though a decentralized democratic payment system where no matter your privacy
    background or economic system, your money is yours.
    </p>
    <p className="text-[#4c3525] font-sans text-xl max-w-3xl pt-4 text-right">
    CoinAfriq uses advanced public key encryption that is considered impossible to crack even with next-gen technology.
    Whether you're using our blockchain, our wallet or even our website, your information is securely encrypted to the highest current standard.
    </p>
    <p className="text-[#4c3525] font-sans text-xl max-w-3xl pt-4 text-right">Don't believe us? Feel free to try and crack it!</p>
    </article>
    </div>
    </section>
    <section className="bg-[#e0ae6e] px-6 py-12"> 
      <article>
        <Image
          src="/raised-first.svg"
          height={196}
          width={196}
          alt="Raised Fist"
          className="text-center m-auto"
        />
        <h1 className="text-6xl text-[#4c3525] text-center py-6">Democracy at work</h1>
        <p className="text-3xl text-[#4c3525] text-center max-w-4xl m-auto">In other digital currencies, greater shares can be alloted to those who already own the most.
        We don't do that here. On our ecosystem, all verification is done by a delegation that is democratically voted on. We call this Nominated Proof of Stake.
        This ensures everyone has a voice, not just those with the most earnings.
        </p>
      </article>
    </section>
    </main>
    <footer className="bg-[#261a12] px-12 py-6">
      <div className="max-w-6xl m-auto">
        <h1 className="text-6xl font-serif">More Information</h1>
        <ul className="text-2xl font-sans py-4">
          <li>List</li>
          <li>List</li>
          <li>List</li>
          <li>List</li>
        </ul>
      </div>
      <hr className="max-w-6xl m-auto" />
      <br />
      <div className="max-w-6xl m-auto">
        <p className="font-sans text-xl">Copyright &copy; 2025</p>
      </div>
    </footer>
    </>
  )
}
