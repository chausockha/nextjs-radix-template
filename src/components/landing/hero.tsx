import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Elevate Your Enterprise with <span className="text-primary">SummitCloud</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Scalable, Secure, and Innovative Cloud Solutions Tailored for Your Business Growth. Experience unparalleled performance and reliability.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href="#consultation">Request a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
