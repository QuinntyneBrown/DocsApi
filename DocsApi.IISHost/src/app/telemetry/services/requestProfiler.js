/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var telemetry;
    (function (telemetry) {
        "use strict";
        var RequestProfiler = (function () {
            function RequestProfiler($q, TelemetryManager) {
                var _this = this;
                this.$q = $q;
                this.TelemetryManager = TelemetryManager;
                this.request = function (config) {
                    config.timestamp = Date.now();
                    var requestProfiles = _this.TelemetryManager.requestProfiles;
                    requestProfiles.push({
                        url: config.url,
                        startTime: config.timestamp
                    });
                    _this.TelemetryManager.requestProfiles = requestProfiles;
                    return _this.$q.when(config);
                };
                this.response = function (response) {
                    response.config.elapsed = Date.now() - response.config.timestamp;
                    _this.TelemetryManager.updateRequestProfile(response);
                    return _this.$q.when(response);
                };
            }
            RequestProfiler.instance = function ($q, TelemetryManager) {
                return new RequestProfiler($q, TelemetryManager);
            };
            return RequestProfiler;
        })();
        telemetry.RequestProfiler = RequestProfiler;
        angular.module("app.telemetry").factory("requestProfiler", ["$q", "telemetryManager", RequestProfiler.instance]).config([
            "$httpProvider",
            function ($httpProvider) {
                $httpProvider.interceptors.push("requestProfiler");
            }
        ]);
    })(telemetry = app.telemetry || (app.telemetry = {}));
})(app || (app = {}));
//# sourceMappingURL=requestProfiler.js.map