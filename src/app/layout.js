import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
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