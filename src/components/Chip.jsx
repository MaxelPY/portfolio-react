function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200">
      {children}
    </span>
  )
}

export default Chip
