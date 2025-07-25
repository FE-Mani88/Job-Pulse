import "../styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Job Pulse',
  icons: {
    icon: '/images/upscalemedia-transformed (1).jpeg'
  }
}