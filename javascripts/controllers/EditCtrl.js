app.controller("EditCtrl", function($location, $routeParams, $scope, AddressFactory) {
  $scope.newContact = {};

  AddressFactory.getSingleItem($routeParams.id).then((results) => {
  	$scope.newContact = results.data;
  }).catch((error) => {
  	console.log("getSingleItem error", error);
  });

  $scope.addNewItem = () => {
  	AddressFactory.editItem($scope.newContact).then(() => {
  		$location.url("/list");
  	}).catch((error) => {
  		console.log("editItem error", error);
  	});
  };

});
