import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    quote: "SummitCloud's infrastructure has been a game-changer for our scalability. We've seen a 300% increase in performance since migrating.",
    name: "Jane Doe",
    title: "CEO, Innovate Inc.",
    logo: "https://placehold.co/140x40.png",
    logoHint: "logo technology",
  },
  {
    quote: "The reliability and security are top-notch. Their support team is incredibly responsive and knowledgeable. Highly recommended for any enterprise.",
    name: "John Smith",
    title: "CTO, Tech Solutions",
    logo: "https://placehold.co/140x40.png",
    logoHint: "logo software",
  },
  {
    quote: "Transparent pricing and powerful features make SummitCloud the best choice for our complex data processing needs. We couldn't be happier.",
    name: "Emily White",
    title: "Head of Engineering, DataCorp",
    logo: "https://placehold.co/140x40.png",
    logoHint: "logo analytics",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our customers have achieved remarkable results with SummitCloud.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between shadow-lg">
              <CardContent className="pt-6">
                <blockquote className="text-lg italic text-foreground">
                  “{testimonial.quote}”
                </blockquote>
              </CardContent>
              <CardFooter className="flex items-center gap-4 mt-4 bg-secondary/50 p-4 rounded-b-lg">
                <Image
                  src={testimonial.logo}
                  alt={`${testimonial.name}'s company logo`}
                  width={40}
                  height={40}
                  className="rounded-full object-contain"
                  data-ai-hint={testimonial.logoHint}
                />
                <div className="text-sm">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
