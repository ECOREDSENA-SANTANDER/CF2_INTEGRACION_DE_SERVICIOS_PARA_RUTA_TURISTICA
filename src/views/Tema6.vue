<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Ruta turística

    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema6/img01.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          br
          br
          br
          p Una ruta turística es un recorrido planificado que conecta diferentes atractivos naturales, culturales, históricos o recreativos dentro de un área determinada. Su finalidad es ofrecer al visitante una experiencia integral y coherente, articulando servicios turísticos, señalización, accesos y un hilo conductor temático.
          br
          br
          br
          

    .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Tipologías de atractivos turísticos

    .tarjeta--container.row.mb-0
      .col-md-6.tarjeta.bg5.p-5.mb-3.col-lg-3
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/Tema6/1.svg', alt='Texto que describa la imagen')          
        h4.text-center Atracciones
        p.text-center Puntos de interés como monumentos, museos o paisajes.
      
      .col-md-6.tarjeta.bg6.p-5.mb-3.col-lg-3
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/Tema6/2.svg', alt='Texto que describa la imagen')          
        h4.text-center Servicios turísticos
        p.text-center Alojamiento, gastronomía, transporte y guías.
      
      .col-md-6.tarjeta.bg5.p-5.mb-3.col-lg-3
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/Tema6/3.svg', alt='Texto que describa la imagen')          
        h4.text-center Señalización e información
        p.text-center Herramientas que orientan al viajero.

      .col-md-6.tarjeta.bg6.p-5.mb-3.col-lg-3
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/Tema6/4.svg', alt='Texto que describa la imagen')          
        h4.text-center Tema central
        p.text-center Elemento que da identidad al recorrido (histórico, gastronómico, religioso, natural, etc.).

    .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Tipologías de atractivos turísticos

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-4.mb-3.col-md-8.col-9
        img(src="@/assets/curso/Tema6/img02.png")
      .col-lg-8.bg6.p-4.mb-3.py-5
        ul.lista-ul--color
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Culturales:] centradas en el patrimonio histórico, artístico y arquitectónico (ejemplo: Camino de Santiago).
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Gastronómicas:] relacionadas con la cocina y los productos típicos (ejemplo: Ruta del Tequila).

            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b De naturaleza:] orientadas al ecoturismo y la aventura (ejemplo: Ruta de los 7 Lagos).

            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Históricas:] basadas en personajes o acontecimientos (ejemplo: Ruta de Napoleón).

            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Religiosas:] vinculadas con la espiritualidad o la fe (ejemplo: peregrinación a la Basílica de Guadalupe).


    p.mb-0 También existen rutas clasificadas según los medios de transporte, terrestres, acuáticos o aéreos.
    
    .row.justify-content-end(data-aos="flip-up")
      .col-lg-12.col-12
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-11.col-lg-7.col-12
            .d-flex.align-items-center.mt-4
              h3.titulo1.py-2.w-card-text2 Características principales


    .row.justify-content-center.align-items-center.mb-1(data-aos="flip-up")
      .col-lg-5.col-md-9.mb-3.col-9
        img(src="@/assets/curso/Tema6/img03.png")
      .col-lg-3.bg6.p-4.mb-3.py-5
        ul.lista-ul--color
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 Ruta 66 (Estados Unidos).
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0  Camino de Santiago (España).
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 Ruta del Vino (Chile).
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0  Great Ocean Road (Australia).
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 Ruta de los 7 Lagos (Argentina).
      .col-lg-4.col-md-6.mb-3.col-9
        img(src="@/assets/curso/Tema6/img04.svg")

    p Cada ruta turística, al consolidarse con el tiempo, se convierte en un referente cultural y económico del territorio, fortaleciendo su identidad y atrayendo a visitantes nacionales e internacionales.












































































</template>

<script>
export default {
  name: 'Tema5',
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
