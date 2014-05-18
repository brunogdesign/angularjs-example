(function() {
    "use strict";

    var app = angular.module('store', []);

    app.controller('StoreController', function() {

        this.car = {
            model: 'C4',
            year: 2008,
            brand: 'Citroen',
            price: 20000
        };


    });
    
    
})();