
(function() {
    
    "use strict";

    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.cars = cars;
    });
    
    
    var cars = [
        {
            model: 'C4',
            year: 2008,
            brand: 'Citroen',
            price: 20000,
            canPurchase: true
        },
        {
            model: 'A3',
            year: 2013,
            brand: 'Audi',
            price: 40000,
            canPurchase: false
        }
    ];
    
})();