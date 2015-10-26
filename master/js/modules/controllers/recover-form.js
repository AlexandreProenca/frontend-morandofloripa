/**=========================================================
 * Module: recover.js
 =========================================================*/

App.controller('RecoverFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {

  // bind here all data from the form
  $scope.recover = {};
  // place the message if something goes wrong
  $scope.authMsg = '';

  $scope.resetpass = function() {
    $scope.authMsg = '';

    if($scope.recoverForm.$valid) {

      $http
        .post('https://backend-morandofloripa.herokuapp.com/v1/password-reset/', {email: $scope.recover.email})
        .then(function(response) {
          // assumes if ok, response is an object with some data, if not, a string with error
          // customize according to your api
          if ( !response.status == 200 ) {
          }else{
            $state.go('page.login');
          }
        }, function(response) {
          $scope.authMsg = response.data.error;
        });

    }
    else {
      // set as dirty if the user click directly to login so we show the validation messages
      $scope.recoverForm.email.$dirty = true;
    }
  };

}]);
