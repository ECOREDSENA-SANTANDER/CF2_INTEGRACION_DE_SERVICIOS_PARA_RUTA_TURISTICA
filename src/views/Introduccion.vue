<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-4.col-md-8.mb-3.col-10
        img(src='@/assets/curso/portada/img01.jpg', alt='')
      .col-lg-8 
        p La integración de servicios en la ruta turística tiene como propósito articular de manera estratégica la oferta integral de un destino hacia el visitante. Esta conexión sinérgica vincula servicios como alojamiento, gastronomía, transporte, actividades recreativas y servicios autóctonos de la comunidad, garantizando una experiencia continua y enriquecedora que refleje la identidad y los valores de la región.
        p Cada servicio incorporado a la ruta contribuye al fortalecimiento de la narrativa del destino y al aprendizaje significativo del turista o excursionista. Una integración adecuada beneficia tanto al visitante como a la comunidad local, fomenta la cooperación entre los actores del territorio, impulsa la sostenibilidad económica y ambiental, y consolida la identidad cultural del lugar.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajon.bg1.p-4
          p.mb-0 Por ello, esta guía presenta los procedimientos esenciales para lograr una integración efectiva de los servicios turísticos en la ruta, promoviendo experiencias auténticas y coherentes con el desarrollo sostenible del destino.
    



















    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
