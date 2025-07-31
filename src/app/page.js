import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Zap,
  Shield,
  Users,
  BarChart3,
  Star,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NavigationMenuTest } from "@/components/templates/CompanyPanel/NavigationMenu"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-900 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-emerald-400" />
            <span className="text-2xl font-bold text-white">Job Pulse</span>
          </div>

          <NavigationMenuTest />

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="cursor-pointer hidden sm:inline-flex text-gray-200 hover:text-white hover:bg-gray-900">
              <Link href='/signin'>
              Sign In
              </Link>
            </Button>
            <Button className="cursor-pointer bg-emerald-600 text-white hover:bg-emerald-700">
              <Link href='/signin'>
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-black">
        <div className="container px-4 md:px-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-emerald-950 text-emerald-300 hover:bg-emerald-950">
                  🚀 New: AI-Powered Automation
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Streamline Your
                  <span className="text-emerald-400"> Workflow</span>
                </h1>
                <p className="text-xl text-gray-200 max-w-[600px]">
                  Boost productivity by 300% with our intelligent automation platform. Connect your tools, automate
                  repetitive tasks, and focus on what matters most.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-white bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6">
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-gray-700 text-gray-200 hover:bg-gray-900 hover:text-white bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1279104620/photo/top-view-of-a-white-desktop-concept-job-search.jpg?s=612x612&w=0&k=20&c=Ow_kvA2wQ4rLlqX_oFHgpjLb1JMKyPQKLOPzbu6w6qw="
                alt="StreamLine Dashboard"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-emerald-950 text-emerald-300">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-200 max-w-[800px] mx-auto">
              Powerful features designed to transform how you work and collaborate with your team.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-gray-800 bg-black shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-950 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-white">Smart Automation</CardTitle>
                <CardDescription className="text-gray-300">
                  AI-powered workflows that learn from your patterns and automate repetitive tasks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-800 bg-black shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-950 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-white">Enterprise Security</CardTitle>
                <CardDescription className="text-gray-300">
                  Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-800 bg-black shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-950 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-white">Team Collaboration</CardTitle>
                <CardDescription className="text-gray-300">
                  Real-time collaboration tools with advanced permission controls and team insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-800 bg-black shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-950 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-white">Advanced Analytics</CardTitle>
                <CardDescription className="text-gray-300">
                  Comprehensive reporting and analytics to track performance and optimize workflows.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-emerald-950 text-emerald-300">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Loved by thousands of teams
            </h2>
            <p className="text-xl text-gray-200 max-w-[800px] mx-auto">
              See what our customers have to say about their experience with StreamLine.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-gray-800 bg-gray-950 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-gray-200">
                  "StreamLine has completely transformed our workflow. We've reduced manual tasks by 80% and our team is
                  more productive than ever."
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Johnson"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-white">Sarah Johnson</p>
                    <p className="text-sm text-gray-300">CEO, TechCorp</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-gray-800 bg-gray-950 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-gray-200">
                  "The automation features are incredible. What used to take hours now happens automatically. Our ROI
                  was positive within the first month."
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Michael Chen"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-white">Michael Chen</p>
                    <p className="text-sm text-gray-300">CTO, StartupXYZ</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-gray-800 bg-gray-950 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base text-gray-200">
                  "Outstanding customer support and a platform that actually delivers on its promises. StreamLine is a
                  game-changer for our operations."
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Emily Rodriguez"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-white">Emily Rodriguez</p>
                    <p className="text-sm text-gray-300">Operations Director, GrowthCo</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-emerald-950 text-emerald-300">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-200 max-w-[800px] mx-auto">
              Choose the perfect plan for your team. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="border-gray-800 bg-black shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Starter</CardTitle>
                <CardDescription className="text-gray-300">Perfect for small teams getting started</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$29</span>
                  <span className="text-gray-300">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">Up to 5 team members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">100 automation runs/month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">Basic integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">Email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full border-gray-700 text-gray-200 hover:bg-gray-900 hover:text-white bg-transparent"
                  variant="outline"
                >
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-emerald-600 bg-black shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-white">Professional</CardTitle>
                <CardDescription className="text-gray-300">Best for growing teams and businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-gray-300">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">Up to 25 team members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">1,000 automation runs/month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">Advanced integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">Advanced analytics</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Free Trial</Button>
              </CardFooter>
            </Card>

            <Card className="border-gray-800 bg-black shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Enterprise</CardTitle>
                <CardDescription className="text-gray-300">For large organizations with custom needs</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">Custom</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">Unlimited team members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">Unlimited automation runs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-gray-300">Custom reporting</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full border-gray-700 text-gray-200 hover:bg-gray-900 hover:text-white bg-transparent"
                  variant="outline"
                >
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Ready to streamline your workflow?
            </h2>
            <p className="text-xl text-emerald-100">
              Join thousands of teams who have already transformed their productivity with StreamLine. Start your free
              trial today and see the difference in just 14 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-6 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-emerald-100">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Zap className="h-8 w-8 text-emerald-400" />
                <span className="text-2xl font-bold">StreamLine</span>
              </div>
              <p className="text-gray-300 max-w-xs">
                Streamline your workflow and boost productivity with our intelligent automation platform.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-emerald-300 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-300 transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-300 transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-300 transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-emerald-300 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-300 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-300 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-300 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@streamline.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© {new Date().getFullYear()} StreamLine. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-300 hover:text-emerald-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-emerald-300 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-300 hover:text-emerald-300 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
