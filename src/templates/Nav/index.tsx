import React, { forwardRef, useMemo } from "react"
import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "router/paths"
import { ThemeButton } from "templates/ThemeButton"
import { cn } from "utils/helper"

interface NavProps extends React.ComponentProps<"nav"> {
  mode?: "GRID" | "VERTICAL"
}

const Nav = forwardRef<HTMLDivElement, NavProps>(
  ({ mode = "GRID", className, ...props }, ref) => {
    const { pathname } = useLocation()

    console.log(pathname)

    const navItem = useMemo(
      () => [
        {
          url: ROUTES.COLOR_NAME,
          icon: "/icons/palette.png",
          label: "Colors name",
        },
        {
          url: ROUTES.SEMANTIC_COLOR,
          icon: "/icons/color-picker.png",
          label: "Semantic color",
        },
        {
          url: ROUTES.COLOR_SHADE,
          icon: "/icons/color-shade.png",
          label: "Color shade",
        },
        {
          url: ROUTES.SASS_COMPLIER,
          icon: "/icons/sass.png",
          label: "SASS Complier",
        },
      ],
      []
    )

    return (
      <nav
        ref={ref}
        className={cn(
          className,
          "[&>a]:block",
          mode === "VERTICAL" && "[&_.theme-button]:!justify-start"
        )}
        {...props}
      >
        {navItem.map((item) => (
          <Link key={item.url} to={item.url}>
            <ThemeButton
              className={cn(
                "w-full",
                pathname === item.url && "bg-shade-800 shadow-separate-sm"
              )}
              variant={mode === "VERTICAL" ? "ghost" : "default"}
            >
              <img className="w-8" src={item.icon} alt="" />
              <b className="text-xl">{item.label}</b>
            </ThemeButton>
          </Link>
        ))}
      </nav>
    )
  }
)

export { Nav }
