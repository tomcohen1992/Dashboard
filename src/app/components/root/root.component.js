'use strict';

const appModule = angular.module('appModule');

appModule.component('appRoot', {
    templateUrl: '/app/components/root/root.html',
    controller: rootController
});

rootController.$inject = ["dataService", "$timeout"];
function rootController(dataService, $timeout) {
    var that = this;
    
    this.getObject = function() {
        dataService.getData().then(function(data){
            that.objects = data;     
        },function(err){
            
        });        
    }
}