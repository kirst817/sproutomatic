app.directive('pdProduct', productDirective);

function productDirective(){
  return {
    restrict: 'E',
    templateUrl: '/pageDirectives/ourProduct/template.html',
    controller: controller,
    controllerAs: 'product',
    bindToController: true
  }
}

controller.$inject = ['userFactory', '$state'];

function controller(userFactory, $state) {
        var product = this;


    }
