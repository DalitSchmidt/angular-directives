app.config( $routeProvider => {
    $routeProvider
        .when("/home", {
            templateUrl : "app/templates/home.html"
        })
        .when("/list", {
            templateUrl : "app/templates/list.html"
        }).otherwise({
            templateUrl : "app/templates/home.html"
        })
})