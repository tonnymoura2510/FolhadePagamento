var funcionariosModulo = angular.module('funcionariosModulo',[]);

funcionariosModulo.controller("funcionariosController", function ($scope){
	$scope.funcionarios = [
	{codigo: 1, nome: 'Edson', cpf: '990.952.381-72', cargo:'Analista'},
	{codigo: 2, nome: 'João', cpf: '200.952.381-11' , cargo:'Programador'},
	{codigo: 3, nome: 'Paulo', cpf: '001.952.381-98', cargo:'Gerente'},
	{codigo: 4, nome: 'Sérgio', cpf: '101.952.381-98', cargo:'Programador'},
	];

	$scope.selecionaFuncionario = function(funcionarioSelecionado){
		$scope.funcionario = funcionarioSelecionado;
	}

	$scope.limparCampos = function(){
		$scope.funcionario = "";
	}

	$scope.salvar = function(){
		$scope.funcionarios.push($scope.funcionario);
		$scope.limparCampos();
	}

	$scope.excluir = function(){
		$scope.funcionarios.splice($scope.funcionarios.indexOf($scope.funcionario), 1);
		$scope.limparCampos();
	}

});