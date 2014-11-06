// wrap in a closure
(function() {
    // define module with no dependencies
    var app = angular.module('store', []);

    // define a controller
    app.controller('StoreController', function() {
        this.products = gems;
    });

    var dodeca = {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'lovely ten sided gem',
        canPurchase: true,
        soldOut: false
    }

    var pent = {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'fancy five sided gem',
        canPurchase: false,
        soldOut: false
    }
    var gems = [dodeca, pent];

})();