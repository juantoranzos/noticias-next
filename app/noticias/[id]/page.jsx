"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import  noticias   from "/db/db";

export default function PageNoticiaId() {
  const { id } = useParams();
  const noticia = noticias.find(noticia => noticia.id === id);

  if (!noticia) return <div className="p-6">Noticia no encontrada</div>;

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{noticia.titulo}</h1>
      <p className="text-gray-600 mb-4">{noticia.fecha}</p>
      <Image src={noticia.imagen} alt={noticia.titulo} width={800} height={450} className="mb-4" />
      <p className="leading-7">{noticia.descripcion}</p>
    </main>
  );
}
