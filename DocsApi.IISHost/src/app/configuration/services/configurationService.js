var app;
(function (app) {
    var configuration;
    (function (configuration) {
        "use strict";
        var ConfigurationService = (function () {
            function ConfigurationService(dataService) {
                var _this = this;
                this.dataService = dataService;
                this.get = function () {
                    return _this.dataService.fromService({ url: "/api/configuration", method: "GET" }, "configuration");
                };
            }
            return ConfigurationService;
        })();
        configuration.ConfigurationService = ConfigurationService;
        angular.module("app.configuration").service("configurationService", ["dataService", ConfigurationService]);
    })(configuration = app.configuration || (app.configuration = {}));
})(app || (app = {}));
//# sourceMappingURL=configurationService.js.map