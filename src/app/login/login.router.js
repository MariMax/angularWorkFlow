export default ($stateProvider) => {
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>',
      resolve:{
        isAuthenticated:(authService) => {
          return (!authService.isLoggedIn())?Promise.resolve():Promise.reject();
        }
      }
    })
}
