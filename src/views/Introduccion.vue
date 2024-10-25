<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-9.my-3.order-1
        p(data-aos="fade-down") El componente formativo explora los aspectos fundamentales de la publicación de historietas, enfocándose en los derechos de autor, la propiedad intelectual y las normativas que rigen la difusión de contenido creativo. Estos temas son cruciales para garantizar la protección legal de las obras y para conocer las opciones disponibles en cuanto a licencias de uso.
        .row.justify-content-center.bg1.h-100.p-0
          .col-lg-5.my-lg-0.my-md-3.p-0
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='') 

          .col-lg-7.my-lg-0.my-md-3.j1
            .p-3
              img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')
              p(data-aos="fade-down").mb-0 Se abordan los diversos métodos de impresión y producción de historietas, desde la impresión digital hasta la litográfica, así como otras técnicas especializadas. Estos procesos son esenciales para elegir el formato adecuado según las características del proyecto y su audiencia.
                          
      .col-lg-3.my-3.order-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')
        
    .row.justify-content-center(data-aos="fade-right")
      .col-lg-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')        
      .col.pt-lg-0.pt-md-4
        p(data-aos="fade-down").mb-0 Finalmente, se revisan los distintos tipos de encuadernación y acabados que pueden aplicarse a las publicaciones, junto con las implicaciones presupuestarias. También se hace mención de los sistemas de registro ISSN e ISBN, que permiten identificar y controlar las publicaciones en el ámbito internacional.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
