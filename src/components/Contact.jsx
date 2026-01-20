import { useState } from "react"
import Section from "./Section"
import Card from "./Card"

function Contact({ contact }) {
  // 1) Estado para guardar lo que el usuario escribe
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // 2) Estado para feedback (si se envió)
  const [status, setStatus] = useState("idle")
  // status puede ser: "idle" | "success"

  // 3) Función que se ejecuta al enviar el formulario
  function handleSubmit(event) {
    event.preventDefault() // evita que la página se recargue

    // Validación mínima
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Completá nombre, email y mensaje.")
      return
    }

    // En un proyecto real: acá enviarías a un backend o Email API
    console.log("Formulario enviado:", { name, email, message })

    // Mostramos feedback
    setStatus("success")

    // Limpiamos el formulario
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <Section id="contact" title="Contacto">
      {/* Cards con links (los que ya tenías) */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-xs uppercase tracking-wide text-slate-400">Email</p>
          <a
            className="mt-2 block text-sm font-medium text-blue-400 hover:underline"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
        </Card>

        <Card>
          <p className="text-xs uppercase tracking-wide text-slate-400">GitHub</p>
          <a
            className="mt-2 block text-sm font-medium text-blue-400 hover:underline"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            Ver perfil
          </a>
        </Card>

        <Card>
          <p className="text-xs uppercase tracking-wide text-slate-400">LinkedIn</p>
          <a
            className="mt-2 block text-sm font-medium text-blue-400 hover:underline"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Ver perfil
          </a>
        </Card>
      </div>

      {/* Formulario */}
      <Card>
        <h3 className="text-lg font-semibold">Enviame un mensaje</h3>

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          {/* Nombre */}
          <div>
            <label className="block text-sm text-slate-300">Nombre</label>
            <input
              className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-slate-500"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-slate-300">Email</label>
            <input
              className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-slate-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-sm text-slate-300">Mensaje</label>
            <textarea
              className="mt-1 min-h-[120px] w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-slate-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="¿En qué puedo ayudarte?"
            />
          </div>

          {/* Botón */}
          <button
            className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200"
            type="submit"
          >
            Enviar
          </button>

          {/* Feedback */}
          {status === "success" && (
            <p className="text-sm text-green-400">
              ✅ Mensaje enviado (por ahora solo se imprime en consola).
            </p>
          )}
        </form>
      </Card>
    </Section>
  )
}

export default Contact
