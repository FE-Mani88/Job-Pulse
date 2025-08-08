"use client"
import React, { useContext } from "react"
import { ThemeColorContext } from "@/contexts/user-theme"
import {
    Mail,
    Linkedin,
    Twitter,
    Github,
    Zap,
    MapPin,
    Phone,
    Facebook,
    Instagram,
    Youtube,
} from "lucide-react"
import { textColorMap } from "@/utils/constants"
import Link from "next/link"

export default function Footer() {

    const { color } = useContext(ThemeColorContext)

    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-white">
            <div className="container px-4 md:px-6 py-16">
                <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <Zap className={`h-8 w-8 ${textColorMap[color]}`} />
                            <span className="text-2xl font-bold">Job Pulse</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Empowering teams worldwide with intelligent workflow automation. Making complex processes simple and
                            accessible for everyone.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Facebook">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-emerald-400 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="YouTube">
                                <Youtube className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Product</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-gray-300 transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 transition-colors">
                                    Integrations
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 transition-colors">
                                    API Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 transition-colors">
                                    Enterprise
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 transition-colors">
                                    Security
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-gray-300 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 transition-colors">
                                    Press
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 transition-colors">
                                    Partners
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold">Get in Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className={`h-5 w-5 ${textColorMap[color]} mt-0.5 flex-shrink-0`} />
                                <div className="text-gray-300">
                                    <p>123 Innovation Drive</p>
                                    <p>San Francisco, CA 94105</p>
                                    <p>United States</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className={`h-5 w-5 ${textColorMap[color]} mt-0.5 flex-shrink-0`} />
                                <Link href="tel:+1-555-123-4567" className="text-gray-300 transition-colors">
                                    +1 (555) 123-4567
                                </Link>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className={`h-5 w-5 ${textColorMap[color]} mt-0.5 flex-shrink-0`} />
                                <Link
                                    href="mailto:hello@jobpulse.com"
                                    className="text-gray-300 transition-colors"
                                >
                                    hello@jobpulse.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">© 2024 Job Pulse. All rights reserved.</div>
                        <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                            <Link href="#" className="text-gray-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-gray-400 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-gray-400 transition-colors">
                                Cookie Policy
                            </Link>
                            <Link href="#" className="text-gray-400 transition-colors">
                                GDPR
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
