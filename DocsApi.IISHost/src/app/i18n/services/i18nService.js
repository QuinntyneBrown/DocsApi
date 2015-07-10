var app;
(function (app) {
    var i18n;
    (function (i18n) {
        "use strict";
        var I18nService = (function () {
            function I18nService($http, $q, apiEndpoint, dataService, localStorageService) {
                var _this = this;
                this.$http = $http;
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
                this.dataService = dataService;
                this.localStorageService = localStorageService;
                this.get = function (cutlureCode, phrases) {
                    var deferred = _this.$q.defer();
                    var data = {
                        cultureCode: cutlureCode,
                        phrases: phrases
                    };
                    var cachedData = _this.localStorageService.get(_this.baseUri + cutlureCode);
                    if (!cachedData) {
                        _this.$http({ method: "POST", url: _this.baseUri, data: data }).then(function (results) {
                            _this.localStorageService.set(_this.baseUri + cutlureCode, results);
                            deferred.resolve(results);
                        }).catch(function (error) {
                            deferred.reject();
                        });
                    }
                    else {
                        deferred.resolve(cachedData);
                    }
                    return deferred.promise;
                };
            }
            Object.defineProperty(I18nService.prototype, "baseUri", {
                get: function () {
                    return this.apiEndpoint.getBaseUrl() + "/i18n";
                },
                enumerable: true,
                configurable: true
            });
            return I18nService;
        })();
        i18n.I18nService = I18nService;
        angular.module("app.i18n").service("i18nService", ["$http", "$q", "apiEndpoint", "dataService", "localStorageService", I18nService]);
    })(i18n = app.i18n || (app.i18n = {}));
})(app || (app = {}));
//# sourceMappingURL=i18nService.js.map