function LinkButton({ href, variant = "primary", children }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-semibold transition"

  const styles = {
    primary: "bg-white text-slate-900 hover:bg-slate-200",
    secondary: "border border-slate-700 text-slate-100 hover:bg-slate-900"
  }

  return (
    <a
      className={`${base} ${styles[variant]}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

export default LinkButton
