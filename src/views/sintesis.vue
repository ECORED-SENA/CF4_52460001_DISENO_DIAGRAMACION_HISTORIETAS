<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-5.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis presenta los aspectos clave que deben conocerse para la publicación de historietas. Se divide en tres secciones principales: Políticas sobre derechos de autor y propiedad intelectual, que incluyen derechos de autor, propiedad intelectual y licencias Creative Commons, diferenciándose en derechos morales y patrimoniales; Métodos de impresión y producción, que abordan técnicas como impresión digital, impresión litográfica y otras técnicas, junto con el encuadernado y acabados; y las implicaciones de las publicaciones, que consideran efectos en los métodos de impresión, presupuesto (incluyendo insumos, costos e imprevistos), y el registro de las publicaciones, que puede ser ISSN o ISBN.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
