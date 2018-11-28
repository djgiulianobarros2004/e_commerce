angular.module("ecommerce").controller("minhasComprasController", function ($scope, $location, carrinhoService) {


    var listarCompras = function () {
        carrinhoService.listarComprasService()
            .then(function (response) {
                $scope.compras = response.data;
            })
            .catch(function (response) {
                alert("Não foi possível trazer os produtos!");
            })
    };


    $scope.listarDetalhesCompras = function (idVenda) {

        carrinhoService.listarProdutosPorID(idVenda)

            .then(function (response) {
                $scope.produtosVenda = response.data;
            })
            .catch(function (response) {
                alert("Não foi possível trazer os produtos!");
            })

    };

    listarCompras();
});