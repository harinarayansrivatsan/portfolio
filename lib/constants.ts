// Navigation configuration
export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/journey", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/recommendations", label: "Testimonials" },
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

// Typography - Centralized font size configuration (Compact & Modern)
export const TYPOGRAPHY = {
  // Hero section (prominent but not oversized)
  HERO: {
    TITLE: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    SUBTITLE: "text-sm sm:text-base md:text-lg lg:text-xl",
    DESCRIPTION: "text-xs sm:text-sm md:text-base",
    BADGE: "text-xs sm:text-sm",
    STAT_VALUE: "text-lg sm:text-xl md:text-2xl",
    STAT_LABEL: "text-xs",
  },

  // Section headers (clear but compact)
  SECTION: {
    TITLE: "text-xl sm:text-2xl md:text-3xl",
    SUBTITLE: "text-xs sm:text-sm md:text-base",
  },

  // Card elements (readable and compact)
  CARD: {
    TITLE: "text-base sm:text-lg",
    SUBTITLE: "text-xs sm:text-sm",
    DESCRIPTION: "text-xs sm:text-sm",
    META: "text-xs",
    TAG: "text-xs",
    ICON: "text-2xl sm:text-3xl",
  },

  // Navigation
  NAV: {
    LOGO: "text-base sm:text-lg",
    LINK: "text-xs sm:text-sm",
  },

  // Footer
  FOOTER: {
    HEADING: "text-sm sm:text-base",
    TEXT: "text-xs sm:text-sm",
    SMALL: "text-xs",
  },

  // Buttons
  BUTTON: {
    DEFAULT: "text-xs sm:text-sm",
  },
} as const

// Spacing - Centralized spacing configuration (Compact & Clean)
export const SPACING = {
  SECTION: {
    PADDING_Y: "py-6 sm:py-8 md:py-10",
    PADDING_X: "px-4 sm:px-6",
    MARGIN_BOTTOM: "mb-6 sm:mb-8",
    // Consistent section content wrapper
    WRAPPER: "py-0",
  },
  CARD: {
    PADDING: "p-3 sm:p-4 md:p-5",
    GAP: "gap-3 sm:gap-4",
    MARGIN_BOTTOM: "mb-3 sm:mb-4",
  },
  HEADER: {
    HEIGHT: "h-14 sm:h-16",
  },
  GRID: {
    // Grid gaps for consistent spacing
    DEFAULT: "gap-3 sm:gap-4 md:gap-5",
    SMALL: "gap-2 sm:gap-3",
    LARGE: "gap-4 sm:gap-6",
  },
} as const

// Layout - Centralized layout configuration
export const LAYOUT = {
  CONTAINER: {
    // Standard container widths for consistency
    SMALL: "max-w-4xl",
    MEDIUM: "max-w-5xl",
    LARGE: "max-w-6xl",
    XLARGE: "max-w-7xl",
  },
  SECTION: {
    // Section wrapper classes for consistency
    WRAPPER: "w-full flex flex-col",
    CONTAINER: "w-full mx-auto",
  },
} as const

// Border radius
export const BORDER_RADIUS = {
  CARD: "rounded-xl sm:rounded-2xl",
  BUTTON: "rounded-lg",
  BADGE: "rounded-lg",
  TAG: "rounded-lg",
} as const
