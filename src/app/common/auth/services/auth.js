import Auth from './AuthClass';

export default (module)=> {
  module.service('authService', ['$sessionStorage', Auth]);
}
