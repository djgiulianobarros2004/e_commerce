angular.module("ecommerce").factory("categoryService", function ($http) {

    var url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _listarTodasAsCategorias = function () {
        return $http.get(url + "/category/list")
    };

    var _buscarCategoriaPorId = function (idCategoria) {
        return $http.get(url + "/category/" + idCategoria);
    };

    var _cadastrarCategoria = function (cadCategoria) {
        var token = localStorage.getItem("token");
        token = JSON.parse(token);
        var req = {
            method: "POST",
            url: url + "/category",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            },
            data: cadCategoria
        };
        return $http(req);
    };

    var _removerCategoria = function (id) {
        return $http.post(url + "", id);
    };

    var _editarCategoria = function (id) {
        return $http.post(url + "", id);
    };

    return {
        listarTodasAsCategorias: _listarTodasAsCategorias,
        buscarCategoriaPorId: _buscarCategoriaPorId,
        cadastrarCategoria: _cadastrarCategoria,
        removerCategoria: _removerCategoria,
        editarCategoria: _editarCategoria
    }
});