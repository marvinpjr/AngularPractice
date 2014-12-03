// wrap in a closure
(function () {
    // define module with no dependencies
    var app = angular.module('store', []);

    // images from
    // http://hadleybelle.com/wp-content/uploads/2012/02/precious-gemstones.png

    //initialize data
    var topaz = {
        name: 'Topaz',
        price: 2,
        description: 'lovely light blue gem',
        canPurchase: true,
        soldOut: false,
        images: [
            { full: '/assets/images/topaz-01-full.png', thumb: 'topaz-01-thumb.png' },
            { full: '/assets/images/topaz-02-full.png', thumb: 'topaz-02-thumb.png' }
        ],
        reviews: [
            { stars: 5, body: "I love this product!", author: "bob@mailinator.com" },
            { stars: 1, body: "This product sucks!", author: "sally@mailinator.com" },
            { stars: 4, body: "This product is pretty good.", author: "marcus@mailinator.com" }
        ]
    }

    var garnet = {
        name: 'Garnet',
        price: 5.95,
        description: 'decadent dark red gem',
        canPurchase: false,
        soldOut: false,
        images: [
            { full: '/assets/images/garnet-01-full.png', thumb: 'garnet-01-thumb.png' },
            { full: '/assets/images/garnet-02-full.png', thumb: 'garnet-02-thumb.png' }
        ],
        reviews: [
            { stars: 5, body: "I want to marry this gem!", author: "frances@mailinator.com" },
            { stars: 1, body: "Ya call this a gem?!", author: "dylan@mailinator.com" },
            { stars: 3, body: "This product is pretty good.", author: "leigh@mailinator.com" }
        ]
    }

    var diamond = {
        name: 'Diamond',
        price: 2,
        description: 'the king of gems',
        canPurchase: true,
        soldOut: false,
        images: [
            { full: '/assets/images/diamond-01-full.png', thumb: 'diamond-01-thumb.png' },
            { full: '/assets/images/diamond-02-full.png', thumb: 'diamond-02-thumb.png' }
        ],
        reviews: [
            { stars: 5, body: "This gem is a girl's best friend!", author: "jr@mailinator.com" },
            { stars: 1, body: "It's overrated.  What's all the hype for?", author: "gdilly@mailinator.com" },
            { stars: 4, body: "This product met my expectations.", author: "jeff@mailinator.com" }
        ]
    }

    var gems = [topaz, garnet, diamond];

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

    app.controller('PanelController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        }

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        }
    });

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
            controller: function () {
                // alert('controller');
                this.tab = 1;

                this.selectTab = function (setTab) {
                    this.tab = setTab;
                }

                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                }
            },
            controllerAs: 'panels'
        };
    });
})();