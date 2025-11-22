/**
 * Design Tokens - Enhanced Modern Design System
 * Single source of truth for all design decisions
 * Platform-agnostic, semantic, and maintainable
 * Version 2.0 - Modern Professional UI/UX
 */

// =============================================================================
// PRIMITIVE TOKENS - Raw values (foundation)
// =============================================================================

export const PRIMITIVES = {
  // Enhanced Color Palette - Modern & Professional
  colors: {
    white: '#ffffff',
    black: '#000000',
    // Primary Brand - Aggie Maroon
    maroon: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#800000',  // Aggie Maroon
      600: '#600000',
      700: '#500000',
      800: '#400000',
      900: '#300000',
    },
    // Neutral Colors
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    // Accent Colors - Professional Palette
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    amber: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    rose: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
    },
  },

  // Modern Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #800000 0%, #a00000 100%)',
    primaryLight: 'linear-gradient(135deg, #800000 0%, #c00000 100%)',
    secondary: 'linear-gradient(135deg, #64748b 0%, #94a3b8 100%)',
    accent: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    warm: 'linear-gradient(135deg, #f59e0b 0%, #f43f5e 100%)',
    cool: 'linear-gradient(135deg, #3b82f6 0%, #22c55e 100%)',
    sunset: 'linear-gradient(135deg, #800000 0%, #f59e0b 50%, #f43f5e 100%)',
    professional: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    glass: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
  },

  // Spacing Scale (rem)
  spacing: {
    0: '0',
    0.5: '0.125rem',   // 2px
    1: '0.25rem',      // 4px
    1.5: '0.375rem',   // 6px
    2: '0.5rem',       // 8px
    2.5: '0.625rem',   // 10px
    3: '0.75rem',      // 12px
    4: '1rem',         // 16px
    5: '1.25rem',      // 20px
    6: '1.5rem',       // 24px
    8: '2rem',         // 32px
    10: '2.5rem',      // 40px
    12: '3rem',        // 48px
    16: '4rem',        // 64px
    20: '5rem',        // 80px
    24: '6rem',        // 96px
  },

  // Font Sizes (rem)
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  },

  // Line Heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Font Weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    base: '0.5rem',   // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    full: '9999px',
  },

  // Enhanced Shadows with Color
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    // Colored shadows for premium feel
    maroon: '0 10px 25px -5px rgba(128, 0, 0, 0.3), 0 4px 10px -3px rgba(128, 0, 0, 0.15)',
    blue: '0 10px 25px -5px rgba(59, 130, 246, 0.3), 0 4px 10px -3px rgba(59, 130, 246, 0.15)',
    purple: '0 10px 25px -5px rgba(168, 85, 247, 0.3), 0 4px 10px -3px rgba(168, 85, 247, 0.15)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  },

  // Advanced Transitions & Animations
  transition: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '700ms',
  },

  // Easing Functions
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },

  // Z-Index
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    overlay: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
  },
} as const

// =============================================================================
// SEMANTIC TOKENS - Meaningful, context-aware tokens
// =============================================================================

