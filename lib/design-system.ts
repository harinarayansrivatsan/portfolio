/**
 * Design System - Tailwind Class Utilities
 * Converts design tokens to Tailwind classes
 * Complete separation of design from functionality
 */

import { SECTION_CONFIGS } from './design-tokens'

// =============================================================================
// TAILWIND CLASS BUILDERS
// =============================================================================

/**
 * Typography Classes
 */
export const TEXT = {
  // Hero Section
  hero: {
    title: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight',
    subtitle: 'text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-snug',
    description: 'text-xs sm:text-sm md:text-base leading-relaxed',
    badge: 'text-xs sm:text-sm font-semibold',
    statValue: 'text-lg sm:text-xl md:text-2xl font-bold',
    statLabel: 'text-xs',
  },

  // Section Headers
  section: {
    title: 'text-xl sm:text-2xl md:text-3xl font-bold leading-tight',
    subtitle: 'text-xs sm:text-sm md:text-base leading-relaxed',
  },

  // Card Content
  card: {
    title: 'text-base sm:text-lg font-bold',
    subtitle: 'text-xs sm:text-sm font-semibold',
    body: 'text-xs sm:text-sm leading-relaxed',
    meta: 'text-xs',
    badge: 'text-xs font-medium',
  },

  // Navigation
  nav: {
    logo: 'text-base sm:text-lg font-bold',
    link: 'text-xs sm:text-sm font-medium',
  },
} as const

/**
 * Layout Classes
 */
export const LAYOUT = {
  // Section Containers
  section: {
    default: 'relative w-full min-h-[100vh] max-h-[100vh] flex items-start justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto',
    compact: 'relative w-full min-h-fit max-h-[100vh] flex items-start justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-y-auto',
    journey: 'relative w-full min-h-fit flex items-start justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8',
    wrapper: 'w-full max-w-7xl mx-auto',
  },

  // Content Containers
  container: {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  },

  // Grid Systems
  grid: {
    one: 'grid grid-cols-1',
    two: 'grid grid-cols-1 md:grid-cols-2',
    three: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    four: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    five: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    auto: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  },
} as const

/**
 * Spacing Classes
 */
export const SPACING = {
  // Gaps
  gap: {
    xs: 'gap-1',
    sm: 'gap-2 sm:gap-3',
    md: 'gap-3 sm:gap-4 md:gap-5',
    lg: 'gap-4 sm:gap-6',
    xl: 'gap-6 sm:gap-8',
  },

  // Padding
  padding: {
    card: {
      sm: 'p-3 sm:p-4',
      md: 'p-4 sm:p-5',
      lg: 'p-4 sm:p-5 md:p-6',
    },
    section: 'py-12 sm:py-16 md:py-20',
  },

  // Margins
  margin: {
    xs: 'mb-1',
    sm: 'mb-2',
    md: 'mb-3 sm:mb-4',
    lg: 'mb-4 sm:mb-5',
    xl: 'mb-6 sm:mb-8',
  },
} as const

/**
 * Component Classes
 */
export const COMPONENTS = {
  // Cards
  card: {
    base: 'bg-white border border-border/40 rounded-lg shadow-sm hover:shadow-md transition-all duration-200',
    interactive: 'bg-white border border-border/40 rounded-lg shadow-sm hover:shadow-md hover:translateY(-2px) transition-all duration-200',
  },

  // Buttons
  button: {
    primary: 'px-4 py-2 sm:px-5 sm:py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-light transition-all duration-200 shadow-sm hover:shadow-md',
    secondary: 'px-4 py-2 bg-transparent border-2 border-primary text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-200',
  },

  // Badges
  badge: {
    primary: 'px-2 py-0.5 bg-primary text-white rounded text-xs font-semibold',
    secondary: 'px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded text-xs font-medium',
    success: 'px-2 py-1 bg-green-50 text-green-700 border border-green-200 rounded-lg text-xs font-semibold',
  },

  // Icons
  icon: {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl',
  },
} as const

/**
 * Animation Classes
 */
export const ANIMATIONS = {
  // Transitions
  transition: {
    fast: 'transition-all duration-150',
    base: 'transition-all duration-200',
    slow: 'transition-all duration-300',
  },

  // Hover Effects
  hover: {
    lift: 'hover:-translate-y-2',
    liftSmall: 'hover:-translate-y-1',
    scale: 'hover:scale-105',
    scaleSmall: 'hover:scale-[1.02]',
  },

  // Scroll Reveals
  reveal: {
    fadeIn: 'opacity-0 translate-y-8 transition-all duration-700',
    visible: 'opacity-100 translate-y-0',
  },
} as const

// =============================================================================
// SECTION-SPECIFIC UTILITIES
// =============================================================================

/**
 * Get complete section configuration
 */
export function getSectionClasses(section: keyof typeof SECTION_CONFIGS) {
  const config = SECTION_CONFIGS[section]

  return {
    container: config.layout === 'compact' ? LAYOUT.section.compact : LAYOUT.section.default,
    wrapper: LAYOUT.section.wrapper,
    grid: ('grid' in config && config.grid) ? `grid ${config.grid} ${SPACING.gap.md}` : '',
    card: `${COMPONENTS.card.interactive} ${('cardPadding' in config && config.cardPadding) || SPACING.padding.card.md}`,
  }
}

/**
 * Get typography classes for section
 */
export function getSectionTypography(section: keyof typeof SECTION_CONFIGS) {
  const config = SECTION_CONFIGS[section]

  return {
    title: ('titleSize' in config && config.titleSize) || '',
    subtitle: ('subtitleSize' in config && config.subtitleSize) || '',
    body: ('bodySize' in config && config.bodySize) || '',
    icon: ('iconSize' in config && config.iconSize) || '',
  }
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Combine multiple class strings (re-export from utils for consistency)
 */
export { cn } from './utils'

/**
 * Get responsive classes
 */
export function responsive(mobile: string, tablet?: string, desktop?: string): string {
  const classes = [mobile]
  if (tablet) classes.push(`sm:${tablet}`)
  if (desktop) classes.push(`md:${desktop}`)
  return classes.join(' ')
}
