import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Database, Container } from "lucide-react";

const products = [
  {
    title: "Compute Engine",
    description: "High-performance, scalable virtual machines.",
    icon: <Server className="w-10 h-10 text-primary" />,
    pricing: {
      starter: "$50/mo",
      business: "$200/mo",
      enterprise: "Custom",
    },
  },
  {
    title: "Object Storage",
    description: "Secure, durable, and scalable object storage.",
    icon: <Database className="w-10 h-10 text-primary" />,
    pricing: {
      starter: "$5/TB/mo",
      business: "$20/TB/mo",
      enterprise: "Custom",
    },
  },
  {
    title: "Managed Kubernetes",
    description: "Deploy, manage, and scale containerized applications.",
    icon: <Container className="w-10 h-10 text-primary" />,
    pricing: {
      starter: "$100/mo",
      business: "$500/mo",
      enterprise: "Custom",
    },
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            Top-Tier Cloud Products
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our suite of enterprise-ready products designed for performance, security, and limitless scale.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.title} className="flex flex-col transition-transform duration-300 ease-in-out hover:scale-105">
              <CardHeader className="items-center text-center">
                {product.icon}
                <CardTitle className="mt-4">{product.title}</CardTitle>
                <CardDescription className="px-4">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <h4 className="text-md font-semibold text-center text-primary">Pricing Tiers</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between border-t pt-2"><span>Starter</span> <strong className="text-foreground">{product.pricing.starter}</strong></li>
                    <li className="flex justify-between border-t pt-2"><span>Business</span> <strong className="text-foreground">{product.pricing.business}</strong></li>
                    <li className="flex justify-between border-t pt-2"><span>Enterprise</span> <strong className="text-foreground">{product.pricing.enterprise}</strong></li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
