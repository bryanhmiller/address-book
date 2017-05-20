app.controller("NewCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, AddressFactory) {
  console.log("inside NewCtrl");

  $scope.addNewItem = () => {
    // $scope.newContact.isCompleted = false;
    AddressFactory.postNewItem($scope.newContact).then((response) => {
      $scope.newContact = {};
      $location.url("/list");
    }).catch((Error) => {
      console.log("Add error", error);
    });
  };

});
