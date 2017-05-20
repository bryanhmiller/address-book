app.run(function(FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});


app.config(function($routeProvider) {
  $routeProvider
    .when("/list", {
      templateUrl: "/partials/list.html",
      controller: "ListCtrl"
    })
    .when("/new", {
      templateUrl: "partials/new.html",
      controller: "NewCtrl"
    })
    // .when("/items/view/:id", {
    //   templateUrl: "partials/item-view.html",
    //   controller: "ItemViewCtrl"
    // })
    // .when("/items/edit/:id", {
    //   templateUrl: "partials/item-new.html",
    //   controller: "ItemEditCtrl"
    // })
    .otherwise("/list");
});
