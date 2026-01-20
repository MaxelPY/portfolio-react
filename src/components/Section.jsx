function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          {title}
        </h2>

        <div className="mt-2 h-1 w-12 rounded-full bg-slate-700" />
      </div>

      <div className="space-y-4">
        {children}
      </div>

    </section>
  )
}

export default Section
