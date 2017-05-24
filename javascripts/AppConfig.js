app.run(function(FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});


app.config(function($routeProvider) {
  $routeProvider
    .when("/auth", {
      templateUrl: "partials/auth.html",
      controller: "AuthCtrl"
    })
    .when("/list", {
      templateUrl: "/partials/list.html",
      controller: "ListCtrl"
    })
    .when("/new", {
      templateUrl: "partials/new.html",
      controller: "NewCtrl"
    })
    .when("/edit/:id", {
      templateUrl: "partials/edit.html",
      controller: "EditCtrl"
    })
    .otherwise("/auth");
});
    // .when("/items/view/:id", {
    //   templateUrl: "partials/item-view.html",
    //   controller: "ItemViewCtrl"
    // })
