<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Itinerario turístico

    .row.justify-content-center.align-items-center.mb-3.bgtema5.p-4(data-aos="zoom-in-left")
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          span  Itinerario turístico
      .col-lg-8.col-md-7
        figure
          img.mb-3(src='@/assets/curso/Tema5/itinerario.svg', alt='NO HAY EN EL XD TEXTO ALTERNATIVO')
          

    p.mb-3 Un itinerario turístico es una herramienta de planificación que organiza, de manera detallada y cronológica, las actividades, lugares a visitar y tiempos de desplazamiento dentro de un viaje. Cumple la función de guía estructurada para optimizar el tiempo y garantizar una experiencia completa y coherente.

    .row.justify-content-end(data-aos="flip-up")
      .col-lg-12.col-12
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-11.col-lg-7.col-12
            .d-flex.align-items-center.mt-4
              h3.titulo1.py-2.w-card-text2 Tipos de infraestructuras 

    .tarjeta--container.row.mb-2
      .col-md-6.tarjeta.bg5.p-5.mb-2.col-lg-3
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/Tema5/1.svg', alt='Texto que describa la imagen')          
        h4.text-center Organización
        p.text-center Establece el orden de las actividades.
      
      .col-md-6.tarjeta.bg6.p-5.mb-2.col-lg-3
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/Tema5/2.svg', alt='Texto que describa la imagen')          
        h4.text-center Especificidad
        p.text-center Contiene información precisa sobre destinos, horarios y servicios.
      
      .col-md.tarjeta.bg5.p-5.col-lg-3.mb-2
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/Tema5/3.svg', alt='Texto que describa la imagen')          
        h4.text-center Flexibilidad
        p.text-center Permite adaptaciones ante imprevistos.

      .col-md.tarjeta.bg6.p-5.col-lg-3.mb-2
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/Tema5/4.svg', alt='Texto que describa la imagen')          
        h4.text-center Temporalidad
        p.text-center Define la duración total del viaje.

    .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Tipos de itinerario

    .row.justify-content-center.mb-0(data-aos="zoom-in-left")
      .col-lg-6.mb-3.col-md-8
        img(src="@/assets/curso/Tema5/img01.png")
      .col-lg-6.bg6.p-4.mb-5
        ul.lista-ul--color
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 De ocio, enfocado en descanso y recreación.

            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 De negocios, orientado a actividades corporativas.

            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 De aventura, destinado a experiencias deportivas o al aire libre.

            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 De grupo, diseñado para recorridos colectivos.

            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 Personalizado, adaptado a intereses individuales.


            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 Circular, que inicia y finaliza en el mismo punto.

    p Los itinerarios se estructuran por periodos de tiempo, que pueden variar desde horas hasta semanas, e incluyen actividades como transporte, alojamiento, visitas culturales, ocio, gastronomía o deportes de aventura.



















































































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
