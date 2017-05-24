app.controller("ListCtrl", function($location, $scope, AddressFactory) {
	$scope.items = [];

  let getItems = () => {	
  	AddressFactory.getItemList().then((itemz) => {
      $scope.items = itemz;
    }).catch((error) => {
      console.log("get Error", error);
    });
  };

  getItems();

  $scope.deleteItem = (id) => {
  	AddressFactory.deletz(id).then(() => {
  		getItems();
  	}).catch((error) => {
  		console.log("deleteItem error", error);
  	});
  }; 

  $scope.inputChange = (id) => {
  	// AddressFactory.editItem(item).then(() => {
      $location.url(`/edit/${id}`);
  	// }).catch((error) => {
  		// console.log("inputChange error", error);
  	// });
  };

});
