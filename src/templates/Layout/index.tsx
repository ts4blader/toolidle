import { Outlet } from "react-router-dom"
import Sidebar from "templates/Sidebar"
import { cn } from "utils/helper"

const Layout = () => {
  return (
    <div className={cn("layout", "flex gap-4 p-4")}>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Layout
