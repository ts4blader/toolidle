import React, { memo, forwardRef } from "react"
import { cn } from "utils/helper"

interface ThemeButtonProps extends React.ComponentProps<"div"> {
  variant?: "default" | "ghost"
}

const ThemeButton = memo(
  forwardRef<HTMLDivElement, ThemeButtonProps>(
    ({ variant = "default", children, className, ...props }, ref) => {
      return (
        <div
          ref={ref}
          className={cn(
            "theme-button",
            "inline-flex items-center justify-center py-4 px-6 rounded-lg gap-x-4",
            "hover:bg-primary-300 hover:text-primary-900",
            // "active:translate-x-1 active:translate-y-1 active:shadow-none",
            "active:opacity-70",
            variant === "default" && "shadow-separate-sm bg-shade-900",
            className
          )}
          {...props}
        >
          {children}
        </div>
      )
    }
  )
)

export { ThemeButton }
