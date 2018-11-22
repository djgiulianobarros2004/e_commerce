angular.module("ecommerce").controller("cadCatController", function ($scope, categoryService, $location) {

    $scope.cadastrarCat = function (cadCategoria) {

        categoryService.cadastrarCategoria(cadCategoria)

            .then(function (response) {
                $location.url("/listaCategorias");
            })
            .catch(function (response) {
                alert("Não foi possível cadastrar!")
            })
    };
});

