export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t-2 border-primary-light py-2">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-xs sm:text-sm opacity-90">
            © {new Date().getFullYear()} Hari Narayan Srivatsan. Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
