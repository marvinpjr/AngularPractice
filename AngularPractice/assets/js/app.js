// wrap in a closure
(function () {
    // define module with no dependencies
    var app = angular.module('store', []);

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

    //app.controller('PanelController', function () {
    //    this.tab = 1;

    //    this.selectTab = function (setTab) {
    //        this.tab = setTab;
    //    }

    //    this.isSelected = function (checkTab) {
    //        return this.tab === checkTab;
    //    }
    //});

    app.directive('productTitle', function() {
        return {
            restrict: 'E', // stands for element, as in new html element; A would indicate an attribute on an element
            templateUrl: 'templates/product-title.html' // url of template
        };
    });

    app.directive('productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-panels.html',
            controller: function() {
                this.tab = 1;

                this.selectTab = function (setTab) {
                    this.tab = setTab;
                }

                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                }
            },
            controllerAs: "panel"
        };
    });
})();