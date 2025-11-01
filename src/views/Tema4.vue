<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Atractivos turísticos

    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema4/img01.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p Un atractivo turístico es un recurso natural o cultural con el potencial de atraer visitantes debido a su singularidad, valor histórico, artístico, arquitectónico, natural, recreativo, gastronómico, lingüístico, arqueológico o astronómico. Representa un elemento clave en la decisión del viajero al seleccionar un destino, pues influye directamente en su interés y motivación para realizar el desplazamiento. 
          br
          br
          | Los destinos turísticos reúnen diversos atractivos que, en conjunto, conforman su identidad y competitividad. Por ello, los entes gubernamentales, junto con la comunidad local, desarrollan estrategias e invierten recursos para fortalecer su reconocimiento, garantizar su preservación y promover el desarrollo sostenible del territorio.


    .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Tipologías de atractivos turísticos

    .cont_5_1.mt-4(data-aos="fade-left").mb-4
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0.col-md-10(data-aos="zoom-in")
            .crd_hover_txt
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/Tema4/1.png' alt="")
              .crd_hover_txt--body.colt
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-2
                    img.d-none.d-lg-block.img-t.img-a.mtop.rot(src='@/assets/curso/Tema1/up.png' alt="")
                  .col-lg-10
                    h5.mb-3.txp Sitios naturales
                p.mb-0.txp Comprenden áreas geográficas y bienes naturales de relevancia para el turismo, como montañas, ríos, playas, parques nacionales y reservas ecológicas.
          
          .col-lg-4.mb-4.mb-lg-0.col-md-10(data-aos="zoom-in")
            .crd_hover_txt
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/Tema4/2.png' alt="")
              .crd_hover_txt--body.colt
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-2
                    img.d-none.d-lg-block.img-t.img-a.mtop.rot(src='@/assets/curso/Tema1/up.png' alt="")
                  .col-lg-10
                    h5.mb-3.txp Sitios culturales
                p.mb-0.txp Incluyen lugares asociados con hechos históricos, asentamientos humanos, transformaciones del territorio o edificaciones que poseen valor patrimonial, arquitectónico o arqueológico.
          
          .col-lg-4.mb-4.mb-lg-0.col-md-10(data-aos="zoom-in")
            .crd_hover_txt
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/Tema4/3.png' alt="")
              .crd_hover_txt--body.colt
                .row.justify-content-center.align-items-center.mb-0
                  .col-lg-2
                    img.d-none.d-lg-block.img-t.img-a.mtop.rot(src='@/assets/curso/Tema1/up.png' alt="")
                  .col-lg-10
                    h5.mb-3.txp Festividades y eventos
                p.mb-0.txp Corresponden a celebraciones tradicionales o contemporáneas en las que la población local participa como protagonista o espectadora, fortaleciendo su identidad cultural.


    .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Inventario turístico


    .row.justify-content-center.align-items-center.mb-2
      .col-lg-3.col-8.col-md-6.mb-3
        img(src="@/assets/curso/Tema4/img02.svg")
      .col-lg-9
        p El inventario turístico es el proceso mediante el cual se registran de manera ordenada los recursos físicos y culturales que constituyen los atractivos de una región, con el propósito de estructurar productos turísticos y planificar su aprovechamiento sostenible. Es importante distinguir entre:
        ul.lista-ul--color
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Recurso:] elementos naturales o culturales con potencial turístico aún no desarrollados.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Atractivo:] recursos que ya reúnen las condiciones necesarias para integrarse de inmediato en la oferta turística.
        p.bg3.p-4 En una región, los recursos y atractivos deben evaluarse de forma objetiva para determinar su viabilidad turística, clasificándose principalmente en patrimonio cultural y sitios naturales.

    .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Patrimonio cultural

    p.mb-4 El patrimonio cultural abarca el conjunto de bienes y manifestaciones materiales e inmateriales construidas y conservadas por las comunidades a lo largo del tiempo. Estos bienes otorgan sentido de pertenencia, identidad y memoria colectiva.
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="a) Patrimonio material")
        .col-md-6.mb-4.mb-md-0
          p Conformado por elementos físicos perceptibles sensorialmente, como edificaciones, obras de arte, objetos históricos, documentos, sitios arqueológicos, monumentos, caminos reales, puentes, y herramientas tradicionales. Se divide en:
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Mueble:] bienes trasladables como pinturas, artesanías, manuscritos, objetos arqueológicos o piezas de valor histórico.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 #[b Inmueble:] bienes no trasladables, como centros históricos, edificaciones coloniales, iglesias, murallas o monumentos.
        .col-md-5
          img(src='@/assets/curso/Tema4/img03.png', alt='Texto que describa la imagen')

      .row.justify-content-center(titulo="b) Patrimonio inmaterial")
        .col-md-6.mb-4.mb-md-0
          p Integra las tradiciones orales, prácticas sociales, rituales, celebraciones, conocimientos sobre la naturaleza y el universo, expresiones artísticas y manifestaciones culturales que se transmiten de generación en generación. Estas expresiones se caracterizan por su colectividad, espontaneidad, anonimato y permanencia en el tiempo.
        .col-md-5
          img(src='@/assets/curso/Tema4/img04.png', alt='Texto que describa la imagen')
      
      .row.justify-content-center(titulo="c) Festividades y eventos")
        .col-md-6.mb-4.mb-md-0
          p Forman parte del patrimonio vivo de las comunidades, donde se combinan elementos artísticos, religiosos y tradicionales, fortaleciendo el sentido de pertenencia local.
        .col-md-5
          img(src='@/assets/curso/Tema4/img05.png', alt='Texto que describa la imagen')
      
      .row.justify-content-center(titulo="d) Grupos de especial interés")
        .col-md-6.mb-4.mb-md-0
          p Incluyen comunidades indígenas, afrodescendientes y raizales, cuyo legado cultural y cosmovisión constituyen un valor patrimonial. La Constitución Política de Colombia reconoce y protege la diversidad étnica y cultural, garantizando que la participación de estas comunidades en actividades turísticas se dé desde el respeto, la autonomía y la conservación de sus costumbres.
        .col-md-5
          img(src='@/assets/curso/Tema4/img06.png', alt='Texto que describa la imagen')

    .row.justify-content-end(data-aos="flip-up")
        .col-lg-12.col-12
          .row.justify-content-start.mb-4(data-aos="zoom-in-left")
            .col-sm-11.col-lg-7.col-12
              .d-flex.align-items-center.mt-4
                img.w-card-icon(src="@/assets/curso/Tema1/ubi.svg")
                h3.titulo1.py-2.w-card-text Sitios naturales


    .bloque-texto-g.bg2.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema4/img07.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p Los sitios naturales abarcan áreas geográficas y recursos de alto valor paisajístico o ambiental, tales como montañas, ríos, lagunas, bosques, desiertos, cavernas o costas. Estos espacios ofrecen oportunidades para el turismo de naturaleza, aventura y ecoturismo, promoviendo el contacto responsable con el entorno y fomentando la conservación ambiental.
          br
          br
          | En conjunto, los atractivos turísticos tanto naturales como culturales constituyen la base sobre la cual se estructura la oferta turística de un destino, permitiendo su desarrollo sostenible y la generación de beneficios económicos, sociales y culturales para las comunidades receptoras.

    .tarjeta.bgvideo.p-3.mb-2
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/Tema4/img08.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1.colorvideo Metodología para la elaboración del inventario de atractivos turísticos 2010
              p.mb-0.text-white Diríjase al siguiente enlace donde podrá apreciar el documento. 
            .col-sm-auto
              a.boton.bg-7.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    separador
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-3.col-8.col-md-6.mb-3
        img(src="@/assets/curso/Tema4/img09.svg")
      .col-lg-9
        p.bg3.p-4 Los destinos turísticos en el mundo están conformados por una diversidad de atractivos y recursos que, por sus características naturales o culturales, aportan un valor distintivo a cada territorio. Estos atractivos constituyen la base del turismo, ya que representan el principal motivo de desplazamiento de los visitantes y son el eje sobre el cual se construyen las estrategias de desarrollo turístico. Su adecuada identificación, protección y promoción son esenciales para garantizar la sostenibilidad y competitividad de un destino en el mercado global.
        p Para lograr una planeación exitosa del turismo en un territorio, es indispensable conocer a fondo los atractivos disponibles, su localización, estado de conservación, accesibilidad, capacidad de carga y potencial de uso. Este proceso permite diseñar estrategias adecuadas de promoción, inversión y gestión del destino, además de definir con precisión el mercado objetivo. La planificación se desarrolla mediante los siguientes pasos:
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
        .col-lg-10
          .row
            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-primario.p-5
                .tarjeta-numerada__numero
                  .h2 1 
                p.text-center Identificación de los atractivos presentes en los destinos (naturales, culturales, tangibles e intangibles).

            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-secundario.p-5
                .tarjeta-numerada__numero
                  .h2 2
                p.text-center Recolección y sistematización de información detallada de cada atractivo.
                br

            .col-md-6.col-xl.mb-4.mb-xl-0
              .tarjeta-numerada.color-acento-contenido.p-5
                .tarjeta-numerada__numero
                  .h2 3
                p.text-center Jerarquización y categorización según su relevancia, singularidad y potencial de aprovechamiento turístico.
    p Para llevar a cabo el inventario turístico, se emplea una ficha técnica como instrumento de recopilación, la cual debe contener elementos básicos como: nombre, ubicación, fotografía actual, características principales, accesibilidad, aforo, precio (si aplica), estado de conservación, calidad del entorno, señalización, afluencia de visitantes y evaluación general. Este registro permite elaborar diagnósticos precisos y facilitar la toma de decisiones en materia de promoción, conservación y desarrollo de productos turísticos.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido.mb-5
      h2 4.1  Principios de sostenibilidad

    .bloque-texto-g.bloque-texto-g--inverso.bg22.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema4/img10.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La sostenibilidad en el turismo hace referencia al desarrollo equilibrado de las actividades turísticas, integrando los aspectos ambientales, socioculturales y económicos para asegurar la conservación de los recursos naturales y culturales, el bienestar de las comunidades locales y la rentabilidad a largo plazo.
          br
          br
          | Según la Organización Mundial del Turismo (OMT, 2005), el turismo sostenible es aquel que “tiene plenamente en cuenta las repercusiones actuales y futuras, económicas, sociales y medioambientales, para satisfacer las necesidades de los visitantes, de la industria, del entorno y de las comunidades anfitrionas”.

    p.mb-4 Entre los principios fundamentales de sostenibilidad turística se destacan:

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-3.col-8.col-md-5.mb-4
        img(src='@/assets/curso/Tema4/img11.png' alt='')
      .col-lg-9
        SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-3
                img(src='@/assets/curso/Tema4/1.svg' alt='')
            h5.text-center.bg4.p-1 Conservación del medio ambiente
            p.text-center Protección de los recursos naturales, la biodiversidad, el agua, el aire y el paisaje.
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-3
                img(src='@/assets/curso/Tema4/2.svg' alt='')
            h5.text-center.bg4.p-1 Preservación del patrimonio cultural
            p.text-center Respeto y valoración de la identidad, las tradiciones y expresiones culturales locales.
          
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-3
                img(src='@/assets/curso/Tema4/3.svg' alt='')
            h5.text-center.bg4.p-1 Equidad social y económica
            p.text-center Participación activa y justa de las comunidades locales en los beneficios del turismo.
          
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-3
                img(src='@/assets/curso/Tema4/4.svg' alt='')
            h5.text-center.bg4.p-1 Uso eficiente de los recursos
            p.text-center Fomento de prácticas responsables en el consumo de energía, agua y materiales.
          
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-3
                img(src='@/assets/curso/Tema4/5.svg' alt='')
            h5.text-center.bg4.p-1 Minimización de impactos negativos
            p.text-center Reducción de los efectos adversos en el entorno natural y social.
          
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-3
                img(src='@/assets/curso/Tema4/6.svg' alt='')
            h5.text-center.bg4.p-1 Educación y sensibilización
            p.text-center Fortalecimiento del compromiso ambiental y cultural en visitantes y prestadores.
            
          .tarjeta.bg1.p-4
            .row.justify-content-center.mb-3
              .col-6.col-md-3
                img(src='@/assets/curso/Tema4/7.svg' alt='')
            h5.text-center.bg4.p-1 Gestión responsable
            p.text-center Implementación de políticas públicas y estrategias de desarrollo integrales, sostenibles y participativas.
       
    .row.justify-content-end(data-aos="flip-up")
      .col-lg-12.col-12
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-11.col-lg-9.col-12
            .d-flex.align-items-center.mt-4
              h3.titulo3.py-2.w-card-text3 Aspectos clave para la integración de servicios turísticos con enfoque sostenible

    .row.justify-content-center.align-items-center.mb-2(data-aos="zoom-in-left")
      .col-lg-9.bg6.p-4.mb-3.py-5
        ul.lista-ul--color
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 Implementación de certificaciones ambientales y sociales (como #[em Rainforest Alliance, Biosphere,] entre otras).
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 Priorización de proveedores locales para fortalecer la economía regional y generar empleo.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 Respeto por las costumbres, el patrimonio y los recursos del territorio.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 Prevención de prácticas que fomenten el turismo masivo no controlado o afecten ecosistemas.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 Promoción del transporte limpio, uso de materiales sostenibles y alojamientos ecológicos.
            li.d-flex
              i.fas.fa-location-dot
              p.mb-0 Capacitación constante del personal en sostenibilidad y atención responsable.
           
      .col-lg-3.col-8.mb-4.col-md-6(data-aos="zoom-in-left")
        img(src='@/assets/curso/Tema4/img12.png', alt='')






</template>

<script>
export default {
  name: 'Tema4',
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
.circl-arrow .slyder-f__btn i
  font-size: 1.2rem
  background-color: #FF4A69
  //background-color: $color-acento-contenido
  //color: $white
  height: 46px
  width: 46px
  padding: 5px
  border-radius: 500px
  display: flex
  justify-content: center
  align-items: center
</style>
