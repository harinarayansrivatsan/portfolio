// Navigation configuration
export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "Journey" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/leadership", label: "Leadership" },
  { href: "/interests", label: "Interests" },
  { href: "/recommendations", label: "Recommendations" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const

// Animation delays
export const ANIMATION_DELAYS = {
  FAST: 50,
  NORMAL: 100,
  SLOW: 200,
} as const

// Color gradients
export const GRADIENTS = {
  PRIMARY: "from-primary to-primary-light",
  SECONDARY: "from-secondary to-secondary-light",
  RED_DARK: "from-red-800 to-red-900",
  RED_MEDIUM: "from-red-700 to-red-800",
  BLUE: "from-blue-500 to-blue-700",
  BLUE_DARK: "from-blue-600 to-blue-800",
  GREEN: "from-green-600 to-green-800",
} as const

// Dimensions
export const DIMENSIONS = {
  CARD_MIN_HEIGHT: "min-h-[400px]",
  CARD_MAX_WIDTH: "max-w-80",
  ICON_HEIGHT: "h-24",
} as const
