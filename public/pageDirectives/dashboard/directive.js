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

controller.$inject = ['userFactory', '$state'];
//growDataRetrieval

function controller(userFactory, $state) {
        var dashboard = this;


    }
