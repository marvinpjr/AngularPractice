(function () {
    var app = angular.module('store-products', []);

    app.directive('productTitle', function () {
        return {
            restrict: 'E', // stands for element, as in new html element; A would indicate an attribute on an element
            templateUrl: 'templates/product-title.html' // url of template
        };
    });

    app.directive('productPanels', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-panels.html',
            controller: function () { PanelController(this); },
            controllerAs: "panel"
        };
    });

    function PanelController(directive) {
        directive.tab = 1;

        directive.selectTab = function (setTab) {
            this.tab = setTab;
        }

        directive.isSelected = function (checkTab) {
            return directive.tab === checkTab;
        }
    }
})();