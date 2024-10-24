<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Políticas sobre derechos de autor y propiedad intelectual 

    p(data-aos="fade-down") La propiedad intelectual abarca las creaciones fruto del ingenio humano y se divide en dos áreas principales:  

    .row.justify-content-center.mb-4 
      .col-lg-5.my-3
        .bg2.brad.h-100.p-4(data-aos="fade-left")
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='')
          h5(data-aos="fade-left") Propiedad industrial
          p(data-aos="fade-down") Incluye patentes de invención, diseños industriales, marcas e indicaciones geográficas.

      .col-lg-5.my-3
        .bg2.brad.h-100.p-4(data-aos="fade-right")
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')
          h5(data-aos="fade-left") Derecho de autor
          p(data-aos="fade-down") Cubre películas, música, obras literarias (novelas, poemas), teatrales, artísticas (dibujos, pinturas, fotografías y esculturas), y diseños arquitectónicos.

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h2 1.1 Creative Commons (CC) 

    .row.justify-content-center.mb-4 
      .col-lg-8.my-3.order-1
        p(data-aos="fade-down") #[b Creative Commons] es un proyecto global que proporciona un modelo legal de licencias que facilita la distribución y el uso de contenidos a través de la web de forma sencilla. Al crear una publicación, como una historieta, los derechos reservados de ese contenido están protegidos; cualquier persona que desee publicarlo, distribuirlo o modificarlo necesita la autorización del autor. 
        .row.justify-content-center.bg3.brad.p-3(data-aos="fade-right")
          .col-lg-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.svg', alt='')        
          .col.pt-lg-0.pt-md-4
            p(data-aos="fade-down").mb-0 Las obras licenciadas bajo #[b Creative Commons] mantienen los derechos de autor, pero de manera diferente: al acceder a un recurso con esta licencia, es posible utilizarlo sin necesidad de obtener un permiso expreso del autor.  

      .col-lg-4.my-3.order-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')        

    .row.justify-content-center.mb-4
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')           
      .col-lg-8.my-3
        p(data-aos="fade-down") Con una licencia #[b Creative Commons], el autor puede modificar los términos y condiciones de los derechos de autor de su obra, pasando de "Todos los derechos reservados" a "Algunos derechos reservados". Este proyecto busca fomentar una cultura libre que permita compartir obras artísticas, culturales e intelectuales.

        p(data-aos="fade-down") A continuación,  describe las diferentes licencias de #[b Creative Commons], especificando los permisos y restricciones aplicables para la reproducción, distribución, y creación de obras derivadas, así como las condiciones de reconocimiento de la autoría.
     
    .row.bg4.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.mb-4
              .col-lg-4.my-3
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')
              .col-lg-8.my-3
                SlyderF.mb-2(columnas="col-lg-6")
                  .bgw.sha.brad1.p-4.h-100
                    .row.justify-content-center.mb-3
                      .col-8
                        img.img-a.img-t(src='@/assets/curso/temas/12.png' alt='AvatarTop')
                    .row.justify-content-center.mb-3
                      .col-auto.bgt.px-3.py-1                        
                        h5.mb-0.text-center CC BY
                    p.mb-0 Se permite la reproducción total o parcial, la distribución, la comunicación pública de la obra y la creación de obras derivadas, incluso con fines comerciales, siempre y cuando se reconozca la autoridad de la obra original.  

                  .bgw.sha.brad1.p-4.h-100
                    .row.justify-content-center.mb-3
                      .col-8
                        img.img-a.img-t(src='@/assets/curso/temas/13.png' alt='AvatarTop')
                    .row.justify-content-center.mb-3
                      .col-auto.bgt.px-3.py-1                        
                        h5.mb-0.text-center CC BY-NC
                    p.mb-0 Se permite la reproducción total o parcial, la distribución, la comunicación pública de la obra y la creación de obras derivadas, siempre que no sea con fines comerciales y que se reconozca la autoridad de la obra original. 

                  .bgw.sha.brad1.p-4.h-100
                    .row.justify-content-center.mb-3
                      .col-8
                        img.img-a.img-t(src='@/assets/curso/temas/14.png' alt='AvatarTop')
                    .row.justify-content-center.mb-3
                      .col-auto.bgt.px-3.py-1                        
                        h5.mb-0.text-center CC BY-NC-SA
                    p.mb-0 Se permite la reproducción total o parcial, la distribución, la comunicación pública de la obra y la creación de obras derivadas, siempre que no sea con fines comerciales y que se distribuyan bajo la misma licencia que regula la obra original. Es necesario que se reconozca la autoridad de la obra original. 

                  .bgw.sha.brad1.p-4.h-100
                    .row.justify-content-center.mb-3
                      .col-8
                        img.img-a.img-t(src='@/assets/curso/temas/15.png' alt='AvatarTop')
                    .row.justify-content-center.mb-3
                      .col-auto.bgt.px-3.py-1                        
                        h5.mb-0.text-center CC BY-NC-ND
                    p.mb-0 Se permite a otros descargar las obras y compartirlas con otros siempre y cuando se dé crédito al autor, pero no permiten cambiarlas de forma alguna, ni usarlas comercialmente. Es la más restrictiva. 

                  .bgw.sha.brad1.p-4.h-100
                    .row.justify-content-center.mb-3
                      .col-8
                        img.img-a.img-t(src='@/assets/curso/temas/16.png' alt='AvatarTop')
                    .row.justify-content-center.mb-3
                      .col-auto.bgt.px-3.py-1                        
                        h5.mb-0.text-center CC BY-SA
                    p.mb-0 Se permite la reproducción total o parcial, la distribución, la comunicación pública de la obra y la creación de obras derivadas, incluso con fines comerciales, siempre y cuando éstas se distribuyan bajo la misma licencia que regula la obra original y se reconozca la autoridad de la obra original. 

                  .bgw.sha.brad1.p-4.h-100
                    .row.justify-content-center.mb-3
                      .col-8
                        img.img-a.img-t(src='@/assets/curso/temas/17.png' alt='AvatarTop')
                    .row.justify-content-center.mb-3
                      .col-auto.bgt.px-3.py-1                        
                        h5.mb-0.text-center CC BY-ND
                    p.mb-0 Se permite la redistribución, comercial o no comercial, siempre y cuando la obra circule íntegramente y sin cambios, dándote crédito. 

                p(data-aos="fade-down") Nota. Creative Commons. (2024).                            

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h2 1.2 Derechos de autor

    .row.justify-content-center.mb-4 
      .col-lg-8.my-3.order-1
        p(data-aos="fade-down") Las leyes colombianas otorgan derechos de autor sobre las formas en que se expresan las ideas (no protegen las ideas, métodos ni procedimientos en sí, sino su manifestación concreta a través de lenguajes, anotaciones, grabaciones u otros medios que permitan su reproducción). Estos derechos no requieren registro alguno y tienen una duración que abarca toda la vida del autor, más 80 años después de su fallecimiento, tras lo cual la obra pasa a dominio público.
        .row.justify-content-center(data-aos="fade-right")
          .col-lg-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.svg', alt='')        
          .col.pt-lg-0.pt-md-4
            p(data-aos="fade-down") Aunque el registro no es obligatorio, es recomendable para proporcionar mayor seguridad a los titulares de los derechos de la obra. Este trámite se puede realizar ante la Dirección Nacional de Derecho de Autor.

            p(data-aos="fade-down").mb-0 Cabe destacar que estos derechos protegen las creaciones literarias, científicas y artísticas sin juzgar su valor, incluyendo las historietas.

      .col-lg-4.my-3.order-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.png', alt='')   

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Derechos morales    

    .row.justify-content-center.bg5.h-100.p-0.mb-5
      .col-lg-7.my-lg-0.my-md-3.j1
        .p-3
          .row.justify-content-center(data-aos="fade-right")
            .col-lg-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.svg', alt='')        
            .col.pt-lg-0.pt-md-4
              p(data-aos="fade-down").mb-0 Los derechos morales se refieren al vínculo personal entre el autor y su obra. Son perpetuos e irrenunciables. El autor tiene la facultad de decidir sobre la divulgación y modificación de su creación, y puede exigir que se reconozca su autoría en cualquier uso, ya sea con su nombre, de forma anónima o bajo un seudónimo.

      .col-lg-5.my-lg-0.my-md-3.p-0
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='')  

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Derechos patrimoniales   

    .row.justify-content-center(data-aos="fade-right")       
      .col.pt-lg-0.pt-md-4
        p(data-aos="fade-down").mb-0 Los derechos patrimoniales otorgan al autor la facultad de obtener beneficios económicos derivados de la explotación de su obra por un periodo determinado por la ley. Con estos derechos, el autor puede autorizar o prohibir la reproducción, distribución pública por cualquier medio, así como el alquiler, cesión, licencia o venta de los derechos para fines comerciales y lucrativos.                                                          
      .col-lg-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.svg', alt='')         

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
