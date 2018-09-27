angular.module("ecommerce").factory("categoryService", function ($http) {

    var url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _listarTodasAsCategorias = function () {
        return $http.get(url + "/category/list")
    }

    var _buscarCategoriaPorId = function (idCategoria) {
        return $http.get(url + "/category/" + idCategoria);
    }
    return {
        listarTodasAsCategorias: _listarTodasAsCategorias,
        buscarCategoriaPorId: _buscarCategoriaPorId
    }
});