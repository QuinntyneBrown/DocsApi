var app;
(function (app) {
    var security;
    (function (security) {
        "use strict";
        var LoginDirective = (function () {
            function LoginDirective() {
                this.restrict = "E";
                this.replace = true;
                this.templateUrl = "/src/app/security/directives/login/login.html";
                this.controller = "loginController";
                this.controllerAs = "login";
            }
            LoginDirective.instance = function () {
                return new LoginDirective();
            };
            return LoginDirective;
        })();
        security.LoginDirective = LoginDirective;
        angular.module("app.security").directive("login", [LoginDirective.instance]);
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=login.js.map