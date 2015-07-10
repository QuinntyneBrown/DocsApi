/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var common;
    (function (common) {
        var DataService = (function () {
            function DataService($http, $q, commonStorage) {
                var _this = this;
                this.$http = $http;
                this.$q = $q;
                this.commonStorage = commonStorage;
                this.fromCache = function (action) {
                    return _this.commonStorage.getByName({ name: action.url + JSON.stringify(action.params) });
                };
                this.fromCacheOrService = function (action, cacheKey) {
                    var deferred = _this.$q.defer();
                    var cachedData = _this.commonStorage.getByName({ name: action.url + JSON.stringify(action.params) });
                    if (!cachedData || !cachedData.value) {
                        _this.fromService(action, cacheKey).then(function (results) {
                            deferred.resolve(results);
                        }).catch(function (error) {
                            deferred.reject(error);
                        });
                    }
                    else {
                        deferred.resolve(cachedData.value);
                    }
                    return deferred.promise;
                };
                this.fromService = function (action, cacheKey) {
                    var deferred = _this.$q.defer();
                    _this.$http({ method: action.method, url: action.url, data: action.data, params: action.params }).then(function (results) {
                        _this.commonStorage.put({ category: cacheKey, name: action.url + JSON.stringify(action.params), value: results });
                        deferred.resolve(results);
                    }).catch(function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                this.invalidateCache = function (cacheKey) {
                    _this.commonStorage.get().forEach(function (item) {
                        if (item.category === cacheKey) {
                            _this.commonStorage.put({ name: item.name, value: null });
                        }
                    });
                };
            }
            return DataService;
        })();
        common.DataService = DataService;
        angular.module("app.common").service("dataService", ["$http", "$q", "commonStorage", DataService]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=dataService.js.map