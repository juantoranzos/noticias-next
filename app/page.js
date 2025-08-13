"use client";

import Image from "next/image";
import Link from "next/link";
import noticias from "@/db/db";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Noticias</h1>
      <section className="grid col-auto sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {noticias.map((n) => (
          <article
            key={n.id}
            className="max-w-xl bg-silver-100 p-4 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold">{n.titulo}</h2>
            <p>{n.descripcion}</p>
            <p className="text-sm text-gray-500">{n.fecha}</p>

            <Image src={n.imagen} alt={n.titulo} width={400} height={250} />

            <div className="mt-2">
              <Link
                href={`/noticia/${n.id}`}
                className="text-blue-600 underline"
              >
                Ver más
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
