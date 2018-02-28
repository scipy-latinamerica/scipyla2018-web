
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
    { caption: { pt: 'Início', es: 'Inicio', en: 'Home'},
      id: 'home',
      items: [
        { href: 'help',
          id: 'help',
          caption: { pt: 'Colabore', es: 'Colaborar', en : 'Help' }},
        { href: 'faq',
          id: 'faq',
          caption: { pt: 'FAQ', es: 'FAQ', en : 'FAQ' }}
      ]
    }
  ]

  var app = angular.module('scipyla.mainnav', [])

  function getlang() {
    // TODO: Current language for translations
    return 'pt';
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

