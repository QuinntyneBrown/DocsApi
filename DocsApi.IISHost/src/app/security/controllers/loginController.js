/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var security;
    (function (security) {
        var LoginController = (function () {
            function LoginController($compile, $location, $q, $rootScope, loginRedirect, securityManager, securityService) {
                this.$compile = $compile;
                this.$location = $location;
                this.$q = $q;
                this.$rootScope = $rootScope;
                this.loginRedirect = loginRedirect;
                this.securityManager = securityManager;
                this.securityService = securityService;
                this.password = "sirA4tec";
                this.username = this.securityManager.username;
                var link = document.getElementsByClassName("contact-link")[0];
                $rootScope["hi"] = function () {
                    alert("hi");
                };
                var frag = document.createElement("div");
                var sp1 = document.createElement("a");
                sp1.innerHTML = "Sam";
                sp1.setAttribute("data-ng-click", "hi()");
                frag.appendChild(sp1);
                var linkFn = $compile(frag);
                var content = linkFn($rootScope);
                var x = content[0].children[0];
                link.parentNode.replaceChild(x, link);
            }
            LoginController.prototype.tryToLogin = function ($form) {
                var _this = this;
                var deferred = this.$q.defer();
                this.$rootScope["isBusy"] = true;
                this.securityService.tryToLogin(this.username, this.password).then(function (results) {
                    _this.securityManager.token = results.data.access_token;
                    _this.securityManager.username = _this.username;
                    _this.securityManager.tokenExpiryDate = Date.now() + results.data.expires_in * 1000;
                    _this.$rootScope["isBusy"] = false;
                    if (_this.$location.path() == _this.loginRedirect.getLoginUrl()) {
                        _this.loginRedirect.redirectPostLogin();
                    }
                    else {
                        _this.$rootScope.$emit("closeModal");
                    }
                    deferred.resolve();
                }).catch(function (error) {
                    _this.$rootScope["isBusy"] = false;
                    if (_this.$location.path() != _this.loginRedirect.getLoginUrl()) {
                        _this.$rootScope.$emit("closeModal");
                        _this.loginRedirect.redirectToLogin();
                    }
                    deferred.reject();
                });
                return deferred.promise;
            };
            return LoginController;
        })();
        security.LoginController = LoginController;
        angular.module("app.security").controller("loginController", ["$compile", "$location", "$q", "$rootScope", "loginRedirect", "securityManager", "securityService", LoginController]);
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=loginController.js.map