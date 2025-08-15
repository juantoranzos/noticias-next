 const noticias = [
  {
    id: 1,
    titulo: "Descubren nueva especie de ave en la selva amazónica",
    descripcion: "Investigadores identificaron un ave con plumaje vibrante y canto único, ampliando el catálogo de biodiversidad.",
    fecha: "2025-08-13",
    imagen: "https://eldiario.com/nitropack_static/DWpklAePbJBFiBKvuTtiGMLbtJlHUqWt/assets/images/optimized/rev-c091e5a/eldiario.com/wp-content/uploads/2025/06/tangara.jpg",
    enlace: "https://example.com/nueva-ave-amazonas",
    descripcionLarga: "Un equipo de ornitólogos ha descubierto una nueva especie de ave en la selva amazónica, conocida por su plumaje vibrante y su canto único. Este hallazgo no solo enriquece el catálogo de biodiversidad de la región, sino que también resalta la importancia de conservar estos ecosistemas frágiles."
  },
  {
    id: 2,
    titulo: "Avances en IA revolucionan la medicina",
    descripcion: "Un modelo de inteligencia artificial logra diagnosticar enfermedades con una precisión del 98%.",
    fecha: "2025-08-12",
    imagen: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    enlace: "https://example.com/ia-en-medicina",
    descripcionLarga: "Un nuevo modelo de inteligencia artificial ha demostrado una capacidad sin precedentes para diagnosticar enfermedades con una precisión del 98%. Este avance promete transformar la forma en que se diagnostican y tratan las enfermedades, ofreciendo a los médicos herramientas más efectivas para salvar vidas."
  },
  {
    id: 3,
    titulo: "Primer auto volador inicia pruebas en ciudad China",
    descripcion: "El vehículo ha recibido autorización para realizar pruebas en entornos urbanos controlados.",
    fecha: "2025-08-10",
    imagen: "https://images.unsplash.com/photo-1737256358854-f9144f964c4c?q=80&w=1241&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    enlace: "https://example.com/auto-volador",
    descripcionLarga: "Un innovador auto volador ha comenzado sus pruebas en una ciudad de China, marcando un hito en la movilidad urbana. Este vehículo, que combina tecnología de aviación y automoción, promete revolucionar el transporte en las ciudades, reduciendo la congestión y los tiempos de viaje."
  },
  {
    id: 4,
    titulo: "Nueva batería dura 10 veces más",
    descripcion: "Científicos desarrollan una batería que podría transformar la industria de autos eléctricos y smartphones.",
    fecha: "2025-08-08",
    imagen: "https://images.unsplash.com/photo-1605191737662-98ba90cb953e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    enlace: "https://example.com/bateria-larga-duracion",
    descripcionLarga: "Un equipo de científicos ha desarrollado una batería que promete durar diez veces más que las actuales. Este avance podría revolucionar la industria de los autos eléctricos y smartphones, permitiendo dispositivos con mayor autonomía y reduciendo la necesidad de recargas frecuentes."
  },
  {
    id: 5,
    titulo: "Ciudad subterránea descubierta en Turquía",
    descripcion: "Arqueólogos hallaron una ciudad oculta de más de 3,000 años de antigüedad.",
    fecha: "2025-08-05",
    imagen: "https://media.istockphoto.com/id/1932831049/photo/capadocia.jpg?s=2048x2048&w=is&k=20&c=nTPSQwu_O4DDYSpeB0dXvBkiemRXapDO_fuEe-IMUto=",
    enlace: "https://example.com/ciudad-subterranea",
    descripcionLarga: "Un equipo de arqueólogos ha descubierto una ciudad subterránea en Turquía que data de más de 3,000 años. Este hallazgo ofrece una visión fascinante de las civilizaciones antiguas y sus métodos de construcción, así como su adaptación a las condiciones geográficas y climáticas de la región."
  },
  {
    id: 6,
    titulo: "Récord mundial en energía solar",
    descripcion: "Una planta solar en Marruecos logra abastecer a 1 millón de hogares con energía limpia.",
    fecha: "2025-08-03",
    imagen: "https://ovacen.com/wp-content/uploads/2022/09/energia-solar-fotovoltaica.jpg",
    enlace: "https://example.com/energia-solar-record",
    descripcionLarga: "Una planta solar en Marruecos ha establecido un nuevo récord mundial al abastecer a 1 millón de hogares con energía limpia. Este logro resalta el potencial de la energía solar para combatir el cambio climático y reducir la dependencia de los combustibles fósiles, promoviendo un futuro más sostenible."
  },
  {
    id: 7,
    titulo: "Descubren exoplaneta potencialmente habitable",
    descripcion: "Astrónomos detectan un planeta a 120 años luz que podría albergar vida.",
    fecha: "2025-08-01",
    imagen: "https://images.unsplash.com/photo-1447433819943-74a20887a81e",
    enlace: "https://example.com/exoplaneta-habitable",
    descripcionLarga: "Un equipo de astrónomos ha descubierto un exoplaneta a 120 años luz de la Tierra que podría ser potencialmente habitable. Este hallazgo abre nuevas posibilidades en la búsqueda de vida extraterrestre y nos acerca un paso más a entender nuestro lugar en el universo." 
  },
  {
    id: 8,
    titulo: "Primer corazón impreso en 3D",
    descripcion: "Médicos logran imprimir un corazón humano funcional con tejido vivo.",
    fecha: "2025-07-29",
    imagen: "https://www.3dnatives.com/es/wp-content/uploads/sites/4/heart_cover.jpg",
    enlace: "https://example.com/corazon-3d",
    descripcionLarga: "Un equipo de médicos ha logrado imprimir en 3D un corazón humano funcional utilizando tejido vivo. Este avance podría revolucionar la medicina regenerativa y ofrecer nuevas esperanzas a pacientes con enfermedades cardíacas, permitiendo la creación de órganos personalizados para trasplantes."
  },
  {
    id: 9,
    titulo: "Gran barrera de coral muestra signos de recuperación",
    descripcion: "Biólogos marinos reportan un aumento en la salud del ecosistema coralino.",
    fecha: "2025-07-27",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/FBPSE675EVAE3LFJ5XQHDJI3IE.jpg",
    enlace: "https://example.com/barrera-coral",
    descripcionLarga: "Biólogos marinos han reportado signos de recuperación en la Gran Barrera de Coral, con un aumento notable en la salud del ecosistema coralino. Este desarrollo es alentador en la lucha contra el cambio climático y la conservación de la biodiversidad marina, destacando la importancia de los esfuerzos de conservación y restauración."
  },
  {
    id: 10,
    titulo: "Lanzan el tren más rápido del mundo",
    descripcion: "Japón presenta un tren capaz de alcanzar los 600 km/h en pruebas controladas.",
    fecha: "2025-07-25",
    imagen: "https://i.blogs.es/4339e9/maglev/840_560.jpeg",
    enlace: "https://example.com/tren-mas-rapido",
    descripcionLarga: "Japón ha presentado su nuevo tren maglev, capaz de alcanzar velocidades de hasta 600 km/h en pruebas controladas. Este avance en la tecnología ferroviaria promete revolucionar el transporte terrestre, reduciendo significativamente los tiempos de viaje y ofreciendo una alternativa más rápida y eficiente a los vuelos nacionales e internacionales."
  }
];
export default noticias;