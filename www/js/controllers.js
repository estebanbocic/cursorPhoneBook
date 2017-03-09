angular.module('starter.controllers', [])
.controller('listRegionesComunasCtrl', function($scope, $http) {
  $http.get('https://private-4b730d-phonebooktest.apiary-mock.com/region').then(function(result){
    //console.log(result.data); // console feedback
    $scope.regiones = result.data; // UI data
  })


})
.controller('listPersonasCtrl', function ($scope, $http) {
  $http.get('https://private-4b730d-phonebooktest.apiary-mock.com/persona').then(function(result){
    //console.log(result.data); // console feedback
    $scope.datapersonas = result.data; // UI data
  })

})

.controller('showPerfil', function($scope, $http, $state, $ionicPopup){
 //función validadora de ruts
  var Fn = {
	validaRut : function (rutCompleto) {
		if (!/^[0-9]+-[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1];
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		return (Fn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}
//FIN función validadora de ruts
  $scope.data = {};
  $http.get('https://private-4b730d-phonebooktest.apiary-mock.com/persona').then(function(result){
    console.log(result.data); // console feedback
    $scope.datapersonas = result.data; // UI data
  })
  $scope.idPersona = function(id, nombre, apellido, rut, telefono) {
    console.log(telefono.toString().length);
    if (telefono.toString().length < 11) {
      val='inválido';
    }
    else {
      val='válido';
    }
    rutval=Fn.validaRut(rut) ? 'Valido' : 'inválido';
    $ionicPopup.alert({
      title: nombre+" "+apellido,
      template: '<p class="justify">Rut: '+rut+' ('+rutval+')</p><p class="justify">Teléfono: '+telefono+' ('+val+')</p>',
      okType: 'button-df'

    })
  }

    //alert('No tienes productos en Favoritos')

  })
