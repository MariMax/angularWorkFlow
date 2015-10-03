export default (authService, $state) => {
  require('./style.styl');
  return {
    template: require('./login.html'),
    link: (scope) => {
      scope.model = {};

      scope.signIn = function() {
        authService.logIn(scope.model.email, scope.model.password)
          .then(()=>{
            $state.go('default');
          })
          .catch(()=>{
            scope.showError = true;
          });
      }
    }
  }
}
