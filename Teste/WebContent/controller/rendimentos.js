/*var rendimentosModulo = angular.module('rendimentosModulo',[]);

rendimentosModulo.controller("rendimentosController", function ($scope, $http){
	$http.get('controller/rendimentos.json').then(function(response){
		$scope.rendimentos = response.data.rendimentos;
	})
});*/

var rendimentosModulo = angular.module('rendimentosModulo',[]);

rendimentosModulo.controller("rendimentosController", function ($scope, $http){
	
	urlFuncionario = 'http://localhost:8080/Teste/rest/funcionarios';
	urlRendimento =  'http://localhost:8080/Teste/rest/rendimentos';
	
	$scope.listarRendimentos = function(){
		$http.get(urlRendimento).success(function(rendimentos){
			$scope.rendimentos = rendimentos;
			
		}).error (function (erro){
			alert(erro);
		});
		
	}
	
	$scope.listarFuncionarios = function(){
		$http.get(urlFuncionario).success(function(funcionarios){
			$scope.funcionarios = funcionarios;
			
		}).error (function (erro){
			alert(erro);
		});
		
	}
	

	$scope.selecionaRendimento = function(rendimentoSelecionado){
		$scope.rendimento = rendimentoSelecionado;
	}

	$scope.limparCampos = function(){
		$scope.rendimento = "";
	}
	
	$scope.salvar = function(){
		
		if($scope.rendimento.codigo == undefined){
			alert("post - Código vazio = novo registro");
			console.log("post - Código vazio = novo registro");
			$http.post(urlRendimento, $scope.rendimento).success(function(rendimento){
				$scope.rendimentos.push($scope.rendimento);
				$scope.limparCampos();
			}).error (function (erro){
				alert(erro);
			});
			
		} else{
			alert(" put - Código não vazio = altera registro");
			console.log("post - Código vazio = novo registro");
			$http.put(urlRendimento, $scope.rendimento).success(function(rendimento){
				$scope.$scope.listarRendimentos();
				$scope.limparCampos();
			}).error (function (erro){
				alert(erro);
			});
		}
		
	}
	
	$scope.excluir = function(){
		if($scope.rendimento.codigo == undefined){
			alert("Favor selecionar um registro para excluir.");
			console.log("Favor selecionar um registro para excluir.");
		}else{
			$http.delete(urlRendimento + '/' + $scope.rendimento.codigo).success(function(){
				$scope.listarRendimentos();
				$scope.limparCampos();
			}).error(function(erro){
				alert(erro);
			});
		}
	}
	
	$scope.listarRendimentos();
	$scope.listarFuncionarios();
	
});