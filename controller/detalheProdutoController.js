angular.module("ecommerce").controller("detalheProdutoController", function ($scope, $location, productService, categoryService, carrinhoService, $routeParams) {

    var carregarProduto = function () {
        var id = $routeParams.idProduto;
        productService.buscarProdutosPorId(id)
            .then(function (response) {
                $scope.produto = response.data;
            })
            .catch(function (response) {
                alert(response.data);
            })
    }


    $scope.adicionarNoCarrinho = function (Produto, campoA){
        carrinhoService.addProduto(Produto, campoA);
    }

    carregarProduto()
});