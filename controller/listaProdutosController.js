angular.module("ecommerce").controller("listaProdutosController", function ($scope, productService) {

    var carregarProdutos = function () {
        productService.listarProdutos()
            .then(function (response) { //função de promessa
                $scope.produtos = response.data;
            })
            .catch(function (response) {
                alert("Não foi possível carregar os produtos!")
            });
    };

    $scope.removerProdutoDoBanco = function (id) {
        $scope.produto = productService.removerProduto(id)
    };

    $scope.editarProdutoDoBanco = function(id){
        $scope.produto = productService.editarProduto(id);
    };

    carregarProdutos();
});