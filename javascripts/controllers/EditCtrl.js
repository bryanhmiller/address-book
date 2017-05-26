app.controller("EditCtrl", function($location, $routeParams, $scope, AddressFactory) {
  $scope.address = {};

  AddressFactory.getSingleItem($routeParams.id).then((results) => {
    $scope.address = results.data;
    console.log("getSingleItem $scope.newContact", $scope.address);
  }).catch((error) => {
  	console.log("getSingleItem error", error);
  });

  $scope.addNewItem = () => {
  	AddressFactory.editItem($scope.address).then(() => {
  		$location.url("/list");
  	}).catch((error) => {
  		console.log("editItem error", error);
  	});
  };

});
