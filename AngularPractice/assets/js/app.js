// wrap in a closure
(function () {
    // define module with no dependencies
    var app = angular.module('store', ['store-products']);

    // define controllers
    app.controller('StoreController', ['$http', '$location', function($http, $location) {
        var store = this;
        store.products = [];

        var path =
            //$location.protocol() + '://' + $location.host() + ":" + $location.port() +
            '/assets/js/products.json'; // why the 404?
        $http.get(path)
            .success(function (data) {
                store.products = data; // gems
            })
            .error(function(error) {
                console.log(error); // how do we use this?
            });
    }]);
    
    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });
})();