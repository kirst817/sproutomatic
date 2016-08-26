//signup - see notes 
app.directive('pdSignup', signupDirective);

function signupDirective(){
  return {
    restrict: 'E',
    templateUrl: '/pageDirectives/signup/template.html',
    controller: controller,
    controllerAs: 'signup',
    bindToController: true
    //need the last two ???
  }
}

controller.$inject = ['userFactory', '$state', '$scope'];

function controller(userFactory, $state, $scope){
  var signup = this;
  var authType = $state.current.url;

  signup.authorize = function(){
    console.log(authType);
    return userFactory.attemptAuth(authType, signup.user)
      .then(function(response){

        if(response.error){
          signup.error = response.error;
          console.log(signup.error);
        } else {
          $state.go('home', null, {reload: true})
        }
      });
  }
}
