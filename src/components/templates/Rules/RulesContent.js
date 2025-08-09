"use client"
import { useContext } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy, Share2 } from "lucide-react"
import { colorMap, textColorMap } from "@/utils/constants"
import { ThemeColorContext } from "@/contexts/user-theme"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import ArticleBox from "@/components/modules/ArticleBox"

export default function RulesContent() {

    const { color } = useContext(ThemeColorContext)

    const dynamicColors = {
        primary: colorMap[color],
        primaryText: textColorMap[color],
        primaryLight:
            color === "red"
                ? "bg-red-50 dark:bg-red-950"
                : color === "green"
                    ? "bg-green-50 dark:bg-green-950"
                    : color === "purple"
                        ? "bg-purple-50 dark:bg-purple-950"
                        : "bg-blue-50 dark:bg-blue-950",
        primaryTextLight:
            color === "red"
                ? "text-red-700 dark:text-red-300"
                : color === "green"
                    ? "text-green-700 dark:text-green-300"
                    : color === "purple"
                        ? "text-purple-700 dark:text-purple-300"
                        : "text-blue-700 dark:text-blue-300",
        primarySolid:
            color === "red"
                ? "bg-red-600"
                : color === "green"
                    ? "bg-green-600"
                    : color === "purple"
                        ? "bg-purple-600"
                        : "bg-blue-600",
        primaryTextDark:
            color === "red"
                ? "text-red-600 dark:text-red-400"
                : color === "green"
                    ? "text-green-600 dark:text-green-400"
                    : color === "purple"
                        ? "text-purple-600 dark:text-purple-400"
                        : "text-blue-600 dark:text-blue-400",
        primaryHover:
            color === "red"
                ? "hover:bg-red-700"
                : color === "green"
                    ? "hover:bg-green-700"
                    : color === "purple"
                        ? "hover:bg-purple-700"
                        : "hover:bg-blue-700",
        primaryBg:
            color === "red"
                ? "bg-red-400"
                : color === "green"
                    ? "bg-green-400"
                    : color === "purple"
                        ? "bg-purple-400"
                        : "bg-blue-400",
        primaryBorder:
            color === "red"
                ? "border-red-400"
                : color === "green"
                    ? "border-green-400"
                    : color === "purple"
                        ? "border-purple-400"
                        : "border-blue-400",
        primaryBg100:
            color === "red"
                ? "bg-red-100"
                : color === "green"
                    ? "bg-green-100"
                    : color === "purple"
                        ? "bg-purple-100"
                        : "bg-blue-100",
        primaryText500:
            color === "red"
                ? "text-red-500"
                : color === "green"
                    ? "text-green-500"
                    : color === "purple"
                        ? "text-purple-500"
                        : "text-blue-500",
        primaryHoverText:
            color === "red"
                ? "hover:text-red-600"
                : color === "green"
                    ? "hover:text-green-600"
                    : color === "purple"
                        ? "hover:text-purple-600"
                        : "hover:text-blue-600",
    }

    const linkCopyHandler = () => {
        try {
            navigator.clipboard.writeText("job-pulse.com/streamline-workflow")
            // You can add toast notification here if needed
            console.log("Link Copied Successfully")
        } catch (error) {
            console.error("Copy failed")
        }
    }

    return (
        <div className="min-h-screen grid grid-cols-12 gap-6 mt-1 mb-8 mx-auto w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
            {/* Left Column - Main Content */}
            <div className="col-span-12 md:col-span-8 mt-8 bg-white dark:bg-gray-900 rounded-md">
                <div className="py-8 px-4">
                    {/* Hero Section */}
                    <div className="flex items-center gap-2">
                        <div
                            style={{ borderRadius: "30% 70% 70% 30% / 30% 32% 68% 70%" }}
                            className={`${dynamicColors.primaryBg} w-10 h-10`}
                        ></div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Streamline Your Workflow</h2>
                    </div>
                    <p className="px-10 mt-2 text-gray-600 dark:text-gray-300">
                        Boost productivity by 300% with our intelligent automation platform. Connect your tools, automate
                        repetitive tasks, and focus on what matters most. Our AI-powered workflows learn from your patterns and
                        help you achieve more in less time. Join thousands of teams who have already transformed their
                        productivity with our comprehensive solution.
                    </p>
                    <div className="px-10 mt-6 overflow-hidden">
                        <img
                            className="rounded-lg w-full"
                            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/job-search-im-unemployed-free-photo.jpg?w=600&quality=80"
                            alt="Workflow automation dashboard"
                        />
                    </div>

                    {/* Features Section */}
                    <div className="flex items-center gap-2 mt-8">
                        <div
                            style={{ borderRadius: "30% 70% 70% 30% / 30% 32% 68% 70%" }}
                            className={`${dynamicColors.primaryBg} w-10 h-10`}
                        ></div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Powerful Features</h2>
                    </div>
                    <p className="px-10 mt-2 text-gray-600 dark:text-gray-300">
                        Our platform offers everything you need to succeed. From smart automation that learns your patterns to
                        enterprise-grade security that protects your data, we've built a comprehensive solution for modern teams.
                        Advanced analytics provide insights into your workflow performance, while seamless integrations connect
                        all your favorite tools. Real-time collaboration features ensure your team stays synchronized and
                        productive, no matter where they work from.
                    </p>
                    <div className="px-10 mt-6 overflow-hidden">
                        <img
                            className="rounded-lg w-full"
                            src="https://blogr.adaremit.com/wp-content/uploads/2023/12/robot-hand-using-chatgpt-interface-scaled.jpg"
                            alt="Analytics dashboard"
                        />
                    </div>

                    {/* Benefits Section */}
                    <div className="flex items-center gap-2 mt-8">
                        <div
                            style={{ borderRadius: "30% 70% 70% 30% / 30% 32% 68% 70%" }}
                            className={`${dynamicColors.primaryBg} w-10 h-10`}
                        ></div>
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Why Choose StreamLine?</h2>
                    </div>
                    <p className="px-10 mt-2 text-gray-600 dark:text-gray-300">
                        Transform your business operations with our intelligent automation platform. Reduce manual tasks by 80%,
                        improve team collaboration, and scale your operations effortlessly. Our customers see positive ROI within
                        the first month, with comprehensive support and training to ensure your success. Whether you're a small
                        startup or a large enterprise, our flexible pricing and scalable features grow with your business needs.
                    </p>

                    {/* CTA Section */}
                    <div className="px-10 mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Ready to Get Started?</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Join thousands of teams who have already transformed their productivity. Start your free trial today!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className={`text-white ${dynamicColors.primarySolid} ${dynamicColors.primaryHover} text-lg px-8 py-6`}
                            >
                                Start Free Trial
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-lg px-8 py-6 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 dark:hover:text-white bg-white dark:bg-transparent"
                            >
                                Watch Demo
                            </Button>
                        </div>
                        <div className="flex items-center space-x-8 text-sm text-gray-600 dark:text-gray-300 mt-4">
                            <div className="flex items-center space-x-2">
                                <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                                <span>14-day free trial</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Check className={`h-4 w-4 ${dynamicColors.primaryTextDark}`} />
                                <span>No credit card required</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="col-span-12 md:col-span-4 mt-8 px-2 md:px-0">
                {/* Page Information Accordion */}
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    <AccordionItem className="px-4 bg-white dark:bg-gray-900 px-4 py-3 rounded-sm" value="item-1">
                        <AccordionTrigger className="hover:!no-underline">
                            <div className="flex items-center gap-3 text-[18px] text-gray-900 dark:text-white">
                                <Share2 className="w-6 h-6" />
                                Page Information
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <div
                                className={`text-lg ${dynamicColors.primaryBg100} ${dynamicColors.primaryText500} flex justify-between rounded-sm border-2 ${dynamicColors.primaryBorder} border-dotted mt-2 px-3 py-3`}
                            >
                                <p>job-pulse.com/streamline-workflow</p>
                                <Copy className="w-6 h-6 cursor-pointer" onClick={() => linkCopyHandler()} />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Related Articles Carousel */}
                <Carousel className="w-full max-w-xs mx-auto my-2">
                    <CarouselContent>

                        <ArticleBox title='Team Collaboration' description='Discover how real-time collaboration tools can transform your teams productivity and streamlinecommunication across all projects and departments' imageUrl='https://static.vecteezy.com/system/resources/thumbnails/007/448/146/small_2x/digital-transformation-technology-strategy-the-transformation-of-ideas-and-the-adoption-of-technology-in-business-in-the-digital-age-enhancing-global-business-capabilities-ai-photo.jpg' />
                        <ArticleBox title='Team Collaboration' description='Discover how real-time collaboration tools can transform your teams productivity and streamlinecommunication across all projects and departments' imageUrl='https://www.undp.org/sites/g/files/zskgke326/files/styles/scaled_image_large/public/2024-01/undp_digital_2.jpg?itok=ASXd4Xwq' />
                        <ArticleBox title='Team Collaboration' description='Discover how real-time collaboration tools can transform your teams productivity and streamlinecommunication across all projects and departments' imageUrl='https://lumenci.com/wp-content/uploads/2024/04/digital-image.webp' />

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </div>
    )
}
