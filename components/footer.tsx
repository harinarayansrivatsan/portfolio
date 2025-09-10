export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Hari Narayan. Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
