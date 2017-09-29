var funcionariosModulo = angular.module('funcionariosModulo',[]);

funcionariosModulo.controller("funcionariosController", function ($scope){
	
	$scope.cargos = [
	{codigo: 1, nome: 'Vendedor', descricao:'Vender Produtos', salario: 'R$1.500,00'}, 
	{codigo: 2, nome: 'Coordenador', descricao: 'Coordena a Produção', salario: 'R$1.700,00'},
	{codigo: 3, nome: 'Operador', descricao: 'Opera as máquinas', salario: 'R$1.300,00'},
	{codigo: 4, nome: 'Atendente', descricao: 'Atendimento ao cliente', salario: 'R$1.100,00'},
	];
	
	$scope.funcionarios = [
	{codigo: 1, nome: 'Edson', cpf: '990.952.381-72', cargo:{codigo: 1, nome: 'Vendedor', descricao:'Vender Produtos', salario: 'R$1.500,00'}},
	{codigo: 2, nome: 'João', cpf: '200.952.381-11' , cargo:{codigo: 2, nome: 'Coordenador', descricao: 'Coordena a Produção', salario: 'R$1.700,00'}},
	{codigo: 3, nome: 'Paulo', cpf: '001.952.381-98', cargo:{codigo: 3, nome: 'Operador', descricao: 'Opera as máquinas', salario: 'R$1.300,00'}},
	{codigo: 4, nome: 'Sérgio', cpf: '101.952.381-98', cargo:{codigo: 4, nome: 'Atendente', descricao: 'Atendimento ao cliente', salario: 'R$1.100,00'}},
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