//dashboard - see notes
app.directive('pdDash', dashDirective);

function dashDirective(){
  return {
    restrict: 'E',
    templateUrl: '/pageDirectives/dashboard/template.html',
    controller: controller,
    controllerAs: 'dashboard',
    bindToController: true
  }

}

controller.$inject = ['userFactory', '$scope', '$http', '$state'];
//growDataRetrieval

function controller(userFactory, $scope, $http, $state) {
  console.log('dash controller working');
        var dashboard = this;


        $http.get('/dummyapi2').then(function(growData){
          console.log('api2 on frontend!');
          dashboard.grow = growData.data.data.growData;

       })

        $http.get('/api2').then(function(sensorData){
          console.log('api2 sensor on frontend!');
          console.log(sensorData);
          dashboard.sensor = sensorData.data;

       })

       $http.get('/api').then(function(plants){
         //grabs plant grow data from json file
         console.log('api1 dummy');
         console.log(plants);
         dashboard.plants = plants.data.data.plants;
      })

       $http.get('/growinfoapi').then(function(plantinfo){
         //grabs plant grow data from json file
         console.log('api1 plant info');
         console.log(plantinfo);
         dashboard.plantinfo = plantinfo.data;
      })


    }
