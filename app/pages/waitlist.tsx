import { Section, Container, Prose } from "@/components/craft";
import { Metadata } from "next";
import BackButton from "@/components/back";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Waitlist",
  description: "Sign up for the Coin Afriq waitlist",
};

export default async function Waitlist() {

  return (
    <Section>
      <Container className="space-y-6">
        <Prose className="mb-8">
          <h2>Coin Afriq Waitlist</h2>
          <p>Sign-up for Coin Afriq's waitlist and be the first to know when our
            pre-sale, IEO/ICO and TGE occur!
          </p>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf4rgnyn-vbO1iym5KauQjtQ86fSIWSif1-EB5ne0pgWNFcsw/viewform?embedded=true" width="640" height="8745" frameborder="0" marginheight="0" marginwidth="0">Loading…
          </iframe>
        </Prose>
        <BackButton />
      </Container>
    </Section>
  );
}
