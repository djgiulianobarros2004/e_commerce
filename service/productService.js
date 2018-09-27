angular.module("ecommerce").factory("productService", function ($http) {

    var url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _buscarProdutosPorIdCategoria = function (idCategoria, pagina) {
        return $http.get(url + "/product/list/" + idCategoria + "/" + pagina);
    }
    return {
        _buscarProdutosPorIdCategoria: _buscarProdutosPorIdCategoria
    }

})