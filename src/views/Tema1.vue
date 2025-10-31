<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Infraestructura vial 
    
      .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          br
          p La infraestructura vial constituye uno de los pilares fundamentales para el desarrollo económico, social y turístico de un territorio, ya que facilita la conectividad entre regiones, el acceso a bienes y servicios, y el desplazamiento eficiente de personas. Comprende todos los elementos diseñados, construidos y gestionados para garantizar una movilidad segura, continua y sostenible. Entre estos se incluyen carreteras, calles, autopistas, puentes, túneles, sistemas de drenaje, señalización, iluminación y dispositivos de control del tráfico.
          br

      .row.justify-content-center.align-items-center.mb-2
        .col-lg-9
          p Además de su función técnica, la infraestructura vial cumple un papel estratégico en la planificación territorial, al integrar zonas urbanas, rurales y turísticas, potenciando la competitividad y la cohesión regional. Un sistema vial adecuado impulsa el comercio, facilita la movilidad laboral, mejora la distribución de productos y refuerza el acceso a servicios esenciales como educación y salud.
          p.p-4.bg3 En el ámbito turístico, la infraestructura vial adquiere un valor determinante, pues de ella depende la facilidad de acceso a los destinos, la seguridad del desplazamiento y la calidad de la experiencia del visitante. Una red vial bien planificada no solo conecta los atractivos turísticos, sino que también fortalece la interacción con las comunidades locales, dinamizando la economía y promoviendo un desarrollo sostenible basado en la movilidad eficiente y responsable.
        .col-lg-3.col-8.col-md-6
          img(src='@/assets/curso/Tema1/img02.svg', alt='')

      .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Tipos de infraestructuras 
         
      p La infraestructura vial se clasifica según su función y características:

      .row(data-aos="zoom-in-left")
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.bg1.p-4
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/Tema1/1.svg', alt='Texto que describa la imagen')
            h4.text-center.bg4.p-1 Vías urbanas
            p.text-center.mb-4 Diseñadas para el tráfico dentro de las ciudades; incluyen calles locales, arterias principales y vías expresas.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.bg1.p-4
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/Tema1/2.svg', alt='Texto que describa la imagen')
            h4.text-center.bg4.p-1 Vías interurbanas
            p.text-center.mb-5 Comunican ciudades y regiones; pueden ser carreteras locales, secundarias o principales.
        .col-sm-6.col-lg-3.mb-4.mb-lg-0  
          .tarjeta--boton.bg1.p-4
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/Tema1/3.svg', alt='Texto que describa la imagen')
            h4.text-center.bg4.p-1 Autopistas y autovías
            p.text-center.mb-4 Vías de alta capacidad y velocidad, con control total de accesos y separación de flujos vehiculares.
        
        .col-sm-6.col-lg-3.mb-4.mb-lg-0 
          .tarjeta--boton.bg1.p-4
            .row.justify-content-center.mb-3
              .col-5
                figure
                  img(src='@/assets/curso/Tema1/4.svg', alt='Texto que describa la imagen')
            h4.text-center.bg4.p-1 Caminos rurales
            p.text-center.mb-4 Conectan zonas rurales; suelen ser de baja capacidad y, en muchos casos, no pavimentados o con mantenimiento limitado.

      .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Superficie de la vía

      p.mb-4 La superficie de la vía o pavimento es un componente esencial para la seguridad, comodidad y durabilidad del tránsito. Sus principales tipos son:
      
      .cont_5_1.mt-4(data-aos="fade-left").mb-2
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0.col-md-10(data-aos="zoom-in")
            .crd_hover_txt
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/Tema1/1.png' alt="")
              .crd_hover_txt--body.colt
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-2
                    img.d-none.d-lg-block.img-t.img-a.mtop.rot(src='@/assets/curso/Tema1/up.png' alt="")
                  .col-lg-10
                    h5.mb-3.txp Pavimento flexible
                p.mb-0.txp Compuesto por capas de agregados y una capa superior de asfalto; es común en carreteras de menor tráfico y de mantenimiento sencillo.
          
          .col-lg-4.mb-4.mb-lg-0.col-md-10(data-aos="zoom-in")
            .crd_hover_txt
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/Tema1/2.png' alt="")
              .crd_hover_txt--body.colt
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-2
                    img.d-none.d-lg-block.img-t.img-a.mtop.rot(src='@/assets/curso/Tema1/up.png' alt="")
                  .col-lg-10
                    h5.mb-3.txp Pavimento rígido
                p.mb-0.txp Formado por losas de concreto, con alta durabilidad y resistencia, ideal para vías de alto tráfico como autopistas.
          
          .col-lg-4.mb-4.mb-lg-0.col-md-10(data-aos="zoom-in")
            .crd_hover_txt
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/Tema1/3.png' alt="")
              .crd_hover_txt--body.colt
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-2
                    img.d-none.d-lg-block.img-t.img-a.mtop.rot(src='@/assets/curso/Tema1/up.png' alt="")
                  .col-lg-10
                    h5.mb-3.txp Superficies no pavimentadas
                p.mb-0.txp De tierra o grava, empleadas en caminos rurales con bajo volumen de tránsito.
      
      
      
      .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Señalización
 

      p.mb-5 La señalización vial constituye un sistema de comunicación visual que orienta, informa y regula el tránsito de conductores y peatones, garantizando un flujo ordenado y seguro. Se clasifica en:

      br
      .row.justify-content-center.mb-5(data-aos="zoom-in-left")
        .col-lg-9.position-relative
          .avatar
            figure
              img(src="@/assets/curso/Tema1/img03.svg", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/Tema1/01.svg", alt="alt").img100
              .col-lg-9.col
                h5.text-black Señales verticales
                p Instaladas sobre postes o estructuras; incluyen señales reglamentarias, preventivas e informativas.
          
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/Tema1/02.svg", alt="alt").img100
              .col.col-lg-8
                h5.text-black Marcas viales
                p Aplicadas sobre el pavimento con pintura o material termoplástico; representan líneas, flechas o símbolos.
          
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/Tema1/03.svg", alt="alt").img100
              .col.col-lg-8
                h5.text-black Dispositivos luminosos
                p Como semáforos o luces intermitentes, que controlan el paso en intersecciones y zonas de riesgo.


      .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Servicios en ruta


      p.mb-4 Los servicios en ruta son instalaciones destinadas a atender las necesidades de los usuarios durante el desplazamiento. Entre ellos se destacan:


      .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
        .col-lg-10
          .row
            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-primario.p-5
                .tarjeta-numerada__numero
                  .h2 1 
                h5.text-center Estaciones de servicio
                p.text-center Suministran combustible, productos básicos y servicios complementarios.

            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-secundario.p-5
                .tarjeta-numerada__numero
                  .h2 2
                h5.text-center Áreas de descanso
                p.text-center Espacios para que los conductores repongan energías de forma segura.
                br

            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-acento-contenido.p-5
                .tarjeta-numerada__numero
                  .h2 3
                h5.text-center Puestos de auxilio
                p.text-center Puntos de asistencia mecánica o médica en caso de emergencias.
                br

      .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Criterios de seguridad


      p.mb-4 Los criterios de seguridad vial abarcan las normas y parámetros de diseño que buscan reducir los accidentes y sus consecuencias. Entre los más relevantes se incluyen:

      .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-lg-3.col-9.mb-3.col-md-6
          img(src="@/assets/curso/Tema1/img04.png")
        .col-lg-8
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Geometría de la vía:] curvas, pendientes y radios de giro acordes con la velocidad de diseño.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Diseño de intersecciones:] intercambios y rotondas que disminuyen los puntos de conflicto.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Barreras de seguridad:] elementos físicos que previenen salidas de vía o choques frontales.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Iluminación adecuada:] especialmente en zonas urbanas, túneles e intersecciones, para mejorar la visibilidad y prevenir incidentes.





























  </template>

<script>
export default {
  name: 'Tema1',
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

<style lang="sass">
.avatar
  position: absolute
  bottom: 0
  right: -8rem
  z-index: 1
  @media (max-width: 1000px)
    display: none
.crd--avatarHorizontal
  position: relative
  padding-right: 12rem
  & > *
    position: relative
  h5
    color: #7F4FC7
  p
    margin-bottom: 0
  &::before
    position: absolute
    content: ''
    top: 0
    right: 0
    width: calc( 100% - 60px)
    height: 100%
    background-color: #EDF4FE
  @media (max-width: 1000px)
    padding-right: 2rem

.crd--first, .crd--last
  &::before
    background-color: #B8D4F8 !important
.crd--first
  &::before
    border-top-left-radius: 30px
.crd--last
  &::before
    border-bottom-left-radius: 30px
</style>
