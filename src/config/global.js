export default {
  global: {
    componenteFormativo: 'Conexión exitosa con el cliente',
    descripcionCurso:
      'Para prestar un buen servicio al cliente, es primordial entender la comunicación y los tipos que existen, con el fin de utilizarlos como herramientas a la hora de prestar alguna atención. La presentación personal y los valores organizacionales representan características que pueden llegar a marcar la diferencia en temas de atención al cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'La comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptualización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Comunicación exitosa: cualidades personales',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'La comunicación verbal o lingüística',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Comunicación escrita',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Principios básicos en la comunicación verbal',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'La comunicación no verbal',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Comunicación asertiva',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Escucha activa',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Protocolo y etiqueta empresarial',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Imagen y apariencia personal (imagen profesional)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Valores organizacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Beneficios de los valores organizacionales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Compromiso organizativo',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      /* {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      }, */
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'accesible. (Del lat. accesibĭlis). La accesibilidad es el grado en el que todas las personas pueden utilizar un objeto, visitar un lugar o acceder a un servicio, independientemente de sus capacidades.',
    },
    {
      termino: 'Brevedad',
      significado: 'centrarse en el tema.',
    },
    {
      termino: 'Claridad',
      significado:
        'evitar palabras ostentosas o expresiones técnicas y emplear párrafos y frases cortas.',
    },
    {
      termino: 'Comprensión',
      significado:
        'acción de comprender. Facultad, capacidad o perspicacia para entender y penetrar las cosas. Actitud comprensiva o tolerante. Conjunto de cualidades que integran una idea.',
    },
    {
      termino: 'Comprensión',
      significado: 'humanidad, sentimientos y raciocinio.',
    },
    {
      termino: 'Cortesía',
      significado:
        'demostración o acto con que se manifiesta la atención, respeto o afecto que tiene alguien a otra persona.',
    },
    {
      termino: 'Tangibles',
      significado:
        'que se puede percibir de manera precisa. Resultados tangibles.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, J. y Vargas, J. E. (2010). Comunicación asertiva. Network de Psicología Organizacional. México: Asociación Oaxaqueña de Psicología A.C.',
    },

    {
      referencia:
        'Baró, T. (2012). La gran guía del lenguaje no verbal. España: Editorial Paidós.',
    },

    {
      referencia:
        'Beverly, H. (2000). Sea Asertivo. México: Ediciones Gestión.',
    },

    {
      referencia:
        'Byrne, B. (1998). Psicología Social. Barcelona, España: Prentice Hall.',
    },

    {
      referencia:
        'Escuela para el Desarrollo Comercial para Tecnólogos. (2008). Manual de técnicas comerciales. España: Autor.',
    },

    {
      referencia:
        'Jimenez, J. El valor de los valores en las organizaciones. (3a ed.). Caracas 2010.',
    },

    {
      referencia:
        'Mehrabian, A. (2009). Nonverbal Communication. Estados Unidos: Aldine transaction.',
    },
    {
      referencia:
        'Muñoz, M. (2010). Protocolo y relaciones públicas. Madrid, España: Ediciones Paraninfo.',
    },

    {
      referencia:
        'Real Academia Española. (2015). Comunicación. Consultado el 16 de julio 2015, en http://lema.rae.es/drae/?val=comunicacion',
      link: ' http://lema.rae.es/drae/?val=comunicacion',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección general',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Luis Aguilar Camacho',
          cargo: '--',
          centro: '--',
        },
        {
          nombre: 'Marina Jaramillo Portillo',
          cargo: '--',
          centro: '--',
        },
        {
          nombre: 'Lucy Yaneth Rache Pérez',
          cargo: '--',
          centro: '--',
        },
        {
          nombre: 'Elsa Vargas Báez',
          cargo: '--',
          centro: '--',
        },
        {
          nombre: 'Luz Clarena Arias González ',
          cargo: '--',
          centro: '--',
        },
        {
          nombre: 'Carolina Jiménez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora web',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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
}
