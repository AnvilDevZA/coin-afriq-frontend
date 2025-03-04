import Image from "next/image";

// This page is using the craft.tsx component and design system
export default function Home() {
  return <ToDelete />;
}

const ToDelete = () => {
  return (
    <>
      <main>
        <section className="bg-[#E6BE8A] bg-[url('/full-bloom.png')] dark:bg-[#E6BE8A] dark:bg-[url('/full-bloom.png')] bg-blend-multiply dark:bg-blend-multiply  text-black px-6 py-8">
          <div className="max-w-6xl m-auto py-6 flex flex-col lg:flex-row  gap-6">
            <article>
              <h2 className="text-6xl text-[#4c3525] dark:text-[#4c3525] pb-4 font-serif">
                Why CoinAfriq
              </h2>
              <p className="text-[#4c3525] dark:text-[#4c3525] font-sans text-xl max-w-3xl">
                There are many cryptocurrencies out there. You might ask, what
                sets us apart. We wish to uplift our continent though a
                decentralized democratic payment system where no matter your
                privacy background or economic system, your money is yours.
              </p>
              <p className="text-[#4c3525] dark:text-[#4c3525] font-sans text-xl max-w-3xl pt-4">
                CoinAfriq is for everyone. With an advanced system in place to
                ensure not only the highest stakeholders get all the wealth, and
                a fault tolerant ecosystem that ensures the utmost security for
                your finances, you truly are in charge of your wealth.
              </p>
            </article>
            <Image
              src="/traditional.jpg"
              width={500}
              height={500}
              className="max-w-full h-auto"
              alt="Traditioanl African crafts"
            />
          </div>

          <div className="max-w-6xl m-auto py-8 flex flex-col lg:flex-row gap-6">
            <Image
              src="/people.jpg"
              width={500}
              height={500}
              className="max-w-full h-auto"
              alt="African kids"
            />
            <article>
              <h2 className="text-6xl text-[#4c3525] dark:text-[#4c3525] pb-4 font-serif text-right">
                How Secure is it?
              </h2>
              <p className="text-[#4c3525] dark:text-[#4c3525] font-sans text-xl max-w-3xl text-right">
                There are many cryptocurrencies out there. You might ask, what
                sets us apart. We wish to uplift our continent though a
                decentralized democratic payment system where no matter your
                privacy background or economic system, your money is yours.
              </p>
              <p className="text-[#4c3525] dark:text-[#4c3525] font-sans text-xl max-w-3xl pt-4 text-right">
                CoinAfriq uses advanced public key encryption that is considered
                impossible to crack even with next-gen technology. Whether
                you&apos;re using our blockchain, our wallet or even our
                website, your information is securely encrypted to the highest
                current standard.
              </p>
              <p className="text-[#4c3525] dark:text-[#4c3525] font-sans text-xl max-w-3xl pt-4 text-right">
                Don&apos;t believe us? Feel free to try and crack it!
              </p>
            </article>
          </div>
        </section>
        <section className="bg-[#e0ae6e] dark:bg-[#e0ae6e] px-6 py-12">
          <article>
            <Image
              src="/raised-first.svg"
              height={196}
              width={196}
              alt="Raised Fist"
              className="text-center m-auto w-32 lg:w-48 h-auto"
            />
            <h1 className="text-6xl text-[#4c3525] dark:text-[#4c3525] text-center py-6">
              Democracy at work
            </h1>
            <p className="text-2xl lg:text-3xl text-[#4c3525]  dark:text-[#4c3525] text-center max-w-4xl m-auto">
              In other digital currencies, greater shares can be alloted to
              those who already own the most. We don&apos;t do that here. On our
              ecosystem, all verification is done by a delegation that is
              democratically voted on. We call this Nominated Proof of Stake.
              This ensures everyone has a voice, not just those with the most
              earnings.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};
