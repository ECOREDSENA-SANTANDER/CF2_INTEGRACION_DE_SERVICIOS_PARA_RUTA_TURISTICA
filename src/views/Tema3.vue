<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Prestadores de servicios turísticos

    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema3/img01.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          br
          p Los prestadores de servicios turísticos son actores fundamentales dentro del sistema turístico, ya que representan el vínculo directo entre el destino y el visitante. Son personas naturales o jurídicas que desarrollan actividades destinadas a satisfacer las necesidades de los turistas a lo largo de su experiencia de viaje, garantizando comodidad, seguridad, accesibilidad y calidad en cada servicio ofrecido. Estas entidades o individuos pueden operar en distintos niveles: local, regional o nacional y conforman una red interdependiente que incluye alojamiento, transporte, gastronomía, agencias de viajes, guías de turismo, recreación y otros servicios complementarios.
          

    .row.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-left")
      .col-lg-9
        p Además, los prestadores no solo cumplen una función operativa, sino también estratégica, pues influyen en la percepción del destino, en la fidelización del visitante y en la sostenibilidad del turismo. Su labor contribuye a fortalecer la economía local, generar empleo, promover la cultura y conservar el patrimonio natural y cultural. En la actualidad, se espera que estos prestadores adopten buenas prácticas de gestión sostenible, de inclusión social y de responsabilidad ambiental, integrando la innovación tecnológica y la atención personalizada como factores clave de competitividad.
        p.bg3.p-4 De esta manera, los prestadores de servicios turísticos se consolidan como un componente esencial del desarrollo turístico, al ofrecer productos y experiencias que no solo atienden las expectativas del visitante, sino que también reflejan la identidad, hospitalidad y valores del territorio que representan.
      .col-lg-3.col-8.col-md-6
        img(src='@/assets/curso/Tema3/img02.svg', alt='')

    .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Tipos de infraestructuras 

    p.mb-4 Existen diversos tipos de prestadores, clasificados según el servicio que ofrecen:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-3.col-8.mb-3.col-md-6
        img(src='@/assets/curso/Tema3/img03.png', alt='')
      .col-lg-9.bg6.p-4.mb-3.py-5
        ul.lista-ul--color
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Alojamiento turístico:] hoteles, hostales, fincas, campamentos y apartamentos turísticos.

            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Agencias de viajes:] organizan y comercializan paquetes turísticos, tiquetes aéreos y servicios complementarios.


            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Transporte turístico:] empresas de transporte terrestre, aéreo o fluvial dedicadas al traslado de turistas.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Guías de turismo:] profesionales que orientan, informan y acompañan a los visitantes, aportando conocimientos culturales, históricos y ambientales.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Gastronomía:] restaurantes y establecimientos que ofrecen experiencias culinarias representativas del destino.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Operadores de turismo de aventura:] empresas que organizan actividades como senderismo, rafting, canopy o escalada.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Centros de recreación y ocio:] parques temáticos, balnearios y centros de convenciones.
         
    separador
    #t_3_1.titulo-segundo.color-acento-contenido.mb-5
      h2 3.1  Normativa de formalización

    p.mb-4 En Colombia, la formalización de los prestadores de servicios turísticos está regulada por el Registro Nacional de Turismo (RNT), administrado por el Ministerio de Comercio, Industria y Turismo. Este registro es público, obligatorio y tiene como finalidad formalizar el sector, garantizar la calidad de los servicios y proteger a los turistas. Para su inscripción, los prestadores deben cumplir con los siguientes requisitos:

    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-9.bg6.p-4.mb-3.py-5
        ul.lista-ul--color
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Constitución legal:] estar registrados como persona natural o jurídica.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Solicitud en línea:] diligenciar el formulario en el portal del RNT, a través de la Cámara de Comercio.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Documentación:] anexar los documentos exigidos (certificado de Cámara de Comercio, RUT y cédula del representante legal).
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Verificación y aprobación:] el Ministerio de Comercio, Industria y Turismo de Colombia revisa la información y, si cumple con los requisitos, emite el registro.
          
      .col-lg-3.col-8.col-md-6
        img(src='@/assets/curso/Tema3/img04.png', alt='')

    p.mb-4 La inscripción en el RNT es indispensable para operar legalmente, acceder a beneficios estatales y fortalecer la confianza de los usuarios en la oferta turística nacional.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido.mb-5(data-aos="zoom-in-left")
      h2 3.2  Oferta en el destino

    p.mb-4 La oferta turística de un destino comprende el conjunto de bienes, servicios y experiencias que se ponen a disposición del visitante. Está integrada por prestadores públicos y privados que buscan atender las necesidades y expectativas del turista, garantizando calidad, seguridad, accesibilidad y sostenibilidad. Incluye servicios como:


    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-3.col-8.mb-4.col-md-6
        img(src='@/assets/curso/Tema3/img05.png', alt='')
      .col-lg-9.bg6.p-4.mb-3.py-5
        ul.lista-ul--color
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Alojamiento:] hoteles, hostales, cabañas, #[em glamping] o casas rurales.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Transporte:] servicios turísticos de taxi, alquiler de vehículos o traslados terrestres, fluviales y aéreos.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Gastronomía:] restaurantes, cafeterías y experiencias culinarias autóctonas.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Servicio de orientación turística:] recorridos temáticos a cargo de guías locales certificados.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Agencias y operadores turísticos:] diseño y comercialización de paquetes integrales.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Recreación y cultura:] actividades como senderismo, ciclismo, deportes de aventura, visitas a museos y sitios patrimoniales.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Artesanías y productos locales:] #[em souvenirs], arte indígena y campesino, o productos agrícolas transformados.

    p.mb-4 La oferta turística varía según las características geográficas, culturales y climáticas del destino. Por ejemplo, en zonas costeras predominan los servicios de alojamiento frente al mar, actividades acuáticas y gastronomía marina; mientras que en regiones montañosas la oferta se orienta al turismo de aventura, alojamiento rural y experiencias naturales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-12
        .cajon.bg5.p-4
          p.mb-0 Asimismo, existen servicios complementarios que apoyan la experiencia del viajero, tales como estaciones de gasolina, supermercados, servicios de estética, bancos, cajeros automáticos y corresponsales. En conjunto, estos componentes conforman una red integral que garantiza una experiencia turística completa, sostenible y de calidad.
    





























































</template>

<script>
export default {
  name: 'Tema3',
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
