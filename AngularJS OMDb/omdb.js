var myApp = angular.module('app', [])
// 註解1         
myApp.controller('SearchCtrl', function ($scope, $http) {
  $scope.search = function () {
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?t=' + $scope.t + '&y=' + $scope.y + '&plot=' + $scope.plot + '&r=' + $scope.r,
      params: { name: 'omdb' }
    })
      .success(function (data) {
        $scope.result = data
        $scope.url = 'http://www.omdbapi.com/?t=' + $scope.t + '&y=' + $scope.y + '&plot=' + $scope.plot + '&r=' + $scope.r
        $scope.sw = true
      })
  }
}
)
