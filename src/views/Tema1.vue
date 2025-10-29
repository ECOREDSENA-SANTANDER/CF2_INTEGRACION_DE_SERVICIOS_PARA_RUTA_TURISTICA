<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Infraestructura vial 
    
      .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-5
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
        .col-lg-3
          img(src='@/assets/curso/Tema1/img02.svg', alt='')

      .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Tipos de infraestructuras 
         
      p La infraestructura vial se clasifica según su función y características:




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

<style lang="sass"></style>
