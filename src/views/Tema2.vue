<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Métodos de impresión y producción

    .row.justify-content-center.mb-4 
      .col-lg-9.my-3.order-1
        p(data-aos="fade-down") Existen diversos formatos y tipos de reproducción e impresión de las historietas. Por ello, antes de imprimir, se define el tamaño y las dimensiones de la historieta durante la maquetación, teniendo en cuenta los siguientes factores:
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center(titulo="Cantidad de impresiones")
            .col-lg-8.my-3
              p Definir la cantidad de impresiones permite identificar si la impresión será digital o litográfica. La impresión litográfica es adecuada para grandes cantidades de ejemplares a menor costo unitario, mientras que la impresión digital se utiliza para personalizar los contenidos y es ideal para tirajes pequeños.
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/24.png', alt='')    

          .row.justify-content-center(titulo="Tipo de impresión")
            .col-lg-8.my-3
              p Ayuda a determinar la cabida del papel y los márgenes de impresión.
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/25.png', alt='') 

          .row.justify-content-center(titulo="Material")
            .col-lg-8.my-3
              p Permite seleccionar los materiales adecuados para el cuadernillo y la portada de la historieta
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/26.png', alt='') 

          .row.justify-content-center(titulo="Tamaño comercial del papel")
            .col-lg-8.my-3
              p Facilita la selección de las dimensiones del cuadernillo y la portada externa de la historieta.
            .col-lg-4.my-3
              img.img-a.img-t(src='@/assets/curso/temas/27.png', alt='')                                           

      .col-lg-3.my-3.order-lg-2
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')    

    .row.bg7.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-start.mb-4
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4
                    h3.mb-0 Impresión digital

                .row.justify-content-center.mb-4 
                  .col-lg-8.my-3.order-1
                    p(data-aos="fade-down") En este tipo de impresión se eliminan los procedimientos de preimpresión o preparación. El documento digital pasa directamente a la impresora, de la cual sale el producto final de forma inmediata.

                    p(data-aos="fade-down") Asimismo, no son necesarios productos derivados de los procesos tradicionales, como la revelación de películas, planchas offset o dispositivos CTP, lo que permite evitar residuos químicos y ahorrar tiempo, dinero y logística.
                    .row.justify-content-center.bg3.brad.p-3(data-aos="fade-right")
                      .col-lg-auto
                        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='')        
                      .col.pt-lg-0.pt-md-4
                        p(data-aos="fade-down").mb-0 Una de las mayores ventajas de la impresión digital es la disponibilidad inmediata del material, ya que no requiere tiempo de secado o enfriamiento. El tóner utilizado es un polvo pigmentado compuesto por partículas microscópicas que se transfieren al papel y se secan térmicamente antes de salir de la impresora. 

                  .col-lg-4.my-3.order-lg-2
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='')     

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Impresión litográfica

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/31.png')})`}"
      )
      .bloque-texto-g__texto.p-5.bg8
        p.mb-0 La impresión litográfica se emplea para grandes tirajes y utiliza el revelado de planchas en cuatro colores. La tinta se aplica sobre las áreas reveladas mediante calandrias y luego se transfiere al papel. Aunque este tipo de impresión requiere varios procesos en el premontaje, la impresión es rápida y seriada.      

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h2 2.1 Otras técnicas de impresión

    .row.justify-content-center.mb-5(data-aos="fade-right")       
      .col.pt-lg-0.pt-md-4
        p(data-aos="fade-down").mb-0 A continuación, se describe diversos métodos de impresión utilizados en la producción de materiales gráficos, destacando sus características técnicas y aplicaciones. Estos procesos, que incluyen técnicas como sublimado, #[i hot stamping] y tampografía, permiten personalizar los acabados y optimizar la calidad de los productos impresos, adaptándose a diferentes materiales y finalidades. Cada método ofrece ventajas específicas en términos de durabilidad, estética y funcionalidad, lo que facilita la elección del proceso adecuado según los requisitos del proyecto de impresión.                                                       
      .col-lg-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.svg', alt='') 

    .row.bg9.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .bgw.brad.p-5.my-5(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Sublimado 
                    p Utiliza calor para transferir tinta a tarjetas de plástico, papel o lienzos. El proceso consiste en aplicar un color a la vez mediante una cinta con paneles de color. 
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/34.png', alt='')   
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4.fst-italic  Hot stamping 
                    p Método en seco que utiliza un troquel caliente y papel aluminio para transferir gráficos al área deseada. 
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/35.png', alt='')
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4.fst-italic  Cold stamping 
                    p Método en el que se utiliza un adhesivo para transferir una película de poliéster al material que se desea decorar.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/36.png', alt='')
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Impresión lenticular 
                    p Utiliza lentes de diferentes calibres para generar efectos de 3D y movimiento en el impreso. 
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/37.png', alt='')
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Tampografía
                    p Se emplea una emulsión fotosensible para revestir una placa, en la que se graba la imagen mediante un proceso químico. La imagen se cubre con tinta, que es retirada por una cuchilla. Luego, un tampón de silicona recoge la tinta del huecograbado y la transfiere a la pieza que será impresa por contacto. 
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/38.png', alt='')

    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido.mb-4(data-aos="zoom-in-left")
      h2 2.2 Tipos de encuadernados y acabados   

    p(data-aos="fade-down") Según el tamaño del libro y la cantidad de hojas, se pueden considerar diferentes tipos de encuadernación:  

    .row.bg10.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center        
              .col-lg-10          
                .row.justify-content-center.mb-4 
                  .col-lg-9.my-3.order-1
                    LineaTiempoD.color-primario(data-aos="fade-right")
                      .row.justify-content-center(numero="1" titulo="Encuadernación rústica o de tapa blanda")
                        .col-lg-8.my-3
                          p Comúnmente usada para novelas gráficas cortas, como el manga (historieta japonesa).
                        .col-lg-4.my-3
                          img.img-a.img-t(src='@/assets/curso/temas/41.png', alt='')    

                      .row.justify-content-center(numero="2" titulo="Rústica fresada")
                        .col-lg-8.my-3
                          p Las páginas se pegan a la cubierta. Es muy económica, pero no muy resistente, por lo que es recomendable para historietas de corta vida útil.
                        .col-lg-4.my-3
                          img.img-a.img-t(src='@/assets/curso/temas/42.png', alt='') 

                      .row.justify-content-center(numero="3" titulo="Rústica cosida")
                        .col-lg-8.my-3
                          p Las hojas se agrupan en cuadernillos que se cosen con hilo entre sí, y luego se pegan a la cubierta. Es muy resistente, pero su proceso manual la hace costosa.
                        .col-lg-4.my-3
                          img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='') 

                      .row.justify-content-center(numero="4" titulo="Rústica PUR")
                        .col-lg-8.my-3
                          p Similar a la rústica fresada, pero con un pegante mucho más resistente, ofreciendo una apariencia de encuadernación cosida.
                        .col-lg-4.my-3
                          img.img-a.img-t(src='@/assets/curso/temas/44.png', alt='') 

                      .row.justify-content-center(numero="5" titulo="Encuadernación con portada dura o cartoné")
                        .col-lg-8.my-3
                          p Utilizada en historietas europeas, libros de gran tamaño y ediciones especiales. La encuadernación rústica (PUR o cosida) se une a una cobertura gruesa, generalmente de cartón piedra recubierto de papel impreso.
                        .col-lg-4.my-3
                          img.img-a.img-t(src='@/assets/curso/temas/45.png', alt='') 

                      .row.justify-content-center(numero="6" titulo="Grapado")
                        .col-lg-8.my-3
                          p Una opción económica para pocas hojas, que se grapan en el centro. La portada suele ser más gruesa y puede plastificarse.
                        .col-lg-4.my-3
                          img.img-a.img-t(src='@/assets/curso/temas/46.png', alt='') 

                      .row.justify-content-center(numero="7" titulo="<i>Wire-o</i> (gusanillo)")
                        .col-lg-8.my-3
                          p Las hojas se unen mediante anillos dobles de alambre, previo perforado. Es similar a la encuadernación en espiral, pero con alambre doble.
                        .col-lg-4.my-3
                          img.img-a.img-t(src='@/assets/curso/temas/47.png', alt='') 

                      .row.justify-content-center(numero="8" titulo="Encuadernación artesanal")
                        .col-lg-8.my-3
                          p Implica detalles y acabados personalizados para ediciones especiales y limitadas. Su proceso es completamente manual, lo que incrementa su costo de fabricación.
                        .col-lg-4.my-3
                          img.img-a.img-t(src='@/assets/curso/temas/48.png', alt='')                                                                                                                                   

                  .col-lg-3.my-3.order-lg-2
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.png', alt='')                                      
                                                      
</template>

<script>
export default {
  name: 'Tema2',
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
