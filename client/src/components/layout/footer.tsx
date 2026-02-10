export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <p className="mb-1">&copy; 2025 UpCraft LLC</p>
            <p>San Francisco Bay Area</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
