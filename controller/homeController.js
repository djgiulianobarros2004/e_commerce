angular.module("ecommerce").controller("homeController", function ($scope, $location, categoryService) {

    var carregarCategorias = function () {
        categoryService.listarTodasAsCategorias()
            .then(function (response) { //função de promessa
                $scope.categorias = response.data;
            })
            .catch(function (response) {
                console.log(ex);
            });
    };

    $scope.buscar = function (categoriaId) {
        categoryService.buscarCategoriaPorId(categoriaId)
            .then(function (response) {
                $scope.categoria = response.data;
            })
            .catch(function (response) {
                alert(response.data);
            })
    };

    $scope.visualizarCarrinho = function () {
        $location.url("/carrinho")
    };

    $scope.fazerlogin = function () {
        $location.url("/login")
    };

    $scope.isAdmin = function () {
        var usuario = localStorage.getItem("usuario");
        usuario = JSON.parse(usuario);
        if (usuario) {
            if (usuario.personRole == "ADMINISTRATOR") {
                return true;
            }
        }
        return false;
    };

    $scope.isLogged = function () {
        var usuario = localStorage.getItem("usuario");
        usuario = JSON.parse(usuario);
        if (usuario) {
            return true;
        }
        return false;
    };

    $scope.isNotLogged = function () {
        var usuario = localStorage.getItem("usuario");
        usuario = JSON.parse(usuario);
        if (usuario) {
            return false;
        }
        return true;
    };

    $scope.desfazerLogin = function () {
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");
    };

    carregarCategorias();
});