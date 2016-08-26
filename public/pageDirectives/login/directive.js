//login - see notes
app.directive('pdLogin', loginDirective);

function loginDirective(){
  return {
    restrict: 'E',
    templateUrl: '/pageDirectives/login/template.html',
    controller: controller,
    controllerAs: 'login',
    bindToController: true
    //need the last two ???
  }
}

controller.$inject = ['userFactory', '$state'];

function controller(userFactory, $state) {
        var login = this;

        var authType = $state.current.url;
        login.authorize = function() {
            console.log(authType);
            return userFactory.attemptAuth(authType, login.user)
                .then(function(response) {
                  if(response.error){
                    login.error = response.error;
                  }else {
                    $state.go('home', null, { reload: true })
                  }
                });
        };

    }
