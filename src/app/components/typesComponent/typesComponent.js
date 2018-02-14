'use strict';

const appModule = angular.module('appModule');

appModule.component('appTypesComponent', {
    templateUrl: '/app/components/typesComponent/typesComponent.html',
    controller: typesComponentController,
        bindings:{
        types:'<'
    }
});

typesComponentController.$inject = ['$timeout'];
function typesComponentController($timeout) { 
    
    this.initKeys = () => { 
    this.x = Object.keys(this.types); 
    this.string = this.x.toString().replace(/([A-Z])/g, ' $1'); 
    this.keys= this.string.split(","); 
    }

    $timeout(this.initKeys, 0); 
    
    this.imgs = ["./assets/Attack Indication.png",
               "./assets/Data Leakage.png",
               "./assets/Phishing.png",
               "./assets/Brand.png",
               "./assets/Explotiable.png",
               "./assets/Vip.png"
    ]
}