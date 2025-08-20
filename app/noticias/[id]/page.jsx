import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import noticias from "@/db/db"

export async function generateMetadata({params}){
  const { id } = params;
  const noticia = noticias.find(
    (n) => String(n.id) === id || String(n.uuid) === id
  );

  if (!noticia) {
    return {
      title: "Noticia no encontrada",
      description: "La noticia que buscas no existe.",
    };
  }

  return {
    title: noticia.titulo,
    description: noticia.descripcion,
  }; 
}
   
export default async function Page({ params }) {
  
  const { id } = params
  if (!id) {
    return notFound()
  }
  const noticia = noticias.find((n) => String(n.id) === id || String(n.uuid) === id)

  if (!noticia) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Noticia no encontrada</h1>
          <Link href="/" className="text-cyan-600 hover:text-cyan-700 underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b-4 border-cyan-600 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DG</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Diario Digital</h1>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Noticias de actualidad</p>
              </div>
            </Link>
            <div className="text-right">
              <p className="text-sm text-slate-600">
                {new Date().toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <nav className="mb-8">
          <Link href="/" className="text-cyan-600 hover:text-cyan-700 text-sm font-medium">
            ← Volver a noticias
          </Link>
        </nav>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-8 pt-8 pb-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                Noticia
              </span>
              <span className="text-slate-400">•</span>
              <time className="text-slate-600 text-sm font-medium">{noticia.fecha}</time>
            </div>

            <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-6">{noticia.titulo}</h1>

            <p className="text-xl text-slate-600 leading-relaxed font-light">{noticia.descripcion}</p>
          </div>

          <div className="relative">
            <Image
              src={noticia.imagen || "/placeholder.svg"}
              alt={noticia.titulo}
              width={800}
              height={450}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="px-8 py-8">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-slate-700 first-letter:text-6xl first-letter:font-bold first-letter:text-cyan-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {noticia.descripcionLarga}
              </p>
            </div>

            <div className="flex items-center justify-center my-12">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <div className="flex items-center space-x-4">
                  <span>📰 Diario Nacional</span>
                  <span>•</span>
                  <span>Publicado el {noticia.fecha}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-1 text-slate-600 hover:text-cyan-600 transition-colors">
                    <span>👍</span>
                    <span>Me gusta</span>
                  </button>
                  <button className="flex items-center space-x-1 text-slate-600 hover:text-cyan-600 transition-colors">
                    <span>📤</span>
                    <span>Compartir</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-12">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Otras noticias</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {noticias
              .filter((n) => n.id !== noticia.id)
              .slice(0, 2)
              .map((otraNoticia) => (
                <Link
                  key={otraNoticia.id}
                  href={`/noticias/${otraNoticia.id}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={otraNoticia.imagen || "/placeholder.svg"}
                      alt={otraNoticia.titulo}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors line-clamp-2">
                      {otraNoticia.titulo}
                    </h4>
                    <p className="text-sm text-slate-500 mt-2">{otraNoticia.fecha}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>

    </div>
  )
}
