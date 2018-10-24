angular.module("ecommerce").controller("productsController", function ($scope, $location, productService, categoryService, carrinhoService, $routeParams) {

    var carregarProdutos = function () {
        var id = $routeParams.idCategoria;
        productService._buscarProdutosPorIdCategoria(id, 1)
            .then(function (response) {
                $scope.produtos = response.data;
            })
            .catch(function (response) {
                alert(response.data);
            })

    }
    var carregarCategoria = function(){
        var  id = $routeParams.idCategoria;
        categoryService.buscarCategoriaPorId(id)
            .then(function (response) {
                $scope.categoria = response.data;
            })
            .catch(function (response) {
                alert(response);
            })
    };

    $scope.visualizarUmProduto = function (idDoProduto) {
        $location.url("/detalhe/" + idDoProduto)
    };

    $scope.adicionarNoCarrinho = function (Produto) {
        carrinhoService.addProduto(Produto, 1);
    };

    carregarCategoria();
    carregarProdutos();
});