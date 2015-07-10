/// <reference path="../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var common;
    (function (common) {
        angular.module("app.common", [
            "ui.router"
        ]).config(["stateResolverProvider", function (stateResolverProvider) {
            stateResolverProvider.configure({
                priority: 2,
                key: "metadataRouteData",
                promise: [
                    "$q",
                    "metadataService",
                    function ($q, metaDataService) {
                        var deferred = $q.defer();
                        metaDataService.getMetadata().then(function (results) {
                            deferred.resolve(true);
                        });
                        return deferred.promise;
                    }
                ]
            });
        }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=common.module.js.map