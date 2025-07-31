import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="relative min-h-svh flex items-center justify-center p-6 md:p-10">
      {/* Background Image */}
      <img
        src="https://images.alphacoders.com/678/678464.jpg"
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.5] z-0"
      />

      {/* Login Form */}
      <div className="relative z-20 w-full max-w-md">
        <LoginForm className="z-20" />
      </div>
    </div>
  )
}
