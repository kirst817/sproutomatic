app.factory('userFactory', userFactory);

userFactory.$inject = ['$http', '$window', '$state'];

function userFactory($http, $window, $state){
  var currentUser = null;

  var service = {

    attemptAuth

  };

  return service;

  function attemptAuth(authType, user){
    return $http.post('/index/v1/users' + authType, {
      user:user
    })
    .then(function(response){
      save(response.data.token);
      currentUser = response.data.id;

      return response;
    })
    .catch(function(error){
      return error.data;
    });
  }

  function save(token) {
          $window.localStorage['jwtToken'] = token;
      }
}
