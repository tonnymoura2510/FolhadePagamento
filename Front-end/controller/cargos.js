var cargosModulo = angular.module('cargosModulo',[]);

cargosModulo.controller("cargosController", function ($scope){
	$scope.cargos = [
	{nome: 'Vendedor', descricao:'Vender Produtos', salario: 'R$1.500,00'}, 
	{nome: 'Coordenador', descricao: 'Coordena a Produção', salario: 'R$1.700,00'},
	{nome: 'Operador', descricao: 'Opera as máquinas', salario: 'R$1.300,00'},
	{nome: 'Atendente', descricao: 'Atendimento ao cliente', salario: 'R$1.100,00'},
	];

	$scope.selecionaCargo = function(cargoSelecionado){
		$scope.cargo = cargoSelecionado;
	}
	
	$scope.limparCampos = function(){
		$scope.cargo = "";
	}
	
	$scope.salvar = function(){
		$scope.cargos.push($scope.cargo);
		$scope.limparCampos();
	}
	
	$scope.excluir = function(){
		$scope.cargos.splice($scope.cargos.indexOf($scope.cargo), 1);
		$scope.limparCampos();
	}

});