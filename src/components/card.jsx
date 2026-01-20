function Card({ children }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
      {children}
    </div>
  )
}

export default Card
