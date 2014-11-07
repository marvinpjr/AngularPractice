// wrap in a closure
(function () {
    // define module with no dependencies
    var app = angular.module('store', []);

    //initialize data
    var dodeca = {
        name: 'Dodecahedron',
        price: 2,
        description: 'lovely ten sided gem',
        canPurchase: true,
        soldOut: false,
        images: [{ full: 'dodeca-01-full.jpg', thumb: 'dodeca-01-thumb.jpg' }],
        reviews: [
            { stars: 5, body: "I love this product!", author: "bob@mailinator.com" },
            { stars: 1, body: "This product sucks!", author: "sally@mailinator.com" },
            { stars: 4, body: "This product is pretty good.", author: "marcus@mailinator.com" }
        ]
    }

    var pent = {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'fancy five sided gem',
        canPurchase: false,
        soldOut: false,
        images: [{ full: 'pent-01-full.jpg', thumb: 'pent-01-thumb.jpg' }],
        reviews: [
            { stars: 5, body: "I want to marry this gem!", author: "frances@mailinator.com" },
            { stars: 1, body: "Ya call this a gem?!", author: "dylan@mailinator.com" },
            { stars: 3, body: "This product is pretty good.", author: "leigh@mailinator.com" }
        ]
    }
    var gems = [dodeca, pent];

    // define controllers
    app.controller('StoreController', function () {
        this.products = gems;
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
})();