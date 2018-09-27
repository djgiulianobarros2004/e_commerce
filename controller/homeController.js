angular.module("ecommerce").controller("homeController", function ($scope, categoryService) {

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
    carregarCategorias();
});