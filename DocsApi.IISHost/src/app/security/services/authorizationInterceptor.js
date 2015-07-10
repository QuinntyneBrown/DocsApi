/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var security;
    (function (security) {
        "use strict";
        var AuthorizationInterceptor = (function () {
            function AuthorizationInterceptor(securityManager) {
                var _this = this;
                this.securityManager = securityManager;
                this.request = function (config) {
                    if (_this.securityManager.token) {
                        config.headers.Authorization = "Bearer " + _this.securityManager.token;
                    }
                    return config;
                };
            }
            AuthorizationInterceptor.instance = function (securityManager) {
                return new AuthorizationInterceptor(securityManager);
            };
            return AuthorizationInterceptor;
        })();
        security.AuthorizationInterceptor = AuthorizationInterceptor;
        angular.module("app.security").factory("authorizationInterceptor", ["securityManager", AuthorizationInterceptor.instance]).config([
            "$httpProvider",
            function ($httpProvider) {
                $httpProvider.interceptors.push("authorizationInterceptor");
            }
        ]).run([
            "$",
            "securityManager",
            function ($, securityManager) {
                $.ajaxPrefilter(function (options) {
                    if (!options.beforeSend) {
                        options.beforeSend = function (xhr) {
                            xhr.setRequestHeader("Authorization", "Bearer " + securityManager.token);
                        };
                    }
                });
            }
        ]);
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=authorizationInterceptor.js.map