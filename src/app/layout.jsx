// Layout base

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </div>
  )
}

export default Layout