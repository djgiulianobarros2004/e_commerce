angular.module("ecommerce").config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/home", {
        templateUrl: "view/home.html",
        controller: "homeController"
    });

    $routeProvider.when("/categoryProducts/:idCategoria", {
        templateUrl: "view/categoryProductsView.html",
        controller: "productsController"
    });

    $routeProvider.when("/detalhe/:idProduto", {
        templateUrl: "view/detalheProduto.html",
        controller: "detalheProdutoController"
    });

    $routeProvider.when("/carrinho", {
        templateUrl: "view/carrinho.html",
        controller: "carrinhoController"
    });

    $routeProvider.when("/login", {
        templateUrl: "view/login.html",
        controller: "loginController"
    });

    $routeProvider.when("/cadastroCategorias", {
        templateUrl: "view/cadastroCategorias.html",
        controller: "cadCatController"
    });

    $routeProvider.when("/cadastroProdutos", {
        templateUrl: "view/cadastroProdutos.html",
        controller: "cadProdController"
    });

    $routeProvider.when("/listaCategorias", {
        templateUrl: "view/listaCategorias.html",
        controller: "listaCategoriasController"
    });

    $routeProvider.when("/listaProdutos", {
        templateUrl: "view/listaProdutos.html",
        controller: "listaProdutosController"
    });

}]);