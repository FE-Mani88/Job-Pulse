import { SignupForm } from "@/components/templates/SignupForm/signup-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div style={{ boxShadow: '1px 1px 10px #ffffff' }} className="w-full max-w-md rounded-xl border-[0.1px] border-gray-300 p-6 shadow-xl">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://rare-gallery.com/uploads/posts/340135-Fantasy-Mountain-Landscape-Digital-Art.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.8]"
        />
      </div>
    </div>
  )
}
