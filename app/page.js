import Image from "next/image";
import Link from "next/link";
import noticias from "@/db/db";
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react";
import "./globals.css";

export const metadata = {
  title: "Pagina de inicio",
  description:
    "Encontra las últimas noticias y avances tecnológicos del año 2025, cubriendo ciencia, salud, medio ambiente y más.",
};
export default function Home() {
  const featuredArticle = noticias[0];
  const regularArticles = noticias.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-2 border-primary bg-card">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Newspaper className="h-8 w-8 text-primary" />
              <h1 className="newspaper-headline text-primary">
                El Diario Digital
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span className="newspaper-meta">
                {new Date().toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
          <p className="newspaper-body text-muted-foreground mt-2 max-w-2xl">
            Tu fuente confiable de noticias y análisis de actualidad
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {featuredArticle && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-accent"></div>
              <h2 className="newspaper-subheading text-primary">
                Noticia Destacada
              </h2>
            </div>

            <article className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredArticle.imagen || "/placeholder.svg"}
                      alt={featuredArticle.titulo}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="newspaper-meta">
                      {featuredArticle.fecha}
                    </span>
                  </div>
                  <h3 className="newspaper-subheading mb-4 text-card-foreground">
                    {featuredArticle.titulo}
                  </h3>
                  <p className="newspaper-body text-muted-foreground mb-6 line-clamp-3">
                    {featuredArticle.descripcion}
                  </p>
                  <Link
                    href={`/noticias/${featuredArticle.id}`}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                  >
                    Leer artículo completo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </section>
        )}

        <section>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-12 bg-accent"></div>
            <h2 className="newspaper-subheading text-primary">
              Últimas Noticias
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularArticles.map((noticia) => (
              <article
                key={noticia.id}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={noticia.imagen || "/placeholder.svg"}
                    alt={noticia.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="newspaper-meta">{noticia.fecha}</span>
                  </div>

                  <h3 className="newspaper-subheading text-lg mb-3 text-card-foreground line-clamp-2">
                    {noticia.titulo}
                  </h3>

                  <p className="newspaper-body text-muted-foreground mb-4 line-clamp-3">
                    {noticia.descripcion}
                  </p>

                  <Link
                    href={`/noticias/${noticia.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors duration-200 group"
                  >
                    Ver más
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Newspaper className="h-6 w-6" />
              <span className="font-semibold">El Diario Digital</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              © 2025 El Diario Digital. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