export const SEMANTIC = {
  // Colors with meaning
  color: {
    text: {
      primary: PRIMITIVES.colors.slate[900],
      secondary: PRIMITIVES.colors.slate[600],
      tertiary: PRIMITIVES.colors.slate[500],
      inverse: PRIMITIVES.colors.white,
      brand: PRIMITIVES.colors.maroon[500],
      success: PRIMITIVES.colors.green[700],
    },
    background: {
      primary: PRIMITIVES.colors.white,
      secondary: PRIMITIVES.colors.slate[50],
      tertiary: PRIMITIVES.colors.slate[100],
      brand: PRIMITIVES.colors.maroon[500],
      brandLight: PRIMITIVES.colors.maroon[50],
      success: PRIMITIVES.colors.green[50],
    },
    border: {
      primary: PRIMITIVES.colors.slate[200],
      secondary: PRIMITIVES.colors.slate[300],
      brand: PRIMITIVES.colors.maroon[500],
      brandLight: PRIMITIVES.colors.maroon[200],
    },
  },

  // Spacing with purpose
  spacing: {
    section: {
      paddingY: { mobile: PRIMITIVES.spacing[12], desktop: PRIMITIVES.spacing[20] },
      paddingX: { mobile: PRIMITIVES.spacing[4], desktop: PRIMITIVES.spacing[8] },
      gap: { mobile: PRIMITIVES.spacing[8], desktop: PRIMITIVES.spacing[12] },
    },
    card: {
      padding: { mobile: PRIMITIVES.spacing[4], desktop: PRIMITIVES.spacing[6] },
      gap: { mobile: PRIMITIVES.spacing[3], desktop: PRIMITIVES.spacing[4] },
    },
    component: {
      gap: {
        xs: PRIMITIVES.spacing[1],
        sm: PRIMITIVES.spacing[2],
        md: PRIMITIVES.spacing[3],
        lg: PRIMITIVES.spacing[4],
        xl: PRIMITIVES.spacing[6],
      },
    },
  },

  // Typography with purpose
  typography: {
    heading: {
      hero: {
        fontSize: { mobile: PRIMITIVES.fontSize['3xl'], desktop: PRIMITIVES.fontSize['4xl'] },
        lineHeight: PRIMITIVES.lineHeight.tight,
        fontWeight: PRIMITIVES.fontWeight.bold,
      },
      h1: {
        fontSize: { mobile: PRIMITIVES.fontSize['2xl'], desktop: PRIMITIVES.fontSize['3xl'] },
        lineHeight: PRIMITIVES.lineHeight.tight,
        fontWeight: PRIMITIVES.fontWeight.bold,
      },
      h2: {
        fontSize: { mobile: PRIMITIVES.fontSize.xl, desktop: PRIMITIVES.fontSize['2xl'] },
        lineHeight: PRIMITIVES.lineHeight.snug,
        fontWeight: PRIMITIVES.fontWeight.bold,
      },
      h3: {
        fontSize: { mobile: PRIMITIVES.fontSize.lg, desktop: PRIMITIVES.fontSize.xl },
        lineHeight: PRIMITIVES.lineHeight.snug,
        fontWeight: PRIMITIVES.fontWeight.semibold,
      },
    },
    body: {
      large: {
        fontSize: PRIMITIVES.fontSize.base,
        lineHeight: PRIMITIVES.lineHeight.relaxed,
        fontWeight: PRIMITIVES.fontWeight.normal,
      },
      base: {
        fontSize: PRIMITIVES.fontSize.sm,
        lineHeight: PRIMITIVES.lineHeight.normal,
        fontWeight: PRIMITIVES.fontWeight.normal,
      },
      small: {
        fontSize: PRIMITIVES.fontSize.xs,
        lineHeight: PRIMITIVES.lineHeight.normal,
        fontWeight: PRIMITIVES.fontWeight.normal,
      },
    },
    label: {
      base: {
        fontSize: PRIMITIVES.fontSize.sm,
        lineHeight: PRIMITIVES.lineHeight.normal,
        fontWeight: PRIMITIVES.fontWeight.medium,
      },
      small: {
        fontSize: PRIMITIVES.fontSize.xs,
        lineHeight: PRIMITIVES.lineHeight.normal,
        fontWeight: PRIMITIVES.fontWeight.medium,
      },
    },
  },
} as const

// =============================================================================
// COMPONENT TOKENS - Component-specific configurations
// =============================================================================

export const COMPONENTS = {
  // Section Layouts
  section: {
    default: {
      minHeight: 'min-h-screen',
      padding: 'py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8',
      gap: 'space-y-12',
    },
    compact: {
      minHeight: 'min-h-fit',
      padding: 'py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8',
      gap: 'space-y-8',
    },
  },

  // Cards
  card: {
    base: {
      padding: 'p-4 sm:p-5 md:p-6',
      borderRadius: 'rounded-lg sm:rounded-xl',
      border: 'border border-border/40',
      shadow: 'shadow-sm hover:shadow-md',
      transition: 'transition-all duration-200',
    },
    compact: {
      padding: 'p-3 sm:p-4',
      borderRadius: 'rounded-lg',
      border: 'border border-border/40',
      shadow: 'shadow-sm hover:shadow-md',
      transition: 'transition-all duration-200',
    },
  },

  // Buttons
  button: {
    primary: {
      padding: 'px-4 py-2 sm:px-5 sm:py-2.5',
      fontSize: 'text-sm',
      fontWeight: 'font-semibold',
      borderRadius: 'rounded-lg',
      transition: 'transition-all duration-200',
    },
    secondary: {
      padding: 'px-4 py-2',
      fontSize: 'text-sm',
      fontWeight: 'font-medium',
      borderRadius: 'rounded-lg',
      transition: 'transition-all duration-200',
    },
  },

  // Header
  header: {
    height: 'h-14 sm:h-16',
    padding: 'px-4 sm:px-6',
    logoFontSize: 'text-base sm:text-lg',
    linkFontSize: 'text-xs sm:text-sm',
    gap: 'gap-1',
  },
} as const

// =============================================================================
// SECTION-SPECIFIC CONFIGURATIONS
// =============================================================================

export const SECTION_CONFIGS = {
  hero: {
    layout: 'default',
    contentDensity: 'low',  // Few elements, needs breathing room
    imageSize: { mobile: 'w-20 h-20', tablet: 'w-24 h-24', desktop: 'w-28 h-28' },
    titleSize: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
    subtitleSize: 'text-sm sm:text-base md:text-lg',
    descriptionSize: 'text-xs sm:text-sm md:text-base',
    badgeSize: 'text-xs sm:text-sm',
    statSize: 'text-lg sm:text-xl md:text-2xl',
    spacing: {
      imageToTitle: 'mb-3 sm:mb-4',
      titleToSubtitle: 'mb-3 sm:mb-4',
      subtitleToDescription: 'mb-3 sm:mb-4',
      descriptionToStats: 'mb-4 sm:mb-5',
      statsToCTA: 'mb-4 sm:mb-5',
    },
  },

  about: {
    layout: 'default',
    contentDensity: 'medium',  // 4 cards total (2 leadership + 2 interests)
    grid: 'grid-cols-1 md:grid-cols-2',
    cardPadding: 'p-4 sm:p-5',
    iconSize: 'text-2xl sm:text-3xl',
    titleSize: 'text-base sm:text-lg',
    subtitleSize: 'text-xs sm:text-sm',
    bodySize: 'text-xs sm:text-sm',
  },

  journey: {
    layout: 'default',
    contentDensity: 'high',  // 4 timeline items with detailed content
    cardPadding: 'p-4 sm:p-5',
    imageHeight: 'h-32 sm:h-36',
    titleSize: 'text-base sm:text-lg',
    subtitleSize: 'text-xs sm:text-sm',
    bodySize: 'text-xs sm:text-sm',
    badgeSize: 'text-xs',
    spacing: {
      itemGap: 'mb-6 md:mb-8',
    },
  },

  projects: {
    layout: 'default',
    contentDensity: 'medium',  // 2 project cards with images and metrics
    grid: 'grid-cols-1 md:grid-cols-2',
    imageHeight: 'h-48 sm:h-56',
    cardPadding: 'p-4 sm:p-5',
    titleSize: 'text-base sm:text-lg',
    bodySize: 'text-xs sm:text-sm',
    metricSize: 'text-sm sm:text-base',
  },

  skills: {
    layout: 'compact',
    contentDensity: 'low',  // 5 simple skill cards
    grid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    cardPadding: 'p-3 sm:p-4',
    iconSize: 'text-2xl sm:text-3xl',
    titleSize: 'text-sm sm:text-base',
    itemSize: 'text-xs',
  },

  recommendations: {
    layout: 'default',
    contentDensity: 'high',  // 3 testimonials with long text
    grid: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    cardPadding: 'p-4 sm:p-5',
    iconSize: 'text-2xl sm:text-3xl',
    nameSize: 'text-sm sm:text-base',
    titleSize: 'text-xs',
    bodySize: 'text-xs',
    badgeSize: 'text-xs',
  },

  contact: {
    layout: 'compact',
    contentDensity: 'low',  // 2 simple contact cards
    grid: 'grid-cols-1 md:grid-cols-2',
    cardPadding: 'p-4 sm:p-5 md:p-6',
    iconSize: 'text-3xl sm:text-4xl',
    titleSize: 'text-lg sm:text-xl',
    subtitleSize: 'text-xs sm:text-sm',
    bodySize: 'text-xs sm:text-sm',
  },
} as const

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Get Tailwind class string from config path
 */
export function getClassFromConfig(config: string): string {
  return config
}

/**
 * Combine multiple config classes
 */
export function combineClasses(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}
