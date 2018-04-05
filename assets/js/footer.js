/**
 * Created by luancomputacao on 01/04/18.
 */

angular.module('scipyla.footer', [])
    .controller('MainFooterCtl', ['$scope',
        function ($scope) {
            $scope.template = {url: 'assets/views/footer.html'}
        }
    ]);

