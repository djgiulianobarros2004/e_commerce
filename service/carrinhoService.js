angular.module("ecommerce").factory("carrinhoService", function ($http) {

    var url = "http://ecommerce-cpw.herokuapp.com/rest";

    var carrinho = [];

    var _addProduto = function (produto, qtde) {
        carrinho = _listarProdutos();

        for (var i in carrinho) {
            if (carrinho[i].id == produto.id) {
                carrinho[i].qtde = carrinho[i].qtde + qtde;
                localStorage.setItem("carrinho", JSON.stringify(carrinho));
                return;
            }
        }
        produto.qtde = qtde;
        carrinho.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(carrinho)); //salvar novamente
    };

    var _removerProduto = function (id) {
        carrinho = _listarProdutos();

        for (const i in carrinho) {
            if (carrinho.length > 0) {
                if (carrinho[i].id == id) {
                    carrinho.splice(i, 1);
                    localStorage.setItem("carrinho", JSON.stringify(carrinho));
                    return;
                }
            }
        }

    };

    var _listarProdutos = function () {
        var obj = localStorage.getItem("carrinho");
        if (obj) {
            carrinho = JSON.parse(obj);
        }
        return carrinho;
    };

    var _atualizarProduto = function () {
        //salva o produto no localStorage
    };

    var _limparCarrinho = function () {

    };

    var _enviarCompraDoCarrinho = function (carrinho) {

        var token = localStorage.getItem("token");
        token = JSON.parse(token);
        var req = {
            method: "POST",
            url: url + "/order",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            },
            data: carrinho
        };
        return $http(req);
    };

    var _listarComprasService = function () {
        var token = localStorage.getItem("token");
        token = JSON.parse(token);
        var req = {
            method: "GET",
            url: url + "/order/list/1",
            headers: {
                "Authorization": "Bearer " + token
            },
            data: carrinho
        };
        return $http(req);
    }

    var _listarProdutosPorID = function (idVenda) {
        var token = localStorage.getItem("token");
        token = JSON.parse(token);
        var req = {
            method: "GET",
            url: url + "/order/" + idVenda,
            headers: {
                "Authorization": "Bearer " + token
            },
            data: carrinho
        };
        return $http(req);
    }

    return {
        addProduto: _addProduto,
        removerProduto: _removerProduto,
        listarProdutos: _listarProdutos,
        atualizarProduto: _atualizarProduto,
        limparCarrinho: _limparCarrinho,
        enviarCompraDoCarrinho: _enviarCompraDoCarrinho,
        listarProdutosPorID: _listarProdutosPorID,
        listarComprasService: _listarComprasService
    }

});