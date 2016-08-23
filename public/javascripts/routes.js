app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
//$authProvider
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html'
    })
    .state('product', {
      url: '/our-product',
      templateUrl: 'views/our-product.html'
      // controller: 'ProductCtrl'
    })
    .state('company', {
      url: '/the-company',
      templateUrl: 'views/the-company.html'
    })
    .state('solve', {
      url: '/we-solve',
      templateUrl: '/views/we-solve.html'
    })
    .state('login', {
    url: '/login',
    templateUrl: 'views/login.html'
    // controller: 'LoginCtrl',
    // resolve: { skipIfAuthenticated: skipIfAuthenticated }
    })
  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signup.html'
    // controller: 'SignupCtrl',
    // resolve: { skipIfAuthenticated: skipIfAuthenticated }
    })
    .state('account', {
      url: '/account',
      templateUrl: 'views/profile.html'
      // controller: 'ProfileCtrl',
      // resolve: { loginRequired: loginRequired }
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard.html'
      // controller: 'DashboardCtrl',
      // resolve: { loginRequired: loginRequired }
    })
    // $locationProvider.html5Mode(true);


    // $authProvider.loginUrl = '/login';
    // $authProvider.signupUrl = '/signup';
  })
