function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-500/35 blur-3xl animate-floatSlow" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl animate-floatSlow2" />
    </div>
  )
}

export default AnimatedBackground
