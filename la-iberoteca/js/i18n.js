(function () {
  "use strict";

  var STORAGE_KEY = "iberoteca-lang";
  var DEFAULT_LANG = "es";
  var SUPPORTED = ["es", "ca", "en"];

  var translations = {
    es: {
      "doc.title": "La Iberoteca",
      "skip": "Saltar al contenido",
      "pre.sub": "Tasca ibérica · Barberà del Vallès",

      "nav.home": "Inicio",
      "nav.menu": "Carta",
      "nav.about": "Conócenos",
      "nav.contact": "Contacto",
      "cta.reserve": "Reservar",
      "cta.reserveLong": "Reservar mesa",
      "cta.call": "Llamar",

      "hero.eyebrow": "Tasca ibérica en Barberà del Vallès",
      "hero.title": "Sabor ibérico,<br><em>alma de tasca</em> moderna",
      "hero.sub": "Croquetas gourmet, hamburguesas de carne jugosa y producto ibérico en el corazón de Barberà del Vallès.",
      "hero.cta1": "Reservar mesa",
      "hero.cta2": "Ver la carta",
      "hero.scroll": "Desliza",

      "marquee.1": "Croquetas gourmet",
      "marquee.2": "Tapeo ibérico",
      "marquee.3": "Hamburguesas jugosas",
      "marquee.4": "Cerveza bien fría",
      "marquee.5": "Producto de proximidad",
      "marquee.6": "Ambiente de tasca",

      "intro.eyebrow": "La casa",
      "intro.title": "Una tasca joven que sabe a <em>toda la vida</em>",
      "intro.p1": "La Iberoteca nació en 2024 con una idea sencilla, juntar el tapeo ibérico de siempre con un punto moderno que enamora a Barberà del Vallès desde el primer día.",
      "intro.p2": "Croquetas hechas al momento, hamburguesas de carne jugosa y una buena cerveza fría, en un ambiente de tasca tradicional donde se viene a disfrutar y a repetir.",
      "intro.chip": "4,8 en Google",
      "intro.f1.title": "Croquetas de autor",
      "intro.f1.text": "Cremosas por dentro y crujientes por fuera, en varias versiones que no encontrarás en otro sitio.",
      "intro.f2.title": "Hamburguesas jugosas",
      "intro.f2.text": "Carne jugosa y bien completas, de las que te hacen volver.",
      "intro.f3.title": "Producto ibérico",
      "intro.f3.text": "Selección ibérica y de proximidad para tapear como toca.",

      "dishes.eyebrow": "Imprescindibles",
      "dishes.title": "Lo que no te puedes perder",
      "dishes.lead": "Una muestra de lo que hace que Barberà hable de nosotros.",
      "dishes.cta": "Ver carta completa",
      "dish.1.tag": "La estrella",
      "dish.1.name": "Croquetas de rabo de toro",
      "dish.1.desc": "Cremosas por dentro, crujientes por fuera, con rabo de toro guisado a fuego lento.",
      "dish.2.tag": "De la casa",
      "dish.2.name": "Patatas Iberoteca",
      "dish.2.desc": "Nuestras patatas de la casa, pensadas para compartir en la mesa.",
      "dish.3.tag": "Imprescindible",
      "dish.3.name": "Hamburguesa jugosa",
      "dish.3.desc": "Bien completa y con la carne en su punto, una de las favoritas de la casa.",

      "stats.eyebrow": "En números",
      "stats.title": "Por qué Barberà ya nos tiene en el mapa",
      "stat.1.label": "Valoración media en Google",
      "stat.2.label": "Croquetas de autor distintas",
      "stat.3.label": "Producto ibérico y de proximidad",
      "stat.4.label": "El año en que lo cambiamos todo",

      "gallery.eyebrow": "El ambiente",
      "gallery.title": "Tasca por fuera, fiesta por dentro",
      "gallery.lead": "Barra, mesa y buen rollo, el sitio ideal para tapear con los tuyos en Barberà del Vallès.",

      "reviews.eyebrow": "Lo dicen ellos",
      "reviews.title": "Más de 600 reseñas, una media de 4,8",
      "reviews.ratingCount": "Más de 600 reseñas en Google",
      "review.1.text": "La comida es increíble. Las hamburguesas vienen bien completas, con la carne jugosa y perfecta.",
      "review.1.name": "Cliente de Google",
      "review.1.source": "Reseña verificada de Google",
      "review.2.text": "El menjar està molt bo i, a més, el servei és atent, amable i proper.",
      "review.2.name": "Lydia R.",
      "review.2.source": "Reseña verificada de Google",
      "review.3.text": "Brutals les patates, molt originals. Racions grans. Repetirem!",
      "review.3.name": "Miquel C.",
      "review.3.source": "Reseña verificada de Google",
      "review.pending": "Espacio reservado para más reseñas reales de Google.",
      "reviews.cta": "Ver todas en Google",

      "homecta.eyebrow": "¿Te vienes?",
      "homecta.title": "Reserva tu mesa y ven a tapear",
      "homecta.text": "Resérvanos por teléfono y guárdate sitio en la tasca que todo Barberà recomienda.",
      "homecta.btn1": "Reservar por teléfono",
      "homecta.btn2": "Cómo llegar",

      "menu.hero.eyebrow": "La carta",
      "menu.hero.title": "Carta",
      "menu.hero.lead": "Croquetas gourmet, tapeo ibérico, hamburguesas jugosas y una buena selección de cervezas. Para compartir en Barberà del Vallès.",
      "menu.bc.home": "Inicio",
      "menu.bc.here": "Carta",
      "filter.all": "Todo",
      "filter.croquetas": "Croquetas",
      "filter.picar": "Para picar",
      "filter.burgers": "Hamburguesas",
      "filter.drinks": "Bebidas",
      "group.croquetas.title": "Croquetas gourmet",
      "group.croquetas.desc": "Nuestra especialidad, cremosas y recién hechas.",
      "group.picar.title": "Para picar",
      "group.picar.desc": "Tapas y raciones para compartir en el centro de la mesa.",
      "group.burgers.title": "Hamburguesas",
      "group.burgers.desc": "Carne jugosa y bien completas.",
      "group.drinks.title": "Cervezas y bebidas",
      "group.drinks.desc": "Buena selección de cervezas para acompañar el tapeo.",
      "group.pendingPrice": "Precios por confirmar",
      "group.pendingItems": "Carta por completar con el negocio",
      "price.tbd": "—",

      "m.croq1.name": "Croquetas de rabo de toro",
      "m.croq1.desc": "Rabo de toro guisado a fuego lento en bechamel fina.",
      "m.croq2.name": "Croquetas de gambón",
      "m.croq2.desc": "Melosas y con todo el sabor del mar.",
      "m.croq3.name": "Croquetas de chorizo al huevo",
      "m.croq3.desc": "Chorizo y huevo en una croqueta que sorprende.",
      "m.croq4.name": "Croquetas de pollo",
      "m.croq4.desc": "La clásica de siempre, cremosa y reconfortante.",
      "m.croq5.name": "Croquetas de jamón",
      "m.croq5.desc": "Jamón en una bechamel fina y bien dorada.",
      "m.pic1.name": "Morcilla con manzana",
      "m.pic1.desc": "Morcilla a la plancha con manzana, dulce y sabrosa.",
      "m.pic2.name": "Patatas con cheddar y bacon",
      "m.pic2.desc": "Patatas con cheddar fundido y bacon crujiente.",
      "m.pic3.name": "Patatas Iberoteca",
      "m.pic3.desc": "Nuestras patatas de la casa, para compartir.",
      "m.burg1.name": "Hamburguesas de la casa",
      "m.burg1.desc": "Carne jugosa y bien completas. Nombres y variedades por confirmar.",
      "m.drink1.name": "Selección de cervezas",
      "m.drink1.desc": "Buena carta de cervezas. Referencias por confirmar.",
      "badge.star": "Top",
      "badge.new": "Nuevo",

      "menu.cta.title": "¿Te lo vas a perder?",
      "menu.cta.text": "Reserva tu mesa y ven a probarlo en Barberà del Vallès.",
      "menu.cta.btn": "Reservar por teléfono",

      "about.hero.eyebrow": "Nuestra historia",
      "about.hero.title": "Conócenos",
      "about.hero.lead": "Una tasca joven con alma de toda la vida, nacida en Barberà del Vallès para quedarse.",
      "about.bc.home": "Inicio",
      "about.bc.here": "Conócenos",
      "about.story.eyebrow": "La historia",
      "about.story.title": "De un sueño a la tasca de moda en Barberà",
      "about.story.p1": "Abrimos en 2024 con ganas de recuperar el tapeo de siempre y darle una vuelta. En muy poco tiempo, La Iberoteca se convirtió en uno de los sitios de los que todo Barberà del Vallès habla.",
      "about.story.p2": "Nos define el producto ibérico, las croquetas hechas al momento y unas hamburguesas que no fallan. Todo en un ambiente de tasca tradicional con un punto moderno.",
      "about.story.p3": "Venimos a quedarnos, y a que cada visita te sepa a casa.",
      "about.values.eyebrow": "Lo que nos mueve",
      "about.values.title": "Tres cosas que no negociamos",
      "value.1.title": "Producto",
      "value.1.text": "Selección ibérica y de proximidad, porque el sabor empieza en la materia prima.",
      "value.2.title": "Cocina de tasca",
      "value.2.text": "Recetas de siempre con un punto actual, hechas al momento y sin prisa.",
      "value.3.title": "Ambiente",
      "value.3.text": "Tasca tradicional con buen rollo, para venir, tapear y repetir.",
      "about.local.eyebrow": "El local",
      "about.local.title": "Así se vive La Iberoteca",
      "about.local.lead": "Barra para el vermut, mesa para el tapeo y un ambiente que se contagia.",
      "about.cta.title": "Ven a conocernos en persona",
      "about.cta.text": "Te guardamos mesa en el centro de Barberà del Vallès.",
      "about.cta.btn": "Reservar por teléfono",

      "contact.hero.eyebrow": "Reservas y contacto",
      "contact.hero.title": "Contacto",
      "contact.hero.lead": "Resérvanos por teléfono o pásate a vernos. Estamos en el centro de Barberà del Vallès.",
      "contact.bc.home": "Inicio",
      "contact.bc.here": "Contacto",
      "info.address.label": "Dirección",
      "info.phone.label": "Teléfono",
      "info.hours.label": "Horario",
      "info.social.label": "Síguenos",
      "info.hours.note": "Horario por confirmar. Llámanos y te lo decimos al momento.",
      "hours.mon": "Lunes",
      "hours.tue": "Martes",
      "hours.wed": "Miércoles",
      "hours.thu": "Jueves",
      "hours.fri": "Viernes",
      "hours.sat": "Sábado",
      "hours.sun": "Domingo",
      "hours.tbd": "Por confirmar",
      "contact.map.title": "Mapa de La Iberoteca en Barberà del Vallès",
      "form.title": "Escríbenos",
      "form.lead": "¿Una reserva grande o un evento? Cuéntanoslo y te respondemos.",
      "form.name.label": "Nombre",
      "form.name.ph": "Tu nombre",
      "form.email.label": "Email",
      "form.email.ph": "tu@email.com",
      "form.phone.label": "Teléfono",
      "form.phone.ph": "600 00 00 00",
      "form.people.label": "Personas",
      "form.people.ph": "2",
      "form.message.label": "Mensaje",
      "form.message.ph": "Día, hora y lo que necesites...",
      "form.submit": "Enviar",
      "form.note": "Este formulario es una demostración. Para reservar al momento, llámanos.",
      "floating.label": "Reservar",

      "footer.tagline": "Tasca ibérica, croquetas gourmet y hamburguesas en Barberà del Vallès.",
      "footer.col1": "Explora",
      "footer.col2": "Visítanos",
      "footer.col3": "Síguenos",
      "footer.hoursNote": "Horario por confirmar",
      "footer.rights": "© 2026 La Iberoteca · Todos los derechos reservados.",
      "footer.legal": "Aviso legal",
      "footer.privacy": "Privacidad",

      "croq.eyebrow": "La especialidad",
      "croq.title": "Cinco croquetas, cero excusas",
      "croq.lead": "Cremosas, recién hechas y en versiones que no vas a encontrar en otra tasca de Barberà.",
      "hswipe.hint": "Desliza para ver más →",
      "sig.eyebrow": "Lo nuestro",
      "sig.title": "Platos que nos han hecho un nombre",
      "sig.1.tag": "La estrella",
      "sig.1.name": "Croquetas de rabo de toro",
      "sig.1.desc": "Rabo de toro guisado a fuego lento envuelto en una bechamel fina y crujiente. La que todo el mundo repite.",
      "sig.2.tag": "Imprescindible",
      "sig.2.name": "Hamburguesas de la casa",
      "sig.2.desc": "Carne jugosa y bien completas, en su punto. De esas que se piden sin mirar la carta.",
      "sig.3.tag": "De la tierra",
      "sig.3.name": "Tapeo ibérico",
      "sig.3.desc": "Producto ibérico y de proximidad para compartir en el centro de la mesa, como manda la tasca.",

      "builder.eyebrow": "Juega con la comida",
      "builder.title": "Monta tu hamburguesa",
      "builder.lead": "Añade y quita ingredientes y mira cómo queda. Luego resérvala y te la montamos igual.",
      "builder.base": "Pan brioche y carne jugosa van de serie. Tú pones el resto.",
      "builder.yourburger": "Tu creación",
      "builder.count": "ingredientes",
      "builder.reset": "Empezar de cero",
      "builder.cta": "Reservar y pedirla así",
      "builder.note": "Creación para enseñar en el restaurante. La carta final la define el negocio.",
      "builder.msg": "Hola, quiero reservar en La Iberoteca y probar mi hamburguesa",
      "builder.tier1": "La Clásica",
      "builder.tier2": "La Iberoteca",
      "builder.tier3": "La Bestia",
      "b.pan": "Pan brioche",
      "b.carne": "Carne jugosa",
      "b.doble": "Doble carne",
      "b.cheddar": "Cheddar fundido",
      "b.bacon": "Bacon crujiente",
      "b.huevo": "Huevo frito",
      "b.cebolla": "Cebolla caramelizada",
      "b.tomate": "Tomate",
      "b.lechuga": "Lechuga",
      "b.salsa": "Salsa de la casa"
    },

    ca: {
      "doc.title": "La Iberoteca",
      "skip": "Vés al contingut",
      "pre.sub": "Tasca ibèrica · Barberà del Vallès",

      "nav.home": "Inici",
      "nav.menu": "Carta",
      "nav.about": "Coneix-nos",
      "nav.contact": "Contacte",
      "cta.reserve": "Reservar",
      "cta.reserveLong": "Reservar taula",
      "cta.call": "Trucar",

      "hero.eyebrow": "Tasca ibèrica a Barberà del Vallès",
      "hero.title": "Sabor ibèric,<br><em>ànima de tasca</em> moderna",
      "hero.sub": "Croquetes gourmet, hamburgueses de carn sucosa i producte ibèric al cor de Barberà del Vallès.",
      "hero.cta1": "Reservar taula",
      "hero.cta2": "Veure la carta",
      "hero.scroll": "Llisca",

      "marquee.1": "Croquetes gourmet",
      "marquee.2": "Tapeig ibèric",
      "marquee.3": "Hamburgueses sucoses",
      "marquee.4": "Cervesa ben freda",
      "marquee.5": "Producte de proximitat",
      "marquee.6": "Ambient de tasca",

      "intro.eyebrow": "La casa",
      "intro.title": "Una tasca jove que sap a <em>tota la vida</em>",
      "intro.p1": "La Iberoteca va néixer el 2024 amb una idea senzilla, unir el tapeig ibèric de sempre amb un punt modern que enamora Barberà del Vallès des del primer dia.",
      "intro.p2": "Croquetes fetes al moment, hamburgueses de carn sucosa i una bona cervesa freda, en un ambient de tasca tradicional on es ve a gaudir i a repetir.",
      "intro.chip": "4,8 a Google",
      "intro.f1.title": "Croquetes d'autor",
      "intro.f1.text": "Cremoses per dins i cruixents per fora, en diverses versions que no trobaràs enlloc més.",
      "intro.f2.title": "Hamburgueses sucoses",
      "intro.f2.text": "Carn sucosa i ben completes, de les que et fan tornar.",
      "intro.f3.title": "Producte ibèric",
      "intro.f3.text": "Selecció ibèrica i de proximitat per tapejar com cal.",

      "dishes.eyebrow": "Imprescindibles",
      "dishes.title": "El que no et pots perdre",
      "dishes.lead": "Una mostra del que fa que Barberà parli de nosaltres.",
      "dishes.cta": "Veure carta completa",
      "dish.1.tag": "L'estrella",
      "dish.1.name": "Croquetas de rabo de toro",
      "dish.1.desc": "Cremoses per dins, cruixents per fora, amb cua de bou cuinada a foc lent.",
      "dish.2.tag": "De la casa",
      "dish.2.name": "Patatas Iberoteca",
      "dish.2.desc": "Les nostres patates de la casa, pensades per compartir a taula.",
      "dish.3.tag": "Imprescindible",
      "dish.3.name": "Hamburguesa sucosa",
      "dish.3.desc": "Ben completa i amb la carn al punt, una de les preferides de la casa.",

      "stats.eyebrow": "En números",
      "stats.title": "Per què Barberà ja ens té al mapa",
      "stat.1.label": "Valoració mitjana a Google",
      "stat.2.label": "Croquetes d'autor diferents",
      "stat.3.label": "Producte ibèric i de proximitat",
      "stat.4.label": "L'any que ho vam canviar tot",

      "gallery.eyebrow": "L'ambient",
      "gallery.title": "Tasca per fora, festa per dins",
      "gallery.lead": "Barra, taula i bon rotllo, el lloc ideal per tapejar amb els teus a Barberà del Vallès.",

      "reviews.eyebrow": "Ho diuen ells",
      "reviews.title": "Més de 600 ressenyes, una mitjana de 4,8",
      "reviews.ratingCount": "Més de 600 ressenyes a Google",
      "review.1.text": "El menjar és increïble. Les hamburgueses vénen ben completes, amb la carn sucosa i perfecta.",
      "review.1.name": "Client de Google",
      "review.1.source": "Ressenya verificada de Google",
      "review.2.text": "El menjar està molt bo i, a més, el servei és atent, amable i proper.",
      "review.2.name": "Lydia R.",
      "review.2.source": "Ressenya verificada de Google",
      "review.3.text": "Brutals les patates, molt originals. Racions grans. Repetirem!",
      "review.3.name": "Miquel C.",
      "review.3.source": "Ressenya verificada de Google",
      "review.pending": "Espai reservat per a més ressenyes reals de Google.",
      "reviews.cta": "Veure-les totes a Google",

      "homecta.eyebrow": "T'hi apuntes?",
      "homecta.title": "Reserva taula i vine a tapejar",
      "homecta.text": "Reserva'ns per telèfon i guarda't lloc a la tasca que tot Barberà recomana.",
      "homecta.btn1": "Reservar per telèfon",
      "homecta.btn2": "Com arribar",

      "menu.hero.eyebrow": "La carta",
      "menu.hero.title": "Carta",
      "menu.hero.lead": "Croquetes gourmet, tapeig ibèric, hamburgueses sucoses i una bona selecció de cerveses. Per compartir a Barberà del Vallès.",
      "menu.bc.home": "Inici",
      "menu.bc.here": "Carta",
      "filter.all": "Tot",
      "filter.croquetas": "Croquetes",
      "filter.picar": "Per picar",
      "filter.burgers": "Hamburgueses",
      "filter.drinks": "Begudes",
      "group.croquetas.title": "Croquetes gourmet",
      "group.croquetas.desc": "La nostra especialitat, cremoses i acabades de fer.",
      "group.picar.title": "Per picar",
      "group.picar.desc": "Tapes i racions per compartir al centre de la taula.",
      "group.burgers.title": "Hamburgueses",
      "group.burgers.desc": "Carn sucosa i ben completes.",
      "group.drinks.title": "Cerveses i begudes",
      "group.drinks.desc": "Bona selecció de cerveses per acompanyar el tapeig.",
      "group.pendingPrice": "Preus per confirmar",
      "group.pendingItems": "Carta per completar amb el negoci",
      "price.tbd": "—",

      "m.croq1.name": "Croquetas de rabo de toro",
      "m.croq1.desc": "Cua de bou cuinada a foc lent en beixamel fina.",
      "m.croq2.name": "Croquetas de gambón",
      "m.croq2.desc": "Meloses i amb tot el sabor del mar.",
      "m.croq3.name": "Croquetas de chorizo al huevo",
      "m.croq3.desc": "Xoriço i ou en una croqueta que sorprèn.",
      "m.croq4.name": "Croquetas de pollo",
      "m.croq4.desc": "La clàssica de sempre, cremosa i reconfortant.",
      "m.croq5.name": "Croquetas de jamón",
      "m.croq5.desc": "Pernil en una beixamel fina i ben daurada.",
      "m.pic1.name": "Morcilla con manzana",
      "m.pic1.desc": "Botifarra negra a la planxa amb poma, dolça i saborosa.",
      "m.pic2.name": "Patatas con cheddar y bacon",
      "m.pic2.desc": "Patates amb cheddar fos i bacó cruixent.",
      "m.pic3.name": "Patatas Iberoteca",
      "m.pic3.desc": "Les nostres patates de la casa, per compartir.",
      "m.burg1.name": "Hamburgueses de la casa",
      "m.burg1.desc": "Carn sucosa i ben completes. Noms i varietats per confirmar.",
      "m.drink1.name": "Selecció de cerveses",
      "m.drink1.desc": "Bona carta de cerveses. Referències per confirmar.",
      "badge.star": "Top",
      "badge.new": "Nou",

      "menu.cta.title": "T'ho perdràs?",
      "menu.cta.text": "Reserva taula i vine a tastar-ho a Barberà del Vallès.",
      "menu.cta.btn": "Reservar per telèfon",

      "about.hero.eyebrow": "La nostra història",
      "about.hero.title": "Coneix-nos",
      "about.hero.lead": "Una tasca jove amb ànima de tota la vida, nascuda a Barberà del Vallès per quedar-s'hi.",
      "about.bc.home": "Inici",
      "about.bc.here": "Coneix-nos",
      "about.story.eyebrow": "La història",
      "about.story.title": "D'un somni a la tasca de moda a Barberà",
      "about.story.p1": "Vam obrir el 2024 amb ganes de recuperar el tapeig de sempre i donar-li una volta. En molt poc temps, La Iberoteca es va convertir en un dels llocs dels quals tot Barberà del Vallès parla.",
      "about.story.p2": "Ens defineix el producte ibèric, les croquetes fetes al moment i unes hamburgueses que no fallen. Tot en un ambient de tasca tradicional amb un punt modern.",
      "about.story.p3": "Venim per quedar-nos, i perquè cada visita et sàpiga a casa.",
      "about.values.eyebrow": "El que ens mou",
      "about.values.title": "Tres coses que no negociem",
      "value.1.title": "Producte",
      "value.1.text": "Selecció ibèrica i de proximitat, perquè el sabor comença a la matèria primera.",
      "value.2.title": "Cuina de tasca",
      "value.2.text": "Receptes de sempre amb un punt actual, fetes al moment i sense pressa.",
      "value.3.title": "Ambient",
      "value.3.text": "Tasca tradicional amb bon rotllo, per venir, tapejar i repetir.",
      "about.local.eyebrow": "El local",
      "about.local.title": "Així es viu La Iberoteca",
      "about.local.lead": "Barra per al vermut, taula per al tapeig i un ambient que s'encomana.",
      "about.cta.title": "Vine a conèixer-nos en persona",
      "about.cta.text": "Et guardem taula al centre de Barberà del Vallès.",
      "about.cta.btn": "Reservar per telèfon",

      "contact.hero.eyebrow": "Reserves i contacte",
      "contact.hero.title": "Contacte",
      "contact.hero.lead": "Reserva'ns per telèfon o passa a veure'ns. Som al centre de Barberà del Vallès.",
      "contact.bc.home": "Inici",
      "contact.bc.here": "Contacte",
      "info.address.label": "Adreça",
      "info.phone.label": "Telèfon",
      "info.hours.label": "Horari",
      "info.social.label": "Segueix-nos",
      "info.hours.note": "Horari per confirmar. Truca'ns i t'ho diem al moment.",
      "hours.mon": "Dilluns",
      "hours.tue": "Dimarts",
      "hours.wed": "Dimecres",
      "hours.thu": "Dijous",
      "hours.fri": "Divendres",
      "hours.sat": "Dissabte",
      "hours.sun": "Diumenge",
      "hours.tbd": "Per confirmar",
      "contact.map.title": "Mapa de La Iberoteca a Barberà del Vallès",
      "form.title": "Escriu-nos",
      "form.lead": "Una reserva gran o un esdeveniment? Explica'ns-ho i et responem.",
      "form.name.label": "Nom",
      "form.name.ph": "El teu nom",
      "form.email.label": "Email",
      "form.email.ph": "tu@email.com",
      "form.phone.label": "Telèfon",
      "form.phone.ph": "600 00 00 00",
      "form.people.label": "Persones",
      "form.people.ph": "2",
      "form.message.label": "Missatge",
      "form.message.ph": "Dia, hora i el que necessitis...",
      "form.submit": "Enviar",
      "form.note": "Aquest formulari és una demostració. Per reservar al moment, truca'ns.",
      "floating.label": "Reservar",

      "footer.tagline": "Tasca ibèrica, croquetes gourmet i hamburgueses a Barberà del Vallès.",
      "footer.col1": "Explora",
      "footer.col2": "Visita'ns",
      "footer.col3": "Segueix-nos",
      "footer.hoursNote": "Horari per confirmar",
      "footer.rights": "© 2026 La Iberoteca · Tots els drets reservats.",
      "footer.legal": "Avís legal",
      "footer.privacy": "Privacitat",

      "croq.eyebrow": "L'especialitat",
      "croq.title": "Cinc croquetes, zero excuses",
      "croq.lead": "Cremoses, acabades de fer i en versions que no trobaràs en cap altra tasca de Barberà.",
      "hswipe.hint": "Llisca per veure'n més →",
      "sig.eyebrow": "El que és nostre",
      "sig.title": "Plats que ens han fet un nom",
      "sig.1.tag": "L'estrella",
      "sig.1.name": "Croquetas de rabo de toro",
      "sig.1.desc": "Cua de bou cuinada a foc lent embolcallada en una beixamel fina i cruixent. La que tothom repeteix.",
      "sig.2.tag": "Imprescindible",
      "sig.2.name": "Hamburgueses de la casa",
      "sig.2.desc": "Carn sucosa i ben completes, al punt. D'aquelles que es demanen sense mirar la carta.",
      "sig.3.tag": "De la terra",
      "sig.3.name": "Tapeig ibèric",
      "sig.3.desc": "Producte ibèric i de proximitat per compartir al centre de la taula, com mana la tasca.",

      "builder.eyebrow": "Juga amb el menjar",
      "builder.title": "Monta la teva hamburguesa",
      "builder.lead": "Afegeix i treu ingredients i mira com queda. Després reserva-la i te la muntem igual.",
      "builder.base": "Pa brioix i carn sucosa van de sèrie. Tu poses la resta.",
      "builder.yourburger": "La teva creació",
      "builder.count": "ingredients",
      "builder.reset": "Començar de zero",
      "builder.cta": "Reservar i demanar-la així",
      "builder.note": "Creació per ensenyar al restaurant. La carta final la defineix el negoci.",
      "builder.msg": "Hola, vull reservar a La Iberoteca i provar la meva hamburguesa",
      "builder.tier1": "La Clàssica",
      "builder.tier2": "La Iberoteca",
      "builder.tier3": "La Bèstia",
      "b.pan": "Pa brioix",
      "b.carne": "Carn sucosa",
      "b.doble": "Doble carn",
      "b.cheddar": "Cheddar fos",
      "b.bacon": "Bacó cruixent",
      "b.huevo": "Ou ferrat",
      "b.cebolla": "Ceba caramel·litzada",
      "b.tomate": "Tomàquet",
      "b.lechuga": "Enciam",
      "b.salsa": "Salsa de la casa"
    },

    en: {
      "doc.title": "La Iberoteca",
      "skip": "Skip to content",
      "pre.sub": "Iberian tavern · Barberà del Vallès",

      "nav.home": "Home",
      "nav.menu": "Menu",
      "nav.about": "About",
      "nav.contact": "Contact",
      "cta.reserve": "Book",
      "cta.reserveLong": "Book a table",
      "cta.call": "Call",

      "hero.eyebrow": "Iberian tavern in Barberà del Vallès",
      "hero.title": "Iberian flavour,<br><em>a modern tavern</em> soul",
      "hero.sub": "Gourmet croquettes, juicy burgers and Iberian produce in the heart of Barberà del Vallès.",
      "hero.cta1": "Book a table",
      "hero.cta2": "See the menu",
      "hero.scroll": "Scroll",

      "marquee.1": "Gourmet croquettes",
      "marquee.2": "Iberian tapas",
      "marquee.3": "Juicy burgers",
      "marquee.4": "Ice-cold beer",
      "marquee.5": "Local produce",
      "marquee.6": "Tavern vibes",

      "intro.eyebrow": "The house",
      "intro.title": "A young tavern that tastes like <em>the real thing</em>",
      "intro.p1": "La Iberoteca was born in 2024 with one simple idea, to pair timeless Iberian tapas with a modern twist that has won over Barberà del Vallès from day one.",
      "intro.p2": "Croquettes made to order, juicy burgers and a good cold beer, in a traditional tavern atmosphere where people come to enjoy and to come back.",
      "intro.chip": "4.8 on Google",
      "intro.f1.title": "Signature croquettes",
      "intro.f1.text": "Creamy inside, crisp outside, in versions you won't find anywhere else.",
      "intro.f2.title": "Juicy burgers",
      "intro.f2.text": "Juicy and generous, the kind that make you return.",
      "intro.f3.title": "Iberian produce",
      "intro.f3.text": "Iberian and local selection for proper tapas.",

      "dishes.eyebrow": "Must-haves",
      "dishes.title": "What you can't miss",
      "dishes.lead": "A taste of why Barberà keeps talking about us.",
      "dishes.cta": "See full menu",
      "dish.1.tag": "The star",
      "dish.1.name": "Croquetas de rabo de toro",
      "dish.1.desc": "Creamy inside, crisp outside, with slow-cooked oxtail.",
      "dish.2.tag": "House special",
      "dish.2.name": "Patatas Iberoteca",
      "dish.2.desc": "Our house potatoes, made for sharing at the table.",
      "dish.3.tag": "Must-have",
      "dish.3.name": "Juicy burger",
      "dish.3.desc": "Generous and cooked just right, a house favourite.",

      "stats.eyebrow": "By the numbers",
      "stats.title": "Why Barberà already knows us",
      "stat.1.label": "Average rating on Google",
      "stat.2.label": "Different signature croquettes",
      "stat.3.label": "Iberian and local produce",
      "stat.4.label": "The year we changed it all",

      "gallery.eyebrow": "The atmosphere",
      "gallery.title": "A tavern outside, a party inside",
      "gallery.lead": "Bar, table and good vibes, the perfect spot for tapas with your people in Barberà del Vallès.",

      "reviews.eyebrow": "They say it",
      "reviews.title": "Over 600 reviews, a 4.8 average",
      "reviews.ratingCount": "Over 600 reviews on Google",
      "review.1.text": "The food is incredible. The burgers come really complete, with juicy and perfect meat.",
      "review.1.name": "Google customer",
      "review.1.source": "Verified Google review",
      "review.2.text": "El menjar està molt bo i, a més, el servei és atent, amable i proper.",
      "review.2.name": "Lydia R.",
      "review.2.source": "Verified Google review",
      "review.3.text": "Brutals les patates, molt originals. Racions grans. Repetirem!",
      "review.3.name": "Miquel C.",
      "review.3.source": "Verified Google review",
      "review.pending": "Reserved space for more real Google reviews.",
      "reviews.cta": "See all on Google",

      "homecta.eyebrow": "Coming?",
      "homecta.title": "Book your table and come for tapas",
      "homecta.text": "Book us by phone and keep your spot at the tavern all of Barberà recommends.",
      "homecta.btn1": "Book by phone",
      "homecta.btn2": "Get directions",

      "menu.hero.eyebrow": "The menu",
      "menu.hero.title": "Menu",
      "menu.hero.lead": "Gourmet croquettes, Iberian tapas, juicy burgers and a great beer selection. Made for sharing in Barberà del Vallès.",
      "menu.bc.home": "Home",
      "menu.bc.here": "Menu",
      "filter.all": "All",
      "filter.croquetas": "Croquettes",
      "filter.picar": "To share",
      "filter.burgers": "Burgers",
      "filter.drinks": "Drinks",
      "group.croquetas.title": "Gourmet croquettes",
      "group.croquetas.desc": "Our specialty, creamy and freshly made.",
      "group.picar.title": "To share",
      "group.picar.desc": "Tapas and plates for the middle of the table.",
      "group.burgers.title": "Burgers",
      "group.burgers.desc": "Juicy and generous.",
      "group.drinks.title": "Beers and drinks",
      "group.drinks.desc": "A good beer selection to go with your tapas.",
      "group.pendingPrice": "Prices to be confirmed",
      "group.pendingItems": "Menu to be completed with the business",
      "price.tbd": "—",

      "m.croq1.name": "Croquetas de rabo de toro",
      "m.croq1.desc": "Slow-cooked oxtail in a fine béchamel.",
      "m.croq2.name": "Croquetas de gambón",
      "m.croq2.desc": "Soft and full of the flavour of the sea.",
      "m.croq3.name": "Croquetas de chorizo al huevo",
      "m.croq3.desc": "Chorizo and egg in a croquette that surprises.",
      "m.croq4.name": "Croquetas de pollo",
      "m.croq4.desc": "The timeless classic, creamy and comforting.",
      "m.croq5.name": "Croquetas de jamón",
      "m.croq5.desc": "Ham in a fine, golden béchamel.",
      "m.pic1.name": "Morcilla con manzana",
      "m.pic1.desc": "Grilled blood sausage with apple, sweet and savoury.",
      "m.pic2.name": "Patatas con cheddar y bacon",
      "m.pic2.desc": "Potatoes with melted cheddar and crispy bacon.",
      "m.pic3.name": "Patatas Iberoteca",
      "m.pic3.desc": "Our house potatoes, for sharing.",
      "m.burg1.name": "House burgers",
      "m.burg1.desc": "Juicy and generous. Names and varieties to be confirmed.",
      "m.drink1.name": "Beer selection",
      "m.drink1.desc": "A good beer list. References to be confirmed.",
      "badge.star": "Top",
      "badge.new": "New",

      "menu.cta.title": "Going to miss it?",
      "menu.cta.text": "Book a table and come try it in Barberà del Vallès.",
      "menu.cta.btn": "Book by phone",

      "about.hero.eyebrow": "Our story",
      "about.hero.title": "About us",
      "about.hero.lead": "A young tavern with a timeless soul, born in Barberà del Vallès to stay.",
      "about.bc.home": "Home",
      "about.bc.here": "About",
      "about.story.eyebrow": "The story",
      "about.story.title": "From a dream to Barberà's favourite tavern",
      "about.story.p1": "We opened in 2024 wanting to bring back classic tapas and give them a twist. In no time, La Iberoteca became one of the places everyone in Barberà del Vallès talks about.",
      "about.story.p2": "We're defined by Iberian produce, croquettes made to order and burgers that never miss. All in a traditional tavern atmosphere with a modern touch.",
      "about.story.p3": "We're here to stay, so every visit tastes like home.",
      "about.values.eyebrow": "What drives us",
      "about.values.title": "Three things we won't compromise on",
      "value.1.title": "Produce",
      "value.1.text": "Iberian and local selection, because flavour starts with the raw ingredient.",
      "value.2.title": "Tavern cooking",
      "value.2.text": "Classic recipes with a modern touch, made to order and unhurried.",
      "value.3.title": "Atmosphere",
      "value.3.text": "A traditional tavern with good vibes, to come, share and return.",
      "about.local.eyebrow": "The place",
      "about.local.title": "This is how La Iberoteca feels",
      "about.local.lead": "Bar for the vermouth, table for the tapas and an atmosphere that spreads.",
      "about.cta.title": "Come meet us in person",
      "about.cta.text": "We'll save you a table in the centre of Barberà del Vallès.",
      "about.cta.btn": "Book by phone",

      "contact.hero.eyebrow": "Bookings and contact",
      "contact.hero.title": "Contact",
      "contact.hero.lead": "Book us by phone or drop by. We're in the centre of Barberà del Vallès.",
      "contact.bc.home": "Home",
      "contact.bc.here": "Contact",
      "info.address.label": "Address",
      "info.phone.label": "Phone",
      "info.hours.label": "Opening hours",
      "info.social.label": "Follow us",
      "info.hours.note": "Hours to be confirmed. Call us and we'll tell you right away.",
      "hours.mon": "Monday",
      "hours.tue": "Tuesday",
      "hours.wed": "Wednesday",
      "hours.thu": "Thursday",
      "hours.fri": "Friday",
      "hours.sat": "Saturday",
      "hours.sun": "Sunday",
      "hours.tbd": "To be confirmed",
      "contact.map.title": "Map of La Iberoteca in Barberà del Vallès",
      "form.title": "Write to us",
      "form.lead": "A large booking or an event? Tell us and we'll reply.",
      "form.name.label": "Name",
      "form.name.ph": "Your name",
      "form.email.label": "Email",
      "form.email.ph": "you@email.com",
      "form.phone.label": "Phone",
      "form.phone.ph": "600 00 00 00",
      "form.people.label": "Guests",
      "form.people.ph": "2",
      "form.message.label": "Message",
      "form.message.ph": "Day, time and anything you need...",
      "form.submit": "Send",
      "form.note": "This form is a demo. To book right away, give us a call.",
      "floating.label": "Book",

      "footer.tagline": "Iberian tavern, gourmet croquettes and burgers in Barberà del Vallès.",
      "footer.col1": "Explore",
      "footer.col2": "Visit us",
      "footer.col3": "Follow us",
      "footer.hoursNote": "Hours to be confirmed",
      "footer.rights": "© 2026 La Iberoteca · All rights reserved.",
      "footer.legal": "Legal notice",
      "footer.privacy": "Privacy",

      "croq.eyebrow": "The specialty",
      "croq.title": "Five croquettes, zero excuses",
      "croq.lead": "Creamy, freshly made and in versions you won't find in any other tavern in Barberà.",
      "hswipe.hint": "Swipe for more →",
      "sig.eyebrow": "Our thing",
      "sig.title": "The dishes that made our name",
      "sig.1.tag": "The star",
      "sig.1.name": "Croquetas de rabo de toro",
      "sig.1.desc": "Slow-cooked oxtail wrapped in a fine, crisp béchamel. The one everyone orders again.",
      "sig.2.tag": "Must-have",
      "sig.2.name": "House burgers",
      "sig.2.desc": "Juicy and generous, cooked just right. The kind you order without checking the menu.",
      "sig.3.tag": "From the land",
      "sig.3.name": "Iberian tapas",
      "sig.3.desc": "Iberian and local produce to share in the middle of the table, the tavern way.",

      "builder.eyebrow": "Play with your food",
      "builder.title": "Build your own burger",
      "builder.lead": "Add and remove toppings and watch it stack up. Then book it and we'll make it just like this.",
      "builder.base": "Brioche bun and juicy beef come as standard. You add the rest.",
      "builder.yourburger": "Your creation",
      "builder.count": "ingredients",
      "builder.reset": "Start over",
      "builder.cta": "Book it and order it like this",
      "builder.note": "A creation to show at the restaurant. The final menu is set by the business.",
      "builder.msg": "Hi, I'd like to book at La Iberoteca and try my burger",
      "builder.tier1": "The Classic",
      "builder.tier2": "The Iberoteca",
      "builder.tier3": "The Beast",
      "b.pan": "Brioche bun",
      "b.carne": "Juicy beef",
      "b.doble": "Double patty",
      "b.cheddar": "Melted cheddar",
      "b.bacon": "Crispy bacon",
      "b.huevo": "Fried egg",
      "b.cebolla": "Caramelised onion",
      "b.tomate": "Tomato",
      "b.lechuga": "Lettuce",
      "b.salsa": "House sauce"
    }
  };

  function isSupported(lang) {
    return SUPPORTED.indexOf(lang) !== -1;
  }

  function readStoredLang() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      return isSupported(stored) ? stored : null;
    } catch (error) {
      return null;
    }
  }

  function writeStoredLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      return;
    }
  }

  function detectLang() {
    var stored = readStoredLang();
    if (stored) {
      return stored;
    }
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return isSupported(nav) ? nav : DEFAULT_LANG;
  }

  function dictionaryFor(lang) {
    return translations[lang] || translations[DEFAULT_LANG];
  }

  function translate(lang, key) {
    var dict = dictionaryFor(lang);
    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      return dict[key];
    }
    return translations[DEFAULT_LANG][key] || "";
  }

  function applyText(lang) {
    var nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach(function (node) {
      node.textContent = translate(lang, node.getAttribute("data-i18n"));
    });
  }

  function applyHtml(lang) {
    var nodes = document.querySelectorAll("[data-i18n-html]");
    nodes.forEach(function (node) {
      node.innerHTML = translate(lang, node.getAttribute("data-i18n-html"));
    });
  }

  function applyAttr(lang, attr, selector) {
    var nodes = document.querySelectorAll(selector);
    nodes.forEach(function (node) {
      node.setAttribute(attr, translate(lang, node.getAttribute("data-i18n-" + attr)));
    });
  }

  function applyDocumentTitle(lang) {
    var el = document.querySelector("[data-i18n-doctitle]");
    if (el) {
      return;
    }
  }

  function markActiveButtons(lang) {
    var buttons = document.querySelectorAll("[data-lang]");
    buttons.forEach(function (button) {
      var active = button.getAttribute("data-lang") === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function apply(lang) {
    document.documentElement.setAttribute("lang", lang);
    applyText(lang);
    applyHtml(lang);
    applyAttr(lang, "placeholder", "[data-i18n-placeholder]");
    applyAttr(lang, "aria-label", "[data-i18n-aria-label]");
    applyAttr(lang, "content", "[data-i18n-content]");
    applyDocumentTitle(lang);
    markActiveButtons(lang);
    writeStoredLang(lang);
    window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: lang } }));
  }

  function handleClick(event) {
    var trigger = event.target.closest("[data-lang]");
    if (!trigger) {
      return;
    }
    event.preventDefault();
    var lang = trigger.getAttribute("data-lang");
    if (isSupported(lang)) {
      apply(lang);
    }
  }

  function bind() {
    document.addEventListener("click", handleClick);
  }

  function init() {
    bind();
    apply(detectLang());
  }

  window.I18N = {
    apply: apply,
    translate: translate,
    current: function () {
      return document.documentElement.getAttribute("lang") || DEFAULT_LANG;
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
