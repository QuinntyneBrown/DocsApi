var app;
(function (app) {
    var common;
    (function (common) {
        function fromCacheOrService($http, $q, cacheKey, action, storage) {
            var deferred = $q.defer();
            var cachedData = storage.getByName({ name: action.url + JSON.stringify(action.params) });
            if (!cachedData || !cachedData.value) {
                $http({ method: action.method, url: action.url, data: action.data, params: action.params }).then(function (results) {
                    storage.put({ category: cacheKey, name: action.url + JSON.stringify(action.params), value: results });
                    deferred.resolve(results);
                }).catch(function (error) {
                    deferred.reject(error);
                });
            }
            else {
                deferred.resolve(cachedData.value);
            }
            return deferred.promise;
        }
        common.fromCacheOrService = fromCacheOrService;
        angular.module("app.common").value("fromCacheOrService", fromCacheOrService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=fromCacheOrService.js.map