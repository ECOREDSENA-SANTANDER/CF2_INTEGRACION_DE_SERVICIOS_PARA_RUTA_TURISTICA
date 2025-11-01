export default {
  global: {
    Name: 'El arte de planificar',
    Description:
      'El eje central de este componente consiste en presentar los procedimientos adecuados para la integración de servicios en la ruta turística, incluyendo aspectos como la infraestructura vial, los criterios de seguridad, la oferta autóctona del destino, los prestadores de servicios turísticos, los atractivos del lugar, los tipos de itinerario, los documentos requeridos para el transporte, el seguro de viaje y los procedimientos técnicos de planeación, entre otros. Mediante esta guía estructurada se abordarán temas fundamentales que contribuyen a una adecuada articulación de los servicios turísticos dentro de la ruta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Infraestructura vial ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Subtema 1',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Destino turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Oferta autóctona del destino',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Prestadores de servicios turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Normativa de formalización',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Oferta en el destino',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Atractivos turísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principios de sostenibilidad',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Itinerario turístico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Ruta turística',
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
        download: 'downloads/dist.pdf',
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
      tema: 'Inventario turístico.',
      referencia:
        'Formato único para la elaboración del inventario turístico. (2009). Ministerio de Comercio, Industria y Turismo. ',
      tipo: 'Formato',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/desarrollo-regional/inventarios-turisticos/formato-unico-para-la-elaboracion-de-inventarios-t/formato-unico-para-la-elaboracion-de-inventarios-turisticos-2009.pdf.aspx',
    },
    {
      tema: 'Atractivos turísticos.',
      referencia:
        'Metodología para la elaboración del inventario de atractivos turísticos. (2010). Ministerio de Comercio, Industria y Turismo.',
      tipo: 'Documento',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/desarrollo-regional/inventarios-turisticos/metodologia-para-la-elaboracion-del-inventario-de/metodologia-para-la-elaboracion-del-inventario-de-atractivos-2010.pdf.aspx ',
    },
  ],
  glosario: [
    {
      termino: 'Atractivo turístico',
      significado:
        'Atractivo turístico:	recurso natural o cultural que posee valor y singularidad, capaz de motivar el desplazamiento de visitantes y fortalecer la identidad del destino.',
    },
    {
      termino: 'Destino turístico',
      significado:
        'Destino turístico:	espacio planificado y gestionado que integra recursos naturales, culturales y servicios para ofrecer experiencias significativas y sostenibles.',
    },
    {
      termino: 'Infraestructura vial',
      significado:
        'conjunto de elementos físicos como carreteras, puentes y señalización que facilitan la conectividad y movilidad segura entre regiones y destinos.',
    },
    {
      termino: 'Integración de servicios',
      significado:
        'articulación estratégica de la oferta turística que combina alojamiento, transporte, gastronomía y actividades para brindar experiencias coherentes.',
    },
    {
      termino: 'Itinerario turístico',
      significado:
        'herramienta de planificación que organiza cronológicamente las actividades, lugares y tiempos del viaje para optimizar la experiencia del visitante.',
    },
    {
      termino: 'Oferta autóctona',
      significado:
        'conjunto de bienes, tradiciones y manifestaciones culturales propias de una región que reflejan su autenticidad y promueven la sostenibilidad local.',
    },
    {
      termino: 'Patrimonio cultural',
      significado:
        'conjunto de bienes materiales e inmateriales que representan la historia, tradiciones y valores de una comunidad, fortaleciendo su identidad.',
    },
    {
      termino: 'Prestadores de servicios turísticos',
      significado:
        'personas o empresas que ofrecen servicios como alojamiento, transporte, gastronomía y recreación, garantizando calidad y seguridad.',
    },
    {
      termino: 'Ruta turística',
      significado:
        'recorrido planificado que conecta diversos atractivos naturales y culturales bajo un tema central, promoviendo una experiencia integral del destino.',
    },
    {
      termino: 'Sostenibilidad turística',
      significado:
        'principio que busca equilibrar los aspectos ambientales, sociales y económicos del turismo para garantizar su permanencia y beneficio colectivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, M., & Aranda, D. (2017). Turismo y cambio climático: adaptación y mitigación en destinos turísticos. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Font, X., & Harris, C. (2004). Sustainable tourism: A global perspective. Routledge.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Vías (INVIAS). (2017). Manual de diseño geométrico de carreteras. INVIAS.',
      link: '',
    },
    {
      referencia:
        'Mariscal, N. M. (2023). El inventario turístico y su importancia. Entorno Turístico.',
      link:
        'https://www.entornoturistico.com/el-inventario-turistico-y-su-importancia/',
    },
    {
      referencia:
        'Metodología para la elaboración del inventario de atractivos turísticos. (2010). Ministerio de Comercio, Industria y Turismo.',
      link:
        'https://www.mincit.gov.co/getattachment/minturismo/calidad-y-desarrollo-sostenible/desarrollo-regional/inventarios-turisticos/metodologia-para-la-elaboracion-del-inventario-de/metodologia-para-la-elaboracion-del-inventario-de-atractivos-2010.pdf.aspx',
    },
    {
      referencia:
        'ICONTEC. (2006). Norma Técnica Sectorial Colombiana NTS-TS 001-1: Destinos turísticos de Colombia: Requisitos de sostenibilidad.',
      link: 'https://fontur.com.co/sites/default/files/2020-11/NTS_TS001_1.pdf',
    },
    {
      referencia:
        'Organización Mundial del Turismo (OMT). (2005). Hacer del turismo una herramienta eficaz para el desarrollo.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial del Turismo (OMT). (2008). Entender el turismo. Organización Mundial del Turismo.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial del Turismo (OMT). (2012). Turismo cultural y desarrollo local: Manual de desarrollo turístico basado en los recursos culturales locales.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (s. f.). Preguntas frecuentes relacionadas con formalización turística.',
      link:
        'https://www.mincit.gov.co/minturismo/analisis-sectorial-y-promocion/preguntas-frecuentes-relacionadas-con-formalizacion',
    },
    {
      referencia: 'RNT. (s. f.). Registro Nacional de Turismo.',
      link: 'https://rnt.confecamaras.co/home',
    },
    {
      referencia:
        'Vera Rebollo, J. F., & López Palomeque, F. (2016). Análisis territorial del turismo. Ariel.',
      link: '',
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
          nombre: 'Aurora Milena Parada Ortega',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
