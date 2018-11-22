angular.module("ecommerce").controller("cadProdController", function ($scope, productService, $location) {

    $scope.cadastrarProd = function (cadProduto) {

        cadProduto.img = cadProduto.img.base64;

        productService.cadastrarProduto(cadProduto)

            .then(function (response) {
                $location.url("/listaProdutos");
            })
            .catch(function (response) {
                alert("Não foi possível cadastrar!")
            })
    };

});
