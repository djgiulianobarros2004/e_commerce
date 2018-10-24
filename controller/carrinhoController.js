angular.module("ecommerce").controller("carrinhoController", function ($scope, carrinhoService) {

      var listarProdutosDoCarrinho = function () {
          $scope.produtos = carrinhoService.listarProdutos()

          var total = 0;

          $scope.produtos.forEach(function (produto) {
              total = total + (produto.price * produto.qtde)
          })
          $scope.total = total;
      }

      $scope.removerProdutoDoCarrinho = function(id){
          $scope.produto = carrinhoService.removerProduto(id)

          listarProdutosDoCarrinho();
      }

      listarProdutosDoCarrinho();

});