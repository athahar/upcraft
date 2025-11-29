import { Linkedin } from "lucide-react";
import mashaalImage from "@assets/image_1764408669428.png";
import athaharImage from "@assets/image_1764408716381.png";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p>&copy; 2025 UpCraft LLC</p>
          </div>

          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>San Francisco Bay Area</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
