angular.module('starter.controllers', [])
.controller('listRegionesComunasCtrl', function($scope, $http) {
  $http.get('https://private-4b730d-phonebooktest.apiary-mock.com/region').then(function(result){
    console.log(result.data); // console feedback
    $scope.regiones = result.data; // UI data
  })


})
.controller('listPersonasCtrl', function ($scope, $http) {
  $http.get('https://private-4b730d-phonebooktest.apiary-mock.com/persona').then(function(result){
    console.log(result.data); // console feedback
    $scope.datapersonas = result.data; // UI data
  })

});
