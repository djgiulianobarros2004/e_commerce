angular.module("ecommerce").controller("finalizarCompraController", function ($scope, $location, carrinhoService) {

    var listarProdutosDoCarrinho = function () {
        $scope.produtos = carrinhoService.listarProdutos();

        var total = 0;

        $scope.produtos.forEach(function (produto) {
            total = total + (produto.price * produto.qtde)
        });
        $scope.total = total;
    };

    $scope.enviarCompra = function () {
        carrinho = localStorage.getItem("carrinho");
        carrinho = JSON.parse(carrinho);
        carrinhoService.enviarCompraDoCarrinho(carrinho)

            .then(function (response) {
                $location.url("/minhasCompras");
            })
            .catch(function (response) {
                alert("Não foi possível enviar os produtos do carrinho!")
            })
    };

    listarProdutosDoCarrinho();

});