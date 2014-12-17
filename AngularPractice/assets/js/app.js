// wrap in a closure
(function () {
    // define module with no dependencies
    var app = angular.module('store', ['store-products']);

    // define controllers
    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });
})();