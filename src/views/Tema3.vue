<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Publicaciones impresas  

    .row.bg11.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.align-items-center.py-2(data-aos="fade-right")
              .col-lg-auto
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/50.svg', alt='')        
              .col.pt-lg-0.pt-md-4
                p(data-aos="fade-down").mb-0 Las publicaciones impresas o digitales representan el producto final del diseño y la diagramación de las historietas. Para seleccionar el tipo de impresión adecuado, es fundamental considerar quién será el usuario, cuál es el método de divulgación y cuál es el alcance del proyecto. 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Efecto de los métodos de impresión en la elección del grafismo

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-8.my-3.order-1
        p(data-aos="fade-down") Las características particulares de cada trabajo, como la calidad de impresión, el tipo de soporte, el destino final y el número de copias, deben considerarse al elegir la impresión más apropiada y sus acabados, tales como el plastificado mate o brillante, repujados, relieves y detalles con #[i foil] metalizado.
        .row.justify-content-center
          .col-lg-5.my-lg-0.my-md-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.png', alt='') 

          .col-lg-7.my-lg-0.my-md-3.j1.bg1.h-100
            .p-3
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/52.png', alt='')
              p(data-aos="fade-down").mb-0 Se abordan los diversos métodos de impresión y producción de historietas, desde la impresión digital hasta la litográfica, así como otras técnicas especializadas. Estos procesos son esenciales para elegir el formato adecuado según las características del proyecto su audiencia. 
                          
      .col-lg-4.my-3.order-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/54.png', alt='') 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Registro ISSN – ISBN


    p(data-aos="fade-down") En el contexto internacional, existe un sistema de identificación para publicaciones periódicas y no periódicas: 

    .row.justify-content-center
      .col-lg-5.my-3
        .bg2.brad.h-100.p-4(data-aos="fade-left")
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/55.png', alt='')
          p(data-aos="fade-down") #[b ISSN:] Número Internacional Normalizado para Publicaciones Seriadas, creado por la Organización Internacional de Normalización (ISO) y gestionado por el Centro Internacional de ISSN, una organización intergubernamental. En Colombia, el Centro Nacional de ISSN, adscrito a la Biblioteca Nacional de Colombia, es el encargado de asignar los números ISSN a las publicaciones seriadas producidas en el paí

      .col-lg-5.my-3
        .bg2.brad.h-100.p-4(data-aos="fade-right")
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/56.png', alt='')
          p(data-aos="fade-down") #[b ISBN:] (#[i International Standard Book Number]) Sistema Internacional de Numeración para Publicaciones de tipo libro, que permite identificar cada título, ya sea impreso o digital, de acuerdo con su procedencia y el número del editor. En Colombia, el ISBN es otorgado por la Cámara Colombiana del Libro.

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
