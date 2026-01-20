function Header({ title = "Mi Portfolio" }) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/70 backdrop-blur">

      <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-4">
        
        <h1 className="text-base font-bold tracking-tight sm:text-lg">
          {title}
        </h1>

        <nav className="flex gap-4 text-sm text-slate-300">
          <a className="hover:text-white hover:underline" href="#home">
            Inicio
          </a>
          <a className="hover:text-white hover:underline" href="#about">
            Sobre mí
          </a>
          <a className="hover:text-white hover:underline" href="#projects">
            Proyectos
          </a>
          <a className="hover:text-white hover:underline" href="#contact">
            Contacto
          </a>
        </nav>

      </div>
    </header>
  )
}

export default Header
