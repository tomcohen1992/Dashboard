'use strict';

const appModule = angular.module('appModule');

appModule.component('appSourceComponent', {
    templateUrl: '/app/components/sourceComponent/sourceComponent.html',
    controller: sourceComponentController,
        bindings:{
        sources:'<'
 }
});

sourceComponentController.$inject = ['$timeout'];
function sourceComponentController($timeout) { 
    
    this.initKeys = () =>{
    var x = Object.keys(this.sources);
    this.string = x.toString().replace(/([A-Z])/g, ' $1');
    this.keys= this.string.split(",");
    }

    $timeout(this.initKeys, 0);
}
