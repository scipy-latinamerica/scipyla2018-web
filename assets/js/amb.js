
( function() {

  var profiles = {
    celiacintas : {
      name: 'Celia Cintas',
      country: 'Argentina',
      geocode: 'ar'
    },
    hvargas : {
      name: 'Horacio Vargas',
      country: 'Bolivia',
      geocode: 'bo'
    },
    rgaia : {
      name: 'Raniere Gaia',
      country: 'Brasil',
      geocode: 'br'
    },
    xmnlab : {
      name: 'Ivan Ogasawara',
      country: 'Brasil',
      geocode: 'br'
    },
    jroa : {
      name: 'John Jairo Roa',
      country: 'Colombia',
      geocode: 'co'
    },
    jblanco : {
      name: 'Jeudy Blanco',
      country: 'Costa Rica',
      geocode: 'cr'
    },
    olemis : {
      name: 'Olemis Lang',
      country: 'Cuba',
      geocode: 'cu'
    },
    soliva : {
      name: 'Sebastian Oliva',
      country: 'Guatemala',
      geocode: 'gt'
    },
    alexd : {
      name: 'Alex Dzul',
      country: 'México',
      geocode: 'mx'
    },
    mcetrulo : {
      name: 'Michael Cetrulo',
      country: 'Uruguay',
      geocode: 'uy'
    },
    fpalm : {
      name: 'Francisco Palm',
      country: 'Venezuela',
      geocode: 've'
    }
  }

  for (var id in profiles) {
    profiles[id].id = id;
  }

  angular
    .module('scipyla.ambassadors', ['mdMarkdownIt'])
    .controller('AmbCtl', ['$scope',
      function($scope) {
        var order = ['celiacintas', 'hvargas', 'rgaia', 'xmnlab', 'jroa', 'jblanco',
            'olemis', 'soliva', 'alexd', 'mcetrulo', 'fpalm'];
        $scope.profiles = []
        for (var i in order) {
          $scope.profiles.push(profiles[order[i]]); 
        }
        $scope.profiles_mididx = $scope.profiles.length >> 1;
        $scope.slice = function(a, imin, imax) {
          var h = [];
          for (var i = imin; i < imax ; ++i) {
            h.push(a[i]);
          }
          return h;
        }
      }
    ])
})();


