angular.module("ecommerce").controller("loginController", function ($scope, $location, loginService) {

    $scope.cadastrarUsuario = function (cadUsuario) {

        loginService.cadastrar(cadUsuario)
        //call back
            .then(function (response) {
               alert("Usuário cadastrado com sucesso.")
            })
            .catch(function (response) {
                alert("Não foi possível fazer o cadastro. Usuário já existe!");
            })

    };

    $scope.autenticarUsuario = function (autUsuario) {

        loginService.autenticar(autUsuario)

            .then(function (response) {
                $scope.autUsuario = response.data;
                localStorage.setItem("usuario", JSON.stringify($scope.autUsuario));
                localStorage.setItem("token", JSON.stringify($scope.autUsuario.token));
                $location.url("/finalizarCompra")
            })
            .catch(function (response) {
                alert("Login ou senha inválidos!");
            })
    }

});