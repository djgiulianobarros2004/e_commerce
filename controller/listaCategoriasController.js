angular.module("ecommerce").controller("listaCategoriasController", function ($scope, categoryService) {

    var carregarCategorias = function () {
        categoryService.listarTodasAsCategorias()
            .then(function (response) { //função de promessa
                $scope.categorias = response.data;
            })
            .catch(function (response) {
                alert("Não foi possível carregar as categorias!")
            });
    };

    $scope.removerCategoriaDoBanco = function(id){
        $scope.categoria = categoryService.removerCategoria(id);
    };

    $scope.editarCategoriaDoBanco = function(id){
        $scope.categoria = categoryService.editarCategoria();
    };

    carregarCategorias();
});