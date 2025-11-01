<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Destino turístico

    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema2/img01.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          br
          p Un destino turístico es mucho más que un lugar geográfico; representa un espacio planificado, gestionado y promocionado para atraer visitantes, ofreciendo una combinación equilibrada entre recursos naturales, culturales y servicios que permiten vivir experiencias significativas. Cada destino se configura a partir de su identidad, su historia, su gente y los elementos tangibles e intangibles que le otorgan un valor diferencial frente a otros lugares.
          br
          br

    p.mb-4 Desde el punto de vista de la planificación territorial, el destino turístico funciona como una unidad de gestión en la que convergen diversos componentes: atractivos naturales y culturales, infraestructura básica (carreteras, servicios públicos, conectividad digital), planta turística (alojamientos, restaurantes, agencias de viajes), superestructura (organismos públicos, cámaras de comercio, asociaciones turísticas) y la demanda, representada por los turistas nacionales e internacionales que lo visitan. La articulación de estos elementos determina la competitividad del destino y su posicionamiento en el mercado.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-12
        img(src='@/assets/curso/Tema2/img02.jpg', alt='')
    
    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-9
        p Asimismo, los destinos turísticos desempeñan un papel clave en el desarrollo socioeconómico local, ya que promueven la generación de empleo, el fortalecimiento de la cultura, la inversión en infraestructura y la dinamización del comercio. Cuando la gestión es sostenible, los beneficios trascienden el ámbito económico e impactan positivamente en la conservación del patrimonio natural y cultural, el bienestar comunitario y la calidad de vida de los habitantes.
        p.bg3.p-4 Finalmente, un destino exitoso se define por la experiencia integral que ofrece al visitante: una combinación de hospitalidad, seguridad, accesibilidad, autenticidad y sostenibilidad. Estos factores, gestionados de manera estratégica, permiten consolidar una imagen positiva en la mente del viajero, fomentar su retorno y garantizar la continuidad del turismo como motor de desarrollo responsable y sostenible.
      .col-lg-3.col-8.col-md-6
        img(src='@/assets/curso/Tema2/img03.svg', alt='')

    separador
    #t_2_1.titulo-segundo.color-acento-contenido.mb-5
      h2 2.1  Oferta autóctona del destino

    p La oferta autóctona del destino comprende los bienes, servicios, manifestaciones culturales, recursos naturales y tradiciones propias que identifican a una región o comunidad. Representa la autenticidad del lugar y contribuye a la preservación de la identidad cultural, la sostenibilidad ambiental y el desarrollo comunitario.
    p Entre los principales elementos que conforman esta oferta se destacan:

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-3.col-8.mb-4.col-md-6
        img(src='@/assets/curso/Tema2/img04.png', alt='')
      .col-lg-9.bg6.p-4.mb-3.py-4
        ul.lista-ul--color
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Gastronomía tradicional:] platos típicos y bebidas locales, como los tamales tolimenses o las hormigas culonas de Santander.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Artesanías y manualidades:] productos elaborados a mano con técnicas ancestrales, como el sombrero vueltiao o las mantas guajiras.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Música y danzas tradicionales:] expresiones culturales propias, como el joropo en los Llanos.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Eventos culturales y religiosos:] celebraciones locales como el Carnaval de Negros y Blancos en Pasto.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Turismo rural o comunitario:] experiencias agrícolas, rutas campesinas y visitas a fincas.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Lenguas y expresiones orales:] idiomas indígenas, refranes y leyendas populares.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Productos agrícolas locales:] café especial, cacao, frutas nativas y productos orgánicos.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Arquitectura y patrimonio:] edificaciones coloniales, iglesias y caminos reales.


    .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Pronósticos meteorológicos

    .row.justify-content-center.align-items-center.mb-3.bgtema5.p-4(data-aos="zoom-in-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span  Pronóstico meteorológico
      .col-lg-8.col-md-7
        figure
          img.mb-3(src='@/assets/curso/Tema2/img05.svg', alt='NO HAY EN EL XD TEXTO ALTERNATIVO')

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
      .col-lg-4
        .row.justify-content-end
          .col-lg-3.mb-3.col-3.col-md-2
            img(src='@/assets/curso/Tema2/img06.svg', alt='')
          .col-lg-12 
            p Los pronósticos meteorológicos proporcionan información anticipada sobre las condiciones climáticas esperadas en un lugar durante un periodo determinado. Son fundamentales para la planificación de actividades turísticas, ya que permiten prever condiciones que pueden afectar la experiencia del visitante, como lluvias, temperaturas extremas o vientos fuertes.
      .col-lg-3.col-8.mb-3.col-md-6
        img(src='@/assets/curso/Tema2/img07.png', alt='')
      .col-lg-5.bg3.p-4
        br
        br
        p Según Álvarez y Aranda (2017), estos pronósticos ayudan a los prestadores de servicios turísticos a anticiparse a cambios en la demanda, planificar contingencias y optimizar la toma de decisiones. Entre los datos más relevantes se incluyen: temperatura mínima y máxima, probabilidad de precipitaciones, humedad relativa, velocidad y dirección del viento, índice UV, condiciones del cielo, alertas meteorológicas y sensación térmica.


    separador
    #t_2_2.titulo-segundo.color-acento-contenido.mb-5(data-aos="zoom-in-left")
      h2 2.2  Tipo de indumentaria

    p.mb-4 El tipo de indumentaria recomendada para un destino turístico depende de las condiciones climáticas, culturales y de las actividades planificadas. Seleccionar la vestimenta adecuada contribuye al confort, la seguridad y la adaptación del visitante al entorno.
    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-9.bg6.p-4.mb-3.py-5
        ul.lista-ul--color
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Climas cálidos:] ropa ligera, transpirable y de colores claros; sombrero, gafas de sol, calzado cómodo y protector solar.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Climas fríos:] prendas térmicas o de abrigo (chaquetas, guantes, bufandas), sistema de capas, calzado impermeable y gorro.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Climas lluviosos o húmedos:] impermeables, paraguas, calzado resistente al agua y ropa de secado rápido.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Destinos con alta exposición solar:] prendas con protección UV, camisas de manga larga ligeras, sombrero de ala ancha, hidratación constante y bloqueador solar.
           
      .col-lg-3.col-8.mb-4.col-md-6(data-aos="zoom-in-left")
        img(src='@/assets/curso/Tema2/img08.png', alt='')

    p Cada uno de estos aspectos garantiza una experiencia turística más segura, cómoda y acorde con las características del destino.



















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
