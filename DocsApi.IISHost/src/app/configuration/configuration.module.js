var app;
(function (app) {
    var configuration;
    (function (configuration) {
        angular.module("app.configuration", [
            "app.common",
            "ui.router"
        ]).config(["stateResolverProvider", function (stateResolverProvider) {
            stateResolverProvider.configure({
                priority: 0,
                promise: ["$http", "$q", "configurationManager", "configurationService", function ($http, $q, configurationManager, configurationService) {
                    var deferred = $q.defer();
                    configurationService.get().then(function (results) {
                        configurationManager.configuration = results.data;
                        deferred.resolve();
                    }).catch(function (error) {
                        deferred.resolve();
                    });
                    return deferred.promise;
                }]
            });
        }]);
    })(configuration = app.configuration || (app.configuration = {}));
})(app || (app = {}));
//# sourceMappingURL=configuration.module.js.map