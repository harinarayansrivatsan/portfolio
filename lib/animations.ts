/**
 * Professional Animation System
 * Centralized animation configurations for consistent, professional animations across the portfolio
 */

// Animation timing constants - Professional durations
export const ANIMATION_DURATION = {
  instant: 150,
  fast: 200,
  normal: 300,
  slow: 400,
  slower: 600,
} as const

// Professional easing functions
export const EASING = {
  // Standard easings
  easeOut: 'cubic-bezier(0.33, 1, 0.68, 1)', // Smooth deceleration
  easeIn: 'cubic-bezier(0.32, 0, 0.67, 0)',
  easeInOut: 'cubic-bezier(0.65, 0, 0.35, 1)',

  // Premium easings
  spring: 'cubic-bezier(0.16, 1, 0.3, 1)', // Elegant spring effect
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)', // Material design standard
} as const

// Animation classes for different use cases
export const ANIMATION_CLASSES = {
  // Page entry animations
  fadeInUp: 'animate-fade-in-up',
  fadeIn: 'animate-fade-in',
  slideIn: 'animate-slide-in',

  // Hover effects
  hoverScale: 'hover:scale-105 transition-transform duration-300 ease-out',
  hoverLift: 'hover:-translate-y-1 transition-transform duration-300 ease-out',
  hoverGlow: 'hover:shadow-lg transition-shadow duration-300 ease-out',

  // Interactive elements
  cardHover: 'transition-all duration-300 hover:shadow-lg hover:scale-[1.02]',
  buttonHover: 'transition-all duration-300 hover:-translate-y-0.5',
  pillHover: 'transition-all duration-200 hover:bg-red-800 hover:text-white hover:scale-105 hover:shadow-lg hover:border-red-800',

  // Smooth transitions
  smoothAll: 'transition-all duration-300 ease-out',
  smoothColors: 'transition-colors duration-300 ease-out',
  smoothOpacity: 'transition-opacity duration-300 ease-out',
  smoothTransform: 'transition-transform duration-300 ease-out',
} as const

// Stagger delays for sequential animations (in ms)
export const STAGGER_DELAY = {
  items: 50,
  cards: 100,
  sections: 150,
} as const

/**
 * Generate stagger delay style for sequential animations
 * @param index - Index of the element
 * @param baseDelay - Base delay in milliseconds (default: STAGGER_DELAY.items)
 */
export function getStaggerDelay(index: number, baseDelay: number = STAGGER_DELAY.items): React.CSSProperties {
  return {
    animationDelay: `${index * baseDelay}ms`,
  }
}

/**
 * CSS class generator for card entrance animations
 * @param index - Card index for stagger effect
 */
export function getCardAnimation(index: number): string {
  return `opacity-0 animate-fade-in-up`
}

/**
 * Style object for card entrance with stagger
 * @param index - Card index for stagger effect
 */
export function getCardAnimationStyle(index: number): React.CSSProperties {
  return {
    animationDelay: `${index * STAGGER_DELAY.cards}ms`,
    animationFillMode: 'forwards',
  }
}

/**
 * Professional hover effect configuration for cards
 */
export const CARD_HOVER_CONFIG = {
  scale: 1.02,
  translateY: -2,
  duration: ANIMATION_DURATION.normal,
  easing: EASING.easeOut,
} as const

/**
 * Professional hover effect configuration for interactive elements
 */
export const INTERACTIVE_HOVER_CONFIG = {
  scale: 1.05,
  duration: ANIMATION_DURATION.fast,
  easing: EASING.easeOut,
} as const

/**
 * Get transition CSS property string
 * @param properties - Array of CSS properties to transition
 * @param duration - Duration in milliseconds (default: normal)
 * @param easing - Easing function (default: easeOut)
 */
export function getTransition(
  properties: string[],
  duration: number = ANIMATION_DURATION.normal,
  easing: string = EASING.easeOut
): string {
  return properties
    .map(prop => `${prop} ${duration}ms ${easing}`)
    .join(', ')
}