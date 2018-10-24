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
        })

    }]);