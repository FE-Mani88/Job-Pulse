'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { Formik } from "formik";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import Swal from "sweetalert2"

export function SignupForm({
  className,
  ...props
}) {
  return (
    <Formik
      initialValues={{ username: '', email: '', phone: '', password: '', role: 'job_seeker' }}
      onSubmit={async (values) => {
        const registerRes = await fetch('http://localhost:3000/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: values.username,
            email: values.email,
            phone: values.phone,
            password: values.password,
            role: values.role
          }),
          credentials: 'include'
        })

        if (registerRes.ok) {
          setTimeout(async () => {
            const loginRes = await fetch('http://localhost:3000/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: values.email,
                password: values.password,
              }),
              credentials: 'include'
            })

            if (loginRes.ok) {
              Swal.fire({
                icon: 'success',
                title: 'You Are Registered Successfully',
                confirmButtonText: 'OK'
              })
            }

            console.log('AUTH LOG: ', res)
          }, 500)
        }


        console.log('AUTH REG: ', await res.json())
      }}>
      {({ values, handleChange, setFieldValue, handleSubmit }) => (
        <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit}>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Create Your Account</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Enter your email below to create to your account
            </p>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="username" placeholder="Username" value={values.username} onChange={handleChange} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" value={values.email} onChange={handleChange} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="phone" placeholder="09213839123" value={values.phone} onChange={handleChange} />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" value={values.password} onChange={handleChange} />
            </div>
            <RadioGroup defaultValue="job_seeker" value={values.role} onValueChange={(value) => setFieldValue("role", value)}>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="job_seeker" id="r1" />
                <Label htmlFor="r1">Job Seeker</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="company" id="r2" />
                <Label htmlFor="r2">Employer</Label>
              </div>
            </RadioGroup>
            <Button type="submit" className="w-full cursor-pointer">
              Register
            </Button>
            <div
              className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background text-muted-foreground relative z-10 px-2">
                Or continue with
              </span>
            </div>
          </div>
          <div className="text-center text-sm">
            Already have an account? {" "}
            <Link href="/signin" className="underline underline-offset-4">
              Sign in
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
}
