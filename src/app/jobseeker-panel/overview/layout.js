import { ThemeColorProvider } from "@/contexts/user-theme"

export default function JobSeekerPanelLayout({ children }) {
    return (
        <>
            <ThemeColorProvider>
                {children}
            </ThemeColorProvider>
        </>
    )
}