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
    .when("/edit/:id", {
      templateUrl: "partials/new.html",
      controller: "EditCtrl"
    })
    // .when("/items/view/:id", {
    //   templateUrl: "partials/item-view.html",
    //   controller: "ItemViewCtrl"
    // })
    .otherwise("/list");
});
