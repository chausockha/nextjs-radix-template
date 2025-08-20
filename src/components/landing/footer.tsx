import { Cloud } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-primary" />
            <span className="font-bold">SummitCloud</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SummitCloud. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
