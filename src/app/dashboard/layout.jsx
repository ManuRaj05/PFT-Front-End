import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"

export default function Layout({
  children
}) {
  const cookieStore = cookies()
  const token = cookieStore.get("token")

  if (!token) {
    redirect("/login")
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}

