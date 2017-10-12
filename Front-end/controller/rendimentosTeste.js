var rendimentosModulo = angular.module('rendimentosModulo',[]);

rendimentosModulo.controller("rendimentosController", function ($scope){
	
	$scope.funcionarios = [
							{codigo: 1, nome: 'Edson Inácio Batista', cpf:'990.952.381-72'}, 
							{codigo: 2, nome: 'João Clever Pereira', cpf: '880.651.321-94'},
							{codigo: 3, nome: 'Roberto Sampaio Correia', cpf: '754.365.265-95'},
							{codigo: 4, nome: 'Maria do Carmo Naves', cpf: '784.365.269-65'},
	];
	
	$scope.rendimentos = [
							{codigo: 1, referencia: 'Agosto', salarioBase: '1.500,00', horaExtraCinq: '5', horaExtraCem: '8', gratificacao: '50,00', inss: '75,00', impostoRenda: '120,00', 
								funcionario:{codigo: 1, nome: 'Edson Inácio Batista', cpf:'990.952.381-72'}},
							{codigo: 2, referencia: 'Agosto', salarioBase: '950,00', horaExtraCinq: '4', horaExtraCem: '8', gratificacao: '50,00', inss: '62,00', impostoRenda: '00,00', 
								funcionario:{codigo: 2, nome: 'João Clever Pereira', cpf: '880.651.321-94'}},
							{codigo: 3, referencia: 'Agosto', salarioBase: '2.500,00', horaExtraCinq: '2', horaExtraCem: '0', gratificacao: '50,00', inss: '140,00', impostoRenda: '1.200,00', 
								funcionario:{codigo: 3, nome: 'Roberto Sampaio Correia', cpf: '754.365.265-95'}},
							{codigo: 4, referencia: 'Agosto', salarioBase: '1.500,00', horaExtraCinq: '1', horaExtraCem: '9', gratificacao: '50,00', inss: '75,00', impostoRenda: '120,00', 
								funcionario:{codigo: 4, nome: 'Maria do Carmo Naves', cpf: '784.365.269-65'}},
	];

	$scope.selecionaRendimento = function(rendimentoselecionado){
		$scope.rendimento = rendimentoselecionado;
	}

	$scope.limparCampos = function(){
		$scope.rendimento = "";
	}

	$scope.salvar = function(){
		$scope.rendimentos.push($scope.rendimento);
		$scope.limparCampos();
	}

	$scope.excluir = function(){
		$scope.rendimentos.splice($scope.rendimentos.indexOf($scope.rendimento), 1);
		$scope.limparCampos();
	}

});