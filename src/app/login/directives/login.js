const styles = require('./style.styl');

export default (authService, $state) => {

  return {
    template: require('./login.html'),
    link: (scope) => {
      scope.model = {};

      scope.styles = styles;

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
