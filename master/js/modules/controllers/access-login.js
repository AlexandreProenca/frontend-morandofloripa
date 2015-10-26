/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

App.controller('LoginFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {

  // bind here all data from the form
  $scope.account = {};
  // place the message if something goes wrong
  $scope.authMsg = '';

  $scope.login = function() {
    $scope.authMsg = '';

    if($scope.loginForm.$valid) {

      $http
        .post('https://backend-morandofloripa.herokuapp.com/v1/rest-auth/login/', {username: $scope.account.username, password: $scope.account.password})
        .then(function(response) {
          // assumes if ok, response is an object with some data, if not, a string with error
          // customize according to your api
          if ( !response.status == 200 ) {
            $scope.authMsg = 'Incorrect credentials.';
          }else{
            localStorage.setItem('token_user', JSON.stringify(response.data));
            $state.go('app.dashboard');
          }
        }, function(x) {
          $scope.authMsg = 'Server Request Error';
        });
    }
    else {
      // set as dirty if the user click directly to login so we show the validation messages
      $scope.loginForm.username.$dirty = true;
      $scope.loginForm.account_password.$dirty = true;
    }
  };

}]);
