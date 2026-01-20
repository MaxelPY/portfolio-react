import Header from "./Header"
import Footer from "./Footer"
import AnimatedBackground from "./AnimatedBackground"


function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
  <AnimatedBackground />
      <Header title="Portfolio de Axel" />

      <main className="mx-auto w-full max-w-4xl px-4 py-10">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
