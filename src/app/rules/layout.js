export const metadata = {
    title: 'My App',
    description: 'Sidebar and Header side by side',
  }
  
  export default function PositionsLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#f3f4f6]">
          {children}
        </div>
    )
  }
  