export default {
  global: {
    componenteFormativo: 'Publicación de historietas',
    descripcionCurso:
      'El componente formativo aborda los derechos de autor, la propiedad intelectual y las licencias Creative Commons en la publicación de historietas. Explica métodos de impresión (digital, litográfica, sublimado) y tipos de encuadernación (rústica, tapa dura, <i>wire-o</i>). También incluye consideraciones sobre el presupuesto, registro ISSN e ISBN, y el control de calidad en las publicaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Políticas sobre derechos de autor y propiedad intelectual ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Creative Commons (CC)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Derechos de autor',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métodos de impresión y producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Otras técnicas de impresión',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de encuadernados y acabados',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Publicaciones impresas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/52460001_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Políticas sobre derechos de autor y propiedad intelectual.',
      referencia:
        'Bibliotecas Duoc UC (2018). Propiedad Intelectual (Derecho de Autor y Propiedad Industrial). [Archivo de video] YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tgDVLvTen5Y',
    },
    {
      tema: 'Creative Commons (CC).',
      referencia: 'Creative Commons. (2024). Licencias.',
      tipo: 'Página',
      link: 'https://co.creativecommons.net/tipos-de-licencias/',
    },
    {
      tema: 'Derechos de autor.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2021). Derechos de autor. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uKZZxlT4F5M',
    },
    {
      tema: 'Métodos de impresión y producción.',
      referencia:
        'Richie Blared. (2021). Sistemas de Impresión - TECNOLOGÍA GRÁFICA.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fUqGlGFSQgo',
    },
    {
      tema: 'Tipos de encuadernados y acabados.',
      referencia:
        'Crehana. (2020).   ENCUADERNAR LIBROS: Tipos de Encuadernación. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=c0w3vMnUJZ8',
    },
    {
      tema: 'Publicaciones impresas.',
      referencia:
        'Autores Editores . (2019). ¿Qué es y para que sirve un ISBN? [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XXONgFysi6Q',
    },
  ],
  glosario: [
    {
      termino: 'Creative Commons',
      significado:
        'licencias que permiten compartir obras con ciertos derechos reservados.',
    },
    {
      termino: 'Derechos de autor',
      significado:
        'protección legal para obras creativas como música, literatura y cine.',
    },
    {
      termino: 'Derechos morales',
      significado:
        'vínculo personal del autor con su obra, inalienables y perpetuos.',
    },
    {
      termino: 'Encuadernación artesanal',
      significado:
        'tipo de encuadernación personalizada, de proceso manual y más costosa.',
    },
    {
      termino: 'Encuadernación rústica',
      significado:
        'encuadernación de tapa blanda, económica y utilizada en proyectos cortos.',
    },
    {
      termino: 'Impresión digital',
      significado:
        'método de impresión directa desde un archivo digital sin preimpresión.',
    },
    {
      termino: 'Impresión litográfica',
      significado:
        'proceso de impresión para grandes tirajes a menor costo unitario.',
    },
    {
      termino: 'ISBN',
      significado:
        'Número de identificación internacional para libros, impresos o digitales.',
    },
    {
      termino: 'ISSN',
      significado:
        'Número de identificación para publicaciones seriadas, como revistas.',
    },
    {
      termino: 'Propiedad intelectual',
      significado:
        'derechos sobre creaciones del ingenio humano, como patentes y marcas.',
    },
  ],
  referencias: [
    {
      referencia: 'Creative Commons. (2024). Licencias.',
      link: 'https://co.creativecommons.net/tipos-de-licencias/',
    },
    {
      referencia:
        'Gubern, R. (1972). El lenguaje de los cómics. Barcelona, Península.',
    },
    {
      referencia:
        'McCloud, S. (2005). Entender el cómic. El arte invisible. Bilbao, Astiberri.',
    },
    {
      referencia:
        'McCloud, S. (2007). Hacer cómics: secretos narrativos del cómic, el manga y la novela gráfica. Bilbao, Astiberri.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernán Mauricio Rodríguez',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
