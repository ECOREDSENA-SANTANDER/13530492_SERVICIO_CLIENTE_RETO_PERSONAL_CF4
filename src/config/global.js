export default {
  global: {
    componenteFormativo:
      'Calidad como garantía de la excelencia en el servicio al cliente',
    descripcionCurso:
      'El mejor indicador de buen servicio es la satisfacción del cliente, existen principios y factores que determinan la calidad: darle una trazabilidad al servicio, realizar una atención perfecta, tener en cuenta las evaluaciones del cliente y tener estipulada claramente una política de calidad hacen posible dar garantía de un excelente servicio.',
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
        titulo: 'Calidad en el servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principios de la calidad del servicio',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Factores que determinan la calidad de los servicios',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Evaluación del cliente',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Medición de satisfacción del servicio',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Siete pecados capitales o errores en la calidad del servicio',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Atención perfecta',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Trazabilidad del servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Clases de trazabilidad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Momento de la trazabilidad en el sistema',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Beneficios de la trazabilidad',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ventajas de la aplicación de la trazabilidad',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Herramientas para la trazabilidad',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Políticas de calidad',
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
      termino: 'Asequibilidad',
      significado:
        'Facilidad para obtener en el momento propicio el producto o servicio.',
    },
    {
      termino: 'Asertividad',
      significado:
        'habilidad social que poseen ciertos individuos de comunicar y defender sus propios derechos e ideas de manera adecuada y respetando las de los demás.',
    },
    {
      termino: 'Autómata',
      significado:
        'Actuar en forma mecánica e impersonal (las mismas frases, las mismas palabras).',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'Posibilidad de una cosa o persona de estar presente cuando se la necesita.',
    },
    {
      termino: 'Proactividad',
      significado:
        'Capacidad de tomar la iniciativa y controlar nuestra conducta frente a las situaciones.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Propiedad que permite seguir el paso a paso de un producto, desde su origen hasta su ubicación actual.',
    },
  ],
  referencias: [
    {
      referencia:
        'De las Cuevas, V. (2006). Trazabilidad básico: funcionamiento del sistema de trazabilidad en una empresa. España: Ideas propias. ',
    },
    {
      referencia:
        'Dipole. (2013). Trazabilidad. Consultado el 15 de julio de 2015, en ',
      link: 'http://www.dipolerfid.es/Trazabilidad/',
    },
    {
      referencia:
        'Estategia Magazine. (2002). Calidad en la atención al cliente (II). Consultado el 15 de julio de 2015, en  ',
      link:
        'http://www.estrategiamagazine.com/marketing/calidad-en-la-atencion-al-cliente-ii-virtudes-atencion-perfecta-quejas-servicios-adicionales/',
    },
    {
      referencia:
        'FAO. (2009).Codex Alimentarios guía trazabilidad. Palermo, España: Autor. ',
    },
    {
      referencia:
        'Fleitman, J. (2000). Negocios exitosos: Cómo empezar, administrar y operar eficientemente un negocio. México D. C., México: McGraw-Hill Interamericana. ',
    },
    {
      referencia:
        'Kotler, P y Amstrong, G. (2004). Fundamentos de Marketing. México D. C., México: Pearson Educación. ',
    },
    {
      referencia:
        'Pinzón, R. (2010). Trazabilidad. Universidad Industrial de Santander. Bucaramanga, Colombia: Recitela. ',
    },
    {
      referencia:
        'Real Academia Española. (2015). Calidad. Consultado el 15 de julio de 2015, en ',
      link: 'http://lema.rae.es/drae/?val=calidad',
    },
    {
      referencia:
        'Sánchez, Ricardo. (2008). Introducción a la Trazabilidad. Buenos Aires, Argentina: El Escriba. ',
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
          cargo: 'Experto temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Marina Jaramillo Portillo',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Lucy Yaneth Rache Pérez',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Elsa Vargas Báez',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luz Clarena Arias González',
          cargo: 'Guionista - Línea de Producción',
          centro: 'Centro Agroindustrial - Regional Quindío',
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
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
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
