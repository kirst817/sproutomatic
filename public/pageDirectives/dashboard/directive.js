//dashboard - see notes
app.directive('pdDash', dashDirective);

function dashDirective(){
  return {
    restrict: 'E',
    templateUrl: '/pageDirectives/dashboard/template.html',
    controller: controller,
    controllerAs: 'dashboard',
    bindToController: true
    //need the last two ???
  }
}

controller.$inject = ['userFactory', '$scope', '$http', '$state'];
//growDataRetrieval

function controller(userFactory, $scope, $http, $state) {
        var dashboard = this;


        $http.get('/api2').then(function(growData){
          console.log('api2 on frontend!');
          dashboard.grow = growData.data.data.growData;

       })



    }
