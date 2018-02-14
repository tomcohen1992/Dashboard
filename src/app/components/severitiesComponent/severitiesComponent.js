'use strict';

const appModule = angular.module('appModule');
//const appModule = angular.module('appModule');

appModule.component('appSeveritiesComponent', {
    templateUrl: '/app/components/severitiesComponent/severitiesComponent.html',
    controller: severitiesComponentController,
    bindings: {
        severities: '<'
    }
});

severitiesComponentController.$inject = ["$timeout","$scope"];

function severitiesComponentController($timeout,$scope) { 
    
    this.initData =  () => {         
        var valuesArr = [];
         for (var index in this.severities)
              valuesArr.push(this.severities[index]);
         
        $scope.data = valuesArr; 
        $scope.labels =  Object.keys(this.severities);
    }

    $timeout(this.initData, 0);
 
    $scope.colors =['#D54141', '#F3AB10'  , '#41B0D5'];
    $scope.options = {elements: { arc: { borderWidth: 0 } }, cutoutPercentage: 90 };   
}