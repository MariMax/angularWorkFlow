export default (authService) => {
  return {
    template: require('./navbar.html'),
    link: function(scope) {
      scope.auth = authService;

    }
  }
}
