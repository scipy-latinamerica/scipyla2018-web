
(function($) {
  var base_url_sep = '/2017/'
  var sep_index = $.location.pathname.indexOf(base_url_sep)
  var url_steps = (sep_index >= 0)?
    $.location.pathname.slice(sep_index + base_url_sep.length).split('/') :
    $.location.pathname.slice(1).split('/')
  if (url_steps.length) {
    var last_step = url_steps[url_steps.length - 1]
    if (!last_step.length || last_step.match(/.html?$/g))
      url_steps.pop()
  }
  var page_level = ''
  for (var i = 0; i < url_steps.length; ++i)
    page_level += '../'
  $.page_level = page_level

  var mainnav_data = [
    { caption: { es: 'Inicio', en: 'Home'},
      id: 'home',
      items: [
        { href: '#about',
          id: 'about',
          caption: { es: 'Acerca de SciPyLA 2017', en : 'About SciPyLA 2017' }},
        { href: '#venue',
          id: 'venue',
          caption: { es: 'Sede', en : 'Venue' }},
        { href: '#org',
          id: 'org',
          caption: { es: 'Organización', en : 'Organizers' }},
        { href: '#timeline',
          id: 'timeline',
          caption: { es: 'Historia', en : 'Timeline' }},
        { href: '#gallery',
          id: 'gallery',
          caption: { es: 'Galería', en : 'Gallery' }},
        { href: '#traction',
          id: 'traction',
          caption: { es: 'Audiencia', en : 'Audience' }},
        { href: '#signup',
          id: 'signup',
          caption: { es: 'Reservar ticket', en : 'Buy tickets' }},
        { href: '#contact',
          id: 'contact',
          caption: { es: 'Contacto', en : 'Contact us' }}
      ]
    },
    { caption: { es: 'Programa', en: 'Proram'},
      id: 'program',
      items: [
        { href: 'register',
          id: 'register',
          caption: { es: 'Reservar tickets', en : 'Buy tickets' }},
        { href: 'program/submissions',
          id: 'submissions',
          caption: { es: 'Actividades aceptadas', en : 'Submissions' }},
        { href: 'schedule',
          id: 'schedule',
          caption: { es: 'Agenda de actividades', en : 'Schedule' }},
        { isDivider: true },
        { href: null,
          id: '',
          caption: { es: 'Talleres', en : 'Workshops' }},
        { href: 'tracks/bio',
          id: 'bio',
          caption: { es: 'Bioinformática', en : 'Bioinformatics' }},
        { href: 'tracks/physics',
          id: 'physics',
          caption: { es: 'Física', en : 'Physics' }},
        { href: 'tracks/elect',
          id: 'elect',
          caption: { es: 'Ingenería Eléctrica y Automatiazción',
                     en : 'Electric Engineering and Process Automation' }},
        { href: 'tracks/econ',
          id: 'econ',
          caption: { es: 'Economía e Investigación de Operaciones',
                     en : 'Economics and Operations Research' }},
        { href: 'tracks/tech',
          id: 'tech',
          caption: { es: 'Tecnologías de Cómputo Emergentes',
                     en : 'iEmerging Computing Technologies' }},
        { href: 'tracks/social',
          id: 'social',
          caption: { es: 'Ciencias Sociales y Humanidades',
                     en : 'Digital Humanities and Social Sciences' }},
        { isDivider: true },
        { href: 'tracks/cfp',
          id: 'cfp',
          caption: { es: 'Instrucciones de publicación',
                     en : 'Call for papers' }},
        { href: 'forms/reviewers',
          id: 'form_reviewers',
          caption: { es: 'Llamado a revisores académicos',
                     en : 'Call for academic reviewers' }},
        { href: 'forms/poster',
          id: 'form_poster',
          caption: { es: 'Envío de posters', en : 'Call for posters' }},
        { href: 'forms/activity',
          id: 'form_talk',
          caption: { es: 'Propuestas de charlas', en : 'Propose your talk' }},
        { href: 'forms/activity',
          id: 'form_tutorial',
          caption: { es: 'Propuestas de talleres', en : 'Propose tutorial' }}
      ]
    },
    { caption: { es: 'Comunidad', en: 'Community' },
      id: 'community',
      items: [
        { href: 'organizers',
          id: 'org',
          caption: { es: 'Organizadores', en : 'Organizers' }},
        { href: 'sponsors',
          id: 'sponsor',
          caption: { es: 'Patrocinadores', en : 'Sponsors' }},
        { href: 'sponsors/prospectus',
          id: 'prospectus',
          caption: { es: 'Prospecto de patrocinio', en : 'Sponsor prospectus' }},
        { href: 'sponsors/levels',
          id: 'levels',
          caption: { es: 'Niveles de patrocinio', en : 'Sponsorship levels' }},
        { isDivider: true },
        { href: 'ambassadors',
          id: 'amb',
          caption: { es: 'Embajadores SciPyLA', en : 'SciPyLA Ambassadors' }},
        { href: 'forms/ambassadors',
          id: 'form_amb',
          caption: { es: 'Llamado a embajadores', en : 'Call for Ambassadors' }},
        { isDivider: true },
        { href: 'community',
          id: 'friends',
          caption: { es: 'Amigos de SciPyLA 2017', en : 'Friends of SciPyLA 2017' }},
        { href: 'forms/community',
          id: 'forms_friends',
          caption: { es: 'Anuncia tu comunidad', en : 'Advertise your community' }}
      ]
    },
    { caption: { es: 'Participa', en: 'Get involved'},
      id: 'participate',
      items: [
        { href: 'register',
          id: 'register',
          caption: { es: 'Reservar tickets', en : 'Buy tickets' }},
        { href: 'forms/financial-aid',
          id: 'finaid',
          caption: { es: 'Ayuda financiera', en : 'Financial aid form' }},
        { href: 'faq#financial-aid',
          id: 'faq_finaid',
          caption: { es: 'Preguntas - Ayuda financiera', en : 'Financial aid FAQ' }},
        { isDivider: true },
        { href: 'forms/reviewers',
          id: 'form_reviewer',
          caption: { es: 'Llamado a revisores académicos', en : 'Call for acadmic reviewers' }},
        { href: 'forms/poster',
          id: 'form_poster',
          caption: { es: 'Envío de posters', en : 'Call for posters' }},
        { href: 'forms/activity',
          id: 'form_talk',
          caption: { es: 'Propuestas de charla', en : 'Propose your talk' }},
        { href: 'forms/activity',
          id: 'form_meetup',
          caption: { es: 'Propuestas de meetups', en : 'Propose meetups' }},
        { href: 'forms/activity',
          id: 'form_sprint',
          caption: { es: 'Proyectos para sprints', en : 'Sprint submission form' }},
        { href: 'forms/activity',
          id: 'form_tutorial',
          caption: { es: 'Propuestas de talleres', en : 'Propose tutorial' }},
        { isDivider: true },
        { href: 'diversity',
          id: 'diversity',
          caption: { es: 'Diversidad', en : 'Diversity' }},
        { href: 'coc',
          id: 'coc',
          caption: { es: 'Código de conducta', en : 'Code of conduct' }},
        { href: 'privacy',
          id: 'privacy',
          caption: { es: 'Política de privacidad', en : 'Privacy statement' }},
        { isDivider: true },
        { href: 'forms/joinus',
          id: 'form_join',
          caption: { es: 'Únete al equipo', en : 'Join the team' }}
      ]
    },
    { caption: { es: 'Sede', en: 'Venue'},
      id: 'venue',
      items: [
        { href: 'venue',
          id: 'about',
          caption: { es : 'Acerca de la sede', en : 'About the venue' }},
        { href: 'venue/lodging',
          id: 'lodging',
          caption: { es : 'Hospedaje', en : 'Lodging' }},
        { href: 'venue/city',
          id: 'city',
          caption: { es : 'Ciudad anfitriona', en : 'Host city' }},
        { href: 'venue/travel',
          id: 'travel',
          caption: { es : 'Prepare su viaje',
                     en : 'Travel instructions' }}
      ]
    }
  ]

  var app = angular.module('scipyla.mainnav', [])

  function getlang() {
    // TODO: Current language for translations
    return 'es';
  }

  function getActiveRoute() {
    if ($.route)
      return $.route
    return {section: null, page: null}
  }

  app.controller('MainNavCtl', ['$scope',
    function($scope) {
      $scope.lang = getlang()
      $scope.mainnav = mainnav_data
      $scope.route = getActiveRoute()
      $scope.hprefix = $.page_level || ''
    }
  ])

}) (window)

