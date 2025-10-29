<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo “El arte de planificar” constituye una guía práctica orientada a fortalecer los conocimientos necesarios para la integración de servicios dentro de una ruta turística. A lo largo de su desarrollo, aborda aspectos fundamentales como la infraestructura vial, la señalización, los criterios de seguridad, la oferta autóctona y las condiciones meteorológicas del destino, con el propósito de garantizar experiencias seguras y satisfactorias para los viajeros. Asimismo, promueve la comprensión de la importancia de los prestadores de servicios turísticos, su formalización y cumplimiento normativo, asegurando la calidad y confiabilidad de la oferta disponible.
    p De igual manera, este componente profundiza en la identificación y clasificación de atractivos turísticos, la elaboración de inventarios y la aplicación de principios de sostenibilidad como ejes para la planificación responsable. También enfatiza en la organización del itinerario, la estructura de las rutas y el transporte, integrando la documentación requerida y las pólizas necesarias para proteger al turista y a la empresa. Finalmente, resalta la relevancia de la planeación técnica y estratégica como herramienta esencial para coordinar los elementos que conforman una experiencia turística integral y segura.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
