var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var VersionInterceptor = (function () {
            function VersionInterceptor($q) {
                var _this = this;
                this.$q = $q;
                this.serverVersion = null;
                this.response = function (response) {
                    if (response.headers().server && response.headers().server != "Microsoft-IIS/10.0")
                        _this.serverVersion = response.headers().server;
                    return _this.$q.when(response);
                };
            }
            VersionInterceptor.instance = function ($q) {
                return new VersionInterceptor($q);
            };
            return VersionInterceptor;
        })();
        common.VersionInterceptor = VersionInterceptor;
        angular.module("app.common").factory("versionInterceptor", ["$q", VersionInterceptor.instance]).config([
            "$httpProvider",
            function ($httpProvider) {
                $httpProvider.interceptors.push("versionInterceptor");
            }
        ]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=versionInterceptor.js.map