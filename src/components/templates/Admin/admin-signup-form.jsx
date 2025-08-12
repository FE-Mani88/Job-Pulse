'use client'
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import Swal from "sweetalert2";
import Link from "next/link";

const formSchema = yup.object().shape({
  username: yup.string().min(3).max(20).required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{12}$/, "Phone must be 12 digits")
    .required("Phone is required"),
  password: yup
    .string()
    .min(8)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Must contain uppercase, lowercase and number")
    .required("Password is required"),
  adminCode: yup.string().optional(),
});

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export function AdminRegisterForm({ className, ...props }) {
  const router = useRouter();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className='p-0 overflow-hidden'>
        <CardContent className="grid p-0 md:grid-cols-2">
          <Formik
            initialValues={{
              username: "",
              email: "",
              phone: "",
              password: "",
              adminCode: "",
            }}
            validationSchema={formSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const registerRes = await fetch('http://localhost:3000/auth/masterkeyup', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    email: values.email,
                    username: values.username,
                    password: values.password,
                    phone: values.phone,
                    role: "job_seeker",
                    adminsecret: values.adminCode
                  }),
                  credentials: 'include'
                });

                const registerData = await registerRes.json();

                if (!registerRes.ok) {
                  return Swal.fire({
                    icon: 'error',
                    title: registerData.message || "Registration failed",
                    confirmButtonText: 'Try Again'
                  });
                }

                await delay(500);

                const loginRes = await fetch('http://localhost:3000/auth/masterkeyin', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                    adminsecret: values.adminCode
                  }),
                  credentials: 'include'
                });

                if (loginRes.ok) {
                  return Swal.fire({
                    icon: 'success',
                    title: 'You are registered as admin successfully',
                    confirmButtonText: 'OK'
                  }).then(() => {
                    router.push('/admin-panel');
                  });
                }

                Swal.fire({
                  icon: 'warning',
                  title: 'Account created but login failed',
                  text: 'Please login manually.',
                  confirmButtonText: 'OK'
                });

              } catch (error) {
                console.error("Registration error:", error);
                Swal.fire({
                  icon: 'error',
                  title: "Network error",
                  text: error.message || "Please check your connection and try again."
                });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="p-6 md:p-8 flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Create Your Account</h1>
                  <p className="text-muted-foreground">Sign up for a new admin account</p>
                </div>

                {/* Username */}
                <div className="grid gap-3">
                  <Label htmlFor="username">Username</Label>
                  <Field as={Input} id="username" name="username" type="text"
                    className={cn({ "border-red-500": errors.username && touched.username })}
                  />
                  <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
                </div>

                {/* Email */}
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Field as={Input} id="email" name="email" type="email"
                    className={cn({ "border-red-500": errors.email && touched.email })}
                  />
                  <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                </div>

                {/* Phone */}
                <div className="grid gap-3">
                  <Label htmlFor="phone">Phone</Label>
                  <Field as={Input} id="phone" name="phone" type="tel"
                    className={cn({ "border-red-500": errors.phone && touched.phone })}
                  />
                  <ErrorMessage name="phone" component="p" className="text-red-500 text-sm" />
                </div>

                {/* Password */}
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Field as={Input} id="password" name="password" type="password"
                    className={cn({ "border-red-500": errors.password && touched.password })}
                  />
                  <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
                </div>

                {/* Admin Code */}
                <div className="grid gap-3">
                  <Label htmlFor="adminCode">Admin Code</Label>
                  <Field as={Input} id="adminCode" name="adminCode" type="text"
                    className={cn({ "border-red-500": errors.adminCode && touched.adminCode })}
                  />
                  <ErrorMessage name="adminCode" component="p" className="text-red-500 text-sm" />
                </div>

                {/* Submit */}
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Registering..." : "Register"}
                </Button>

                {/* Divider */}
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:border-t after:border-gray-300">
                  <span className="bg-white px-2 text-gray-500 relative z-10">Or continue with</span>
                </div>

                {/* Login Link */}
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/admin-signin" className="underline">Sign in as admin</Link>
                </div>
              </Form>
            )}
          </Formik>

          {/* Image */}
          <div className="bg-muted relative hidden md:block">
            <img
              src="https://media.rerecruitment.com/uploads/2024/04/iStock-1466985705.jpg?w=2000&h=1333"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.8]"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
