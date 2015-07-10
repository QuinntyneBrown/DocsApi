/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var security;
    (function (security) {
        "use strict";
        var SecurityManager = (function () {
            function SecurityManager(sessionStorageProperty, storageProperty) {
                var _this = this;
                this.tokenExpired = function () {
                    if (!_this.isAuthenticated)
                        return false;
                    return Date.now() > _this.tokenExpiryDate;
                };
                this._token = sessionStorageProperty.instance("token");
                this._tokenExpiryDate = sessionStorageProperty.instance("tokenExpiryDate");
                this._currentUser = sessionStorageProperty.instance("currentUser");
                this._username = storageProperty.instance("username");
            }
            Object.defineProperty(SecurityManager.prototype, "token", {
                get: function () {
                    return this._token.get();
                },
                set: function (value) {
                    this._token.set(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SecurityManager.prototype, "tokenExpiryDate", {
                get: function () {
                    return this._tokenExpiryDate.get();
                },
                set: function (value) {
                    this._tokenExpiryDate.set(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SecurityManager.prototype, "currentUser", {
                get: function () {
                    return this._currentUser.get();
                },
                set: function (value) {
                    this._currentUser.set(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SecurityManager.prototype, "username", {
                get: function () {
                    return this._username.get();
                },
                set: function (value) {
                    this._username.set(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SecurityManager.prototype, "isAuthenticated", {
                get: function () {
                    return this.token != null;
                },
                enumerable: true,
                configurable: true
            });
            return SecurityManager;
        })();
        security.SecurityManager = SecurityManager;
        angular.module("app.security").service("securityManager", ["sessionStorageProperty", "storageProperty", SecurityManager]);
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=securityManager.js.map