const myModule = angular.module('appModule');
myModule.$inject = ["$http","$q"];

myModule.factory('dataService', function($http, $q) {
  this.getData = function(){
    return $q(function(resolve, reject) {
       $http.get('/data').then(
          function(data){
            resolve(data.data);
      }, 
        function(err){
           reject(err);
      })
  });
  }
  return this;
});


 