app.factory('userFactory', userFactory);

function userFactory($http, $window, $state){
  var currentUser = null;

  var service = {

    attemptAuth
    
  };

  return service;

  function attemptAuth(authType, user){
    return $http.post('' + authType, {
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

}
