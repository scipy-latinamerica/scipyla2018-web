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

    var app = angular.module('scipyla', [ 'ngSanitize', 'mdMarkdownIt' ]);

    function getActiveRoute() {
        if ($.route)
            return $.route;
        return {section: null, page: null}
    }

    app.controller('MainCtl', [
        '$scope',
        '$http',
        function ($scope, $http) {

            /// availableLanguages[ 0 ] hosts the prefered language
            var availableLanguages = [ 'pt', 'es' ];

            $scope.getlang = function getlang() {

                var lg = window.localStorage.getItem('scipy_lang');

                if ( availableLanguages.indexOf(lg) > -1 ) {
                    return lg;
                }

                return availableLanguages[ 0 ];
            }

            $scope.lang = $scope.getlang();

            //console.log('LANG: ', $scope.lang);

            $scope.$watch('lang', function(lg) {

                $http
                    .get($scope.hprefix + 'assets/translations/general/' + lg + '.json')
                    .success(function(data) {

                        //console.log(lg, data);

                        for (var i in data) {
                            $scope[ i ] = data[ i ];
                        }

                        $scope.footer.thisYear = (new Date()).getFullYear();

                    })
                    .error(function(err) {
                        //console.log('ERROR: ', err);
                    });//*/


                $http
                    .get($scope.hprefix + 'assets/translations/' + $scope.route.page + '/' + lg + '.json')
                    .success(function(data) {

                        console.log(lg, data);

                        for (var i in data) {
                            $scope[ i ] = data[ i ];
                        }

                        if ( 'speakers' in $scope ) {
                            $scope.speakers_index = {};

                            for (var i = 0; i < $scope.speakers.length; i += 1) {
                                var speaker_info = $scope.speakers[i];
                                $scope.speakers_index[speaker_info.id] = speaker_info;
                            }

                            $scope.getAuthor = function getAuthor(id) {
                                return $scope.speakers_index[id];
                            };

                        }

                        if ( 'activities' in $scope ) {
                            $scope.stats = (function() {

                                var _stats = {};
                                var lastAct;

                                for (var i = 0; i < $scope.activities.length; i += 1) {
                                    var act = $scope.activities[i];

                                    if ( i === 0 ) {
                                        act['id'] = Date.now();
                                    } else {
                                        act['id'] = lastAct + 1;
                                    }

                                    lastAct = act['id'];

                                    var idx = act.talk_format.indexOf(' (');
                                    var label = (idx == -1)? act.talk_format : act.talk_format.slice(0, idx);
                                    _stats[label] = (_stats[label] || 0) + 1;
                                }

                                var stats = [];

                                for (label in _stats) {
                                  stats.push([label, _stats[label]])
                                }

                                return stats;

                              })();

                        }

                    })
                    .error(function(err) {
                        //console.log('ERROR: ', err);
                    });


            });

            $scope.mainnav = {};
            $scope.route = getActiveRoute();
            $scope.hprefix = $.page_level || '';
            $scope.navTemplate = {
                url: $scope.hprefix + 'assets/views/menu_ppal.html'
            };

            //console.log($scope.hprefix, $scope.route);

            $scope.setLang = function setLang(l) {

                if ( availableLanguages.indexOf(l) > -1 ) {
                    if ( $scope.langng != l ) {
                        $scope.lang = l;
                        window.localStorage.setItem('scipy_lang', l);
                    }
                } else {
                    $scope.lang = availableLanguages[ 0 ];
                    window.localStorage.setItem('scipy_lang', l);
                }

            };

            $scope.setLang( window.localStorage.getItem('scipy_lang') );

        }
    ]);

})(window);