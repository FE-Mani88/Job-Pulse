'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"

export function LoginForm({ className, ...props }) {
  const router = useRouter()

  const initialValues = {
    email: "",
    password: "",
    adminsecret: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    adminsecret: Yup.string().required("Admin secret is required"),
  })

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('http://localhost:3000/auth/masterkeyin', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Login failed")
      }

      Swal.fire({
        icon: "success",
        title: "Login successful",
        text: data.message || "Welcome admin!",
      }).then(() => {
        router.push('/admin-panel')
      })
      resetForm()
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: error.message || "Unknown error",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className='py-10'>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="grid gap-6">
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Login As An Admin
                  </span>
                </div>

                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Field as={Input} id="email" name="email" type="email" placeholder="m@example.com" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                        Forgot your password?
                      </a>
                    </div>
                    <Field as={Input} id="password" name="password" type="password" />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="adminsecret">Admin Secret</Label>
                    <Field as={Input} id="adminsecret" name="adminsecret" type="password" placeholder="Enter admin secret" />
                    <ErrorMessage name="adminsecret" component="div" className="text-red-500 text-sm" />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>
                </div>

                <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/admin-signup" className="underline underline-offset-4">
                    Sign up as admin
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  )
}
