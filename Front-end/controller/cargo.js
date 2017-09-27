var cargoModulo = angular.module('cargoModulo',[]);

cargoModulo.controller("CargosController", function ($scope){
	$scope.cargo = [
	{cargo: 'Programador', salbase: '1.800,00', descricao'Desenvolver sistemas web'},
	{cargo: 'Analista', salbase: '2.800,00' , descricao:'Analisar e certificar sistemas web'},
	{cargo: 'Gerente', salbase: '4.000,00', descricao:'Gerenciar todo processo de desenvolvimento do sistema web'},
	];

	$scope.selecionaCargo = function(cargoSelecionado){
		$scope.cargo = cargoSelecionado;
	}

	$scope.limparCampos = function(){
		$scope.cargo = "";
	}

	$scope.salvar = function(){
		$scope.cargo.push($scope.cargo);
		$scope.limparCampos();
	}

	$scope.excluir = function(){
		$scope.cargo.splice($scope.cargo.indexOf($scope.cargo), 1);
		$scope.limparCampos();
	}

});