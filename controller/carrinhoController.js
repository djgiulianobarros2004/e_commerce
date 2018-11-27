angular.module("ecommerce").controller("carrinhoController", function ($scope, $location, carrinhoService) {

    var listarProdutosDoCarrinho = function () {
        $scope.produtos = carrinhoService.listarProdutos();

        var total = 0;

        $scope.produtos.forEach(function (produto) {
            total = total + (produto.price * produto.qtde)
        });
        $scope.total = total;
    };

    $scope.removerProdutoDoCarrinho = function (id) {
        $scope.produto = carrinhoService.removerProduto(id);

        listarProdutosDoCarrinho();
    };

    $scope.finalizarCompra = function () {
        var usuario = localStorage.getItem("usuario");
        usuario = JSON.parse(usuario);
        if (usuario) {
            if (usuario.personRole == "CLIENT") {
                $location.url("/finalizarCompra")
            }
        } else {
            $location.url("/login")
        }
    };

    listarProdutosDoCarrinho();
});