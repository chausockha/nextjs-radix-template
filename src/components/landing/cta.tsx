import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="consultation" className="bg-secondary">
      <div className="container mx-auto px-4 py-16 sm:py-24 text-center">
        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
          Ready to Elevate Your Business?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Let our cloud experts provide a tailored consultation to meet your enterprise needs. Unlock your potential with SummitCloud today.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="mailto:consult@summitcloud.com">Request a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
