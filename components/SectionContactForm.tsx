import { site } from "@/config";

export default function ContactForm() {
  const endpoint = site.formspree.endpoint;

  return (
    <form
      action={endpoint}
      method="POST"
      className="w-full max-w-md grid gap-4"
    >
      <input
        name="name"
        placeholder="Tu nombre"
        className="border px-3 py-3 rounded-lg bg-white shadow-sm placeholder-gray-400"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Tu email"
        className="border px-3 py-3 rounded-lg bg-white shadow-sm placeholder-gray-400"
        required
      />

      <textarea
        name="message"
        placeholder="Mensaje"
        rows={4}
        className="border px-3 py-3 rounded-lg bg-white shadow-sm placeholder-gray-400"
        required
      />

      <button
        type="submit"
        className="py-3 rounded-lg text-white font-semibold shadow"
        style={{ backgroundColor: site.colors.primary }}
      >
        Enviar
      </button>
    </form>
  );
}
