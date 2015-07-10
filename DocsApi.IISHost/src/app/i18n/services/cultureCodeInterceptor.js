/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var i18n;
    (function (i18n) {
        "use strict";
        var CultureCodeInterceptor = (function () {
            function CultureCodeInterceptor(i18nManager) {
                var _this = this;
                this.i18nManager = i18nManager;
                this.request = function (config) {
                    config.headers.AcceptLanguages = _this.i18nManager.cultureCode;
                    return config;
                };
            }
            CultureCodeInterceptor.instance = function (i18nManager) {
                return new CultureCodeInterceptor(i18nManager);
            };
            return CultureCodeInterceptor;
        })();
        i18n.CultureCodeInterceptor = CultureCodeInterceptor;
        angular.module("app.i18n").factory("cultureCodeInterceptor", ["i18nManager", CultureCodeInterceptor.instance]).config([
            "$httpProvider",
            function ($httpProvider) {
                $httpProvider.interceptors.push("cultureCodeInterceptor");
            }
        ]);
    })(i18n = app.i18n || (app.i18n = {}));
})(app || (app = {}));
//# sourceMappingURL=cultureCodeInterceptor.js.map