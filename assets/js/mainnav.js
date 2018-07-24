(function ($) {
    var base_url_sep = '/2018/';
    var sep_index = $.location.pathname.indexOf(base_url_sep);
    var url_steps = (sep_index >= 0) ?
        $.location.pathname.slice(sep_index + base_url_sep.length).split('/') :
        $.location.pathname.slice(1).split('/');
    if (url_steps.length) {
        var last_step = url_steps[url_steps.length - 1];
        if (!last_step.length || last_step.match(/.html?$/g))
            url_steps.pop();
    }
    var page_level = '';
    for (var i = 0; i < url_steps.length; ++i)
        page_level += '../'
    $.page_level = page_level;

    var mainnav_data = [
        {
            caption: {pt: 'Início', es: 'Inicio', en: 'Home'},
            id: 'home',
            href: ''
        },
        {
            caption: {pt: 'Programação', es: 'Programa', en: 'Program'},
            id: 'program',
            items: [
                {
                    href: 'register',
                    id: 'register',
                    caption: {pt: 'Compre seu ingresso', es: 'Reservar tickets', en : 'Buy tickets' }
                },
                {
                    isDivider: true
                },
                {
                    href: 'cfp',
                    id: 'cfp',
                    caption: {pt: 'Chamada de trabalhos', es: 'Instrucciones de publicación', en : 'Call for papers' }
                }
            ]
        },
        {
            caption: {pt: 'Colabore', es: 'Participa', en: 'Get involved'},
            id: 'get_involved',
            items: [
                {
                    href: 'organizers',
                    id: 'organizers',
                    caption: {pt: 'Organizadores', es: 'Organizadores', en: 'Organizers'}
                },
                {
                    href: 'cfl',
                    id: 'call-for-location',
                    caption: {pt: 'Chamada a sede 2019', es: 'Llamada para sede 2019', en: 'Call for venue 2019'}
                },
                {
                    href: 'get_involved',
                    id: 'get_involved',
                    caption: {pt: 'Chamada à voluntários', es: 'Llamada para voluntarios', en: 'Call for volunteers'}
                },
                {
                    href: 'diversity',
                    id: 'diversity',
                    caption: {pt: 'Diversidades', es: 'Diversidad', en: 'Diversity'}
                }
            ]
        },
        {
            caption: { es: 'Sede', en: 'Venue', pt: 'Sede'},
            id: 'venue',
            items: [
                {
                    href: 'venue/lodging',
                    id: 'lodging',
                    caption: { es : 'Hospedaje', en : 'Lodging', pt: 'Hospedagem'}
                }
            ]
        },
        {
            caption: {pt: 'Ajuda', es: 'Ayuda', en: 'Help'},
            id: 'faq',
            items: [
                {
                    href: 'faq',
                    id: 'faq',
                    caption: {pt: 'FAQ', es: 'FAQ', en: 'FAQ'}
                },
                {
                    href: 'financial-aid',
                    id: 'financial-aid',
                    caption: {pt: 'Ajuda Financeira', es: 'Ayuda Financiera', en: 'Financial Aid'}
                }
            ]
        }
    ];

    var app = angular.module('scipyla.mainnav', []);

    function getlang() {
        // TODO: Current language for translations
        return 'pt';
    }

    function getActiveRoute() {
        if ($.route)
            return $.route;
        return {section: null, page: null}
    }

    app.controller('MainNavCtl', ['$scope',
        function ($scope) {
            $scope.lang = getlang();
            $scope.mainnav = mainnav_data;
            $scope.route = getActiveRoute();
            $scope.hprefix = $.page_level || '';
            $scope.template = {url: $scope.hprefix + 'assets/views/menu_ppal.html'};
        }
    ]);

})(window);

