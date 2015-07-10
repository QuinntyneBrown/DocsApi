/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />

module app.telemetry {

    "use strict";

    export class RequestProfiler implements IRequestProfiler {

        constructor(private $q: ng.IQService, private TelemetryManager: ITelemetryManager) {

        }

        public static instance = ($q, TelemetryManager: ITelemetryManager) => {
            return new RequestProfiler($q, TelemetryManager);
        }

        public request = (config) => {
            config.timestamp = Date.now();
            var requestProfiles = this.TelemetryManager.requestProfiles;
            requestProfiles.push({
                url: config.url,
                startTime: config.timestamp
            });
            this.TelemetryManager.requestProfiles = requestProfiles;
            return this.$q.when(config);
        }

        public response = (response) => {
            response.config.elapsed = Date.now() - response.config.timestamp;
            this.TelemetryManager.updateRequestProfile(response);
            return this.$q.when(response);
        }

    }

    angular.module("app.telemetry").factory("requestProfiler", ["$q", "telemetryManager",RequestProfiler.instance])
        .config([
        "$httpProvider", ($httpProvider) => {
            $httpProvider.interceptors.push("requestProfiler");
        }
    ]);
} 
