import { Home } from "lucide-react"

import { LoginForm } from "@/components/templates/Admin/admin-login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="bg-muted bg-[url(https://4kwallpapers.com/images/wallpapers/mountain-fantasy-3840x2160-17956.jpg)] brightness-[0.96] bg-no-repeat bg-cover flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <Home className="size-4" />
          </div>
          Acme Inc.
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
