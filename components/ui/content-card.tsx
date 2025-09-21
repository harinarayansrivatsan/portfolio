import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ContentCardProps {
  title: string
  subtitle?: string
  description?: ReactNode
  image?: string
  imageAlt?: string
  badges?: string[]
  metric?: string
  timeframe?: string
  icon?: ReactNode
  className?: string
  variant?: "default" | "featured" | "compact" | "timeline"
  children?: ReactNode
  onClick?: () => void
  href?: string
}

export function ContentCard({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  badges = [],
  metric,
  timeframe,
  icon,
  className = "",
  variant = "default",
  children,
  onClick,
  href
}: ContentCardProps) {
  const CardComponent = href ? "a" : onClick ? "button" : "div"

  const baseClasses = "glass-card group h-full flex flex-col overflow-hidden transition-all duration-300"
  const variantClasses = {
    default: "",
    featured: "border-primary/20 bg-gradient-to-br from-background to-muted/30",
    compact: "min-h-[200px]",
    timeline: "w-80 min-h-[480px] rounded-3xl"
  }

  const cardProps = href
    ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined }
    : onClick
    ? { onClick, type: 'button' as const }
    : {}

  return (
    <CardComponent
      className={cn(baseClasses, variantClasses[variant], className)}
      {...cardProps}
    >
      {/* Image Section */}
      {image && (
        <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 rounded-xl overflow-hidden relative">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {variant === "featured" && (
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-caption font-semibold">
              Featured
            </div>
          )}
        </div>
      )}

      <CardHeader className={cn("pb-4", image && "pb-6")}>
        {/* Icon and Title Section */}
        <div className="flex items-center gap-3 sm:gap-4 mb-2">
          {icon && (
            <div
              className="flex-shrink-0 bg-primary rounded-lg flex items-center justify-center text-white group-hover:bg-primary-light transition-colors"
              style={{ width: "clamp(2.5rem, 5vw, 3rem)", height: "clamp(2.5rem, 5vw, 3rem)" }}
            >
              {icon}
            </div>
          )}
          <div className="flex-1">
            <CardTitle className={cn(
              "text-primary group-hover:text-primary-light transition-colors",
              variant === "compact" ? "text-heading-4" : "text-heading-3"
            )}>
              {title}
            </CardTitle>
            {subtitle && (
              <h4 className="text-heading-4 text-foreground mt-1">{subtitle}</h4>
            )}
          </div>
        </div>

        {/* Timeframe */}
        {timeframe && (
          <p className="text-body-sm text-muted-foreground flex items-center">
            <svg
              className="mr-2 text-muted-foreground"
              style={{ width: "clamp(1rem, 2vw, 1.25rem)", height: "clamp(1rem, 2vw, 1.25rem)" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {timeframe}
          </p>
        )}
      </CardHeader>

      <CardContent className="flex flex-col flex-grow pt-0">
        {/* Description */}
        {description && (
          <div className="mb-4 flex-grow">
            {typeof description === 'string' ? (
              <p className="text-body text-foreground leading-relaxed">{description}</p>
            ) : (
              description
            )}
          </div>
        )}

        {/* Children Content */}
        {children && (
          <div className="mb-4 flex-grow">
            {children}
          </div>
        )}

        {/* Metric */}
        {metric && (
          <div className="bg-primary/5 rounded-md px-3 py-2 border-l-4 border-primary mb-4">
            <p className="text-caption font-medium text-primary">
              {metric}
            </p>
          </div>
        )}

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </CardComponent>
  )
}