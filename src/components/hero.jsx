import Card from "./card"

function Home({ user, photoSrc }) {
  return (
    <section id="home" className="scroll-mt-24 py-10">
      <Card>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          
          {/* Foto */}
          <div className="flex justify-center sm:justify-start">
            <img
              src={photoSrc}
              alt={`Foto de ${user.name}`}
              className="h-28 w-28 rounded-2xl object-cover ring-1 ring-slate-700"
            />
          </div>

          {/* Texto */}
          <div className="flex-1">
            <p className="text-sm text-slate-300">
              Hola, soy
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {user.name}
            </h2>

            <p className="mt-2 text-base text-slate-200">
              {user.role}
            </p>

            <p className="mt-4 text-sm text-slate-300">
              {user.description}
            </p>

            {/* Botones */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200"
                href="#projects"
              >
                Ver proyectos
              </a>

              <a
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-transparent px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900"
                href="#contact"
              >
                Contactarme
              </a>
            </div>
          </div>

        </div>
      </Card>
    </section>
  )
}

export default Home
