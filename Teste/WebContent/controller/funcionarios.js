/*var funcionariosModulo = angular.module('funcionariosModulo',[]);

funcionariosModulo.controller("funcionariosController", function ($scope, $http){
	$http.get('controller/funcionarios.json').then(function(response){
		$scope.funcionarios = response.data.funcionarios;
	})
});*/

var funcionariosModulo = angular.module('funcionariosModulo',[]);

funcionariosModulo.controller("funcionariosController", function ($scope, $http){
	
	urlFuncionario = 'http://localhost:8080/Teste/rest/funcionarios';
	$scope.listarFuncionarios = function(){
		$http.get(urlFuncionario).success(function(funcionarios){
			$scope.funcionarios = funcionarios;
			
		}).error (function (erro){
			alert(erro);
		});
		
	}
	

	$scope.selecionaFuncionario = function(funcionarioSelecionado){
		$scope.funcionario = funcionarioSelecionado;
	}

	$scope.limparCampos = function(){
		$scope.funcionario = "";
	}
	
	$scope.salvar = function(){
		
		if($scope.funcionario.codigo == undefined){
			alert("post - Código vazio = novo registro");
			console.log("post - Código vazio = novo registro");
			$http.post(urlFuncionario, $scope.funcionario).success(function(funcionario){
				$scope.funcionarios.push($scope.funcionario);
				$scope.limparCampos();
			}).error (function (erro){
				alert(erro);
			});
			
		} else{
			alert(" put - Código não vazio = altera registro");
			console.log("post - Código vazio = novo registro");
			$http.put(urlFuncionario, $scope.funcionario).success(function(funcionario){
				$scope.$scope.listarFuncionarios();
				$scope.limparCampos();
			}).error (function (erro){
				alert(erro);
			});
		}
		
	}
	
	$scope.excluir = function(){
		if($scope.funcionario.codigo == undefined){
			alert("Favor selecionar um registro para excluir.");
			console.log("Favor selecionar um registro para excluir.");
		}else{
			$http.delete(urlFuncionario + '/' + $scope.funcionario.codigo).success(function(){
				$scope.listarFuncionarios();
				$scope.limparCampos();
			}).error(function(erro){
				alert(erro);
			});
		}
	}
	
	$scope.listarFuncionarios();
	
});