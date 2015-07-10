/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var security;
    (function (security) {
        "use strict";
        var LoginRedirectProvider = (function () {
            function LoginRedirectProvider() {
                var _this = this;
                this.setLoginUrl = function (value) {
                    _this.loginUrl = value;
                };
                this.setDefaultUrl = function (value) {
                    _this.defaultPath = value;
                };
                this.$get = ["$q", "$location", function ($q, $location) {
                    return {
                        setLastPath: function (path) {
                            _this._lastPath = path;
                        },
                        getLoginUrl: function () {
                            return _this.loginUrl;
                        },
                        responseError: function (response) {
                            if (response.status == 401) {
                                _this.lastPath = $location.path();
                                $location.path(_this.loginUrl);
                            }
                            return $q.reject(response);
                        },
                        redirectPostLogin: function () {
                            if (_this.lastPath) {
                                $location.path(_this.lastPath);
                                _this.lastPath = "";
                            }
                            else {
                                $location.path(_this.defaultPath);
                            }
                        },
                        redirectToLogin: function () {
                            _this.lastPath = $location.path();
                            $location.path(_this.loginUrl);
                        }
                    };
                }];
            }
            Object.defineProperty(LoginRedirectProvider.prototype, "lastPath", {
                get: function () {
                    return this._lastPath;
                },
                set: function (value) {
                    if (value == this.loginUrl) {
                        return;
                    }
                    this._lastPath = value;
                },
                enumerable: true,
                configurable: true
            });
            return LoginRedirectProvider;
        })();
        security.LoginRedirectProvider = LoginRedirectProvider;
        angular.module("app.security").provider("loginRedirect", [LoginRedirectProvider]).config(["$httpProvider", config]);
        function config($httpProvider) {
            $httpProvider.interceptors.push("loginRedirect");
        }
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=loginRedirectProvider.js.map