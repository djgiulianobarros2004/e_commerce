angular.module("ecommerce").factory("loginService", function ($http) {

    var url = "http://ecommerce-cpw.herokuapp.com/rest";

    var _cadastrar = function (cadUsuario) {
        return $http.post(url + "/user/signup", cadUsuario);

    }

    var _autenticar = function (autUsuario) {
        var credenciais = btoa(autUsuario.email + ":" + autUsuario.password);
        var req = {
            method: "GET",
            url: url + "/user/login",
            headers: {
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Authorization": "Basic " + credenciais
            }
        }
        return $http(req)
    }
    return {
        cadastrar: _cadastrar,
        autenticar: _autenticar
    }

});