<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Derechos de autor y métodos de impresión',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los derechos de autor, licencias Creative Commons, métodos de impresión, tipos de encuadernación y normativas relacionadas con la publicación de historietas.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué tipo de derechos se relacionan con los beneficios económicos derivados de la utilización de una obra?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Derechos patrimoniales.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Derechos morales.', esCorrecta: false },
            { id: 'c', texto: 'Creative Commons.', esCorrecta: false },
            { id: 'd', texto: 'Derechos de reproducción.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de impresión es más adecuada para grandes tirajes y costos más bajos por unidad?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Impresión digital.', esCorrecta: false },
            { id: 'b', texto: 'Impresión litográfica.', esCorrecta: true },
            { id: 'c', texto: 'Impresión sublimada.', esCorrecta: false },
            { id: 'd', texto: 'Impresión por tampografía.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es una ventaja importante de la impresión digital?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Genera residuos químicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El material está disponible de inmediato.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Es más costosa.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Requiere preimpresión con planchas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de encuadernación es comúnmente usada en novelas gráficas cortas?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Encuadernación con tapa dura.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Encuadernación rústica.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Encuadernación en <i>wire-o.</i>',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Encuadernación artesanal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el registro internacional para identificar publicaciones seriadas?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ISBN.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'ISSN.', esCorrecta: true },
            { id: 'c', texto: 'Creative Commons.', esCorrecta: false },
            { id: 'd', texto: 'Derechos patrimoniales.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué tipo de licencias permiten compartir obras con ciertos derechos reservados?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Derechos patrimoniales.', esCorrecta: false },
            { id: 'b', texto: 'Derechos morales.', esCorrecta: false },
            { id: 'c', texto: 'Creative Commons.', esCorrecta: true },
            { id: 'd', texto: 'Derechos de reproducción.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué se recomienda utilizar para proyectos con gráficos limpios y de alta calidad?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impresión en negro y un color adicional.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Impresión a policromía.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Impresión con <i>hot stamping.</i>',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Impresión lenticular.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Las leyes colombianas protegen las ideas y los métodos mediante el derecho de autor.',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La encuadernación artesanal es generalmente más económica que otros tipos de encuadernación.',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Las historietas no están protegidas por los derechos de autor según las leyes colombianas.',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
