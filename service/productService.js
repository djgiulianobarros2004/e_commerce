angular.module("ecommerce").factory("productService", function ($http) {

    var url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _buscarProdutosPorIdCategoria = function (idCategoria, pagina) {
        return $http.get(url + "/product/list/" + idCategoria + "/" + pagina);
    };

    var _buscarProdutosPorId = function (idProduto) {
        return $http.get(url + "/product/" + idProduto);
    };

    var _visualizarUmProdutoPorId = function (idProduto) {
        return $http.get(url + "/product/" + idProduto);
    };

    var _cadastrarProduto = function (cadProduto) {
        var token = localStorage.getItem("token");
        token = JSON.parse(token);
        var req = {
            method: "POST",
            url: url + "/product",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            },
            data: cadProduto
        };
        return $http(req);
    };

    var _listarProdutos = function () {
        return $http.get(url + "/product/list")
    };

    var _removerProduto = function (id) {
        return $http.post(url + "", id);
    };

    var _editarProduto = function (id) {
        return $http.post(url + "", id);
    };

    return {
        _buscarProdutosPorIdCategoria: _buscarProdutosPorIdCategoria,
        buscarProdutosPorId: _buscarProdutosPorId,
        _visualizarUmProdutoPorId: _visualizarUmProdutoPorId,
        cadastrarProduto: _cadastrarProduto,
        listarProdutos: _listarProdutos,
        removerProduto: _removerProduto,
        editarProduto: _editarProduto
    }

});