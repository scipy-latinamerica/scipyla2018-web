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

    var app = angular.module('scipyla', []);

    /// availableLanguages[ 0 ] hosts the prefered language
    var availableLanguages = [ 'pt', 'es' ];

    function getlang() {

        var lg = window.localStorage.getItem('scipy_lang');

        if ( availableLanguages.indexOf(lg) > -1 ) {
            return lg;
        }

        return availableLanguages[ 0 ];
    }

    function getActiveRoute() {
        if ($.route)
            return $.route;
        return {section: null, page: null}
    }

    app.controller('MainCtl', [
        '$scope',
        '$http',
        function ($scope, $http) {

            $scope.lang = getlang();

            $scope.$watch('lang', function(lg) {

                $http
                .get($scope.hprefix + 'assets/translations/' + lg + '.json')
                .success(function(data) {

                    $scope.mainnav = data.mainnav_data;
                    $scope.carousel = data.carousel;
                    $scope.scipy_america = data.scipy_america;
                    $scope.curitiba = data.curitiba;
                    $scope.marketing = data.marketing;
                    $scope.activities = data.activities;
                    $scope.gallery = data.gallery;
                    $scope.audience = data.audience;
                    $scope.geographicArea = data.geographicArea;
                    $scope.scipy2018 = data.scipy2018;
                    $scope.inscription = data.inscription;
                    $scope.footer = data.footer;

                    $scope.footer.thisYear = (new Date()).getFullYear();

                })
                .error(function(err) {
                    console.log('ERROR: ', err);
                });//*/

            });

            $scope.mainnav = {};
            $scope.route = getActiveRoute();
            $scope.hprefix = $.page_level || '';
            $scope.navTemplate = {
                url: $scope.hprefix + 'assets/views/menu_ppal.html'
            };

            $scope.setLang = function setLang(l) {

                if ( availableLanguages.indexOf(l) > -1 ) {
                    if ( $scope.lang != l ) {
                        $scope.lang = l;
                        window.localStorage.setItem('scipy_lang', l);
                    }
                } else {
                    $scope.lang = availableLanguages[ 0 ];
                    window.localStorage.setItem('scipy_lang', l);
                }

            };

        }
    ]);

})(window);

