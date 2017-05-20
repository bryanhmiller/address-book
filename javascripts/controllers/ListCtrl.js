app.controller("ListCtrl", function($scope, AddressFactory) {
  console.log("inside ListCtrl");
  $scope.test = "This"
	$scope.items = [];

  let getItems = () => {	
  	AddressFactory.getItemList().then((itemz) => {
      $scope.items = itemz;
      console.log("itemz", itemz);
    }).catch((error) => {
      console.log("get Error", error);
    });
  };

  getItems();

  // $scope.deleteItem = (id) => {
  // 	AddressFactory.deletz(id).then(() => {
  // 		getItems();
  // 	}).catch((error) => {
  // 		console.log("deleteItem error", error);
  // 	});
  // }; 

  // $scope.inputChange = (item) => {
  // 	AddressFactory.editItem(item).then(() => {
  // 		//???????????
  // 	}).catch((error) => {
  // 		console.log("inputChange error", error);
  // 	});
  // };

});
