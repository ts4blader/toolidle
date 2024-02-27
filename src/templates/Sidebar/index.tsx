import React from "react"
import { Link } from "react-router-dom"
import { ROUTES } from "router/paths"
import { Nav } from "templates/Nav"
import { cn } from "utils/helper"

interface SidebarProps extends React.ComponentProps<"div"> {}

const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <div
      className={cn(
        "sidebar",
        "w-[320px] min-h-[calc(100vh-32px)] px-4 py-6 rounded-md bg-shade-900 shadow-md",
        className
      )}
      {...props}
    >
      <Link to={ROUTES.HOME} className="w-[60%] mx-auto block">
        <img className="w-full" src="/images/logo.svg" alt="" />
      </Link>
      <Nav mode="VERTICAL" className="mt-8 space-y-4" />
    </div>
  )
}

export default Sidebar
