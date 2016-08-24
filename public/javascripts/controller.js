app.controller('gardenCtrl', function($scope, $http){
   $scope.view = {};

   $http.get('/api').then(function(plants){
     console.log(plants);
     $scope.view.plants = plants.data;
  })
});
