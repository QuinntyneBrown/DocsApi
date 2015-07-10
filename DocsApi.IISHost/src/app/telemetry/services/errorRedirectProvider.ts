/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />

module app.telemetry {

    "use strict";

    export class ErrorRedirectProvider implements IErrorRedirectProvider {
        constructor() {

        }

        public $get = ["$location", "telemetryManager", ($location: ng.ILocationService, TelemetryManager:any) => {
            return {
                redirectPostError: (options:any) => {
                    for (var i = TelemetryManager.urls.length - 1; i >= 0; i--) {
                        var path = TelemetryManager.urls[i].path;
                        if (TelemetryManager.urls[i].changeSuccess && ((options.timestamp - TelemetryManager.urls[i].dateTime) > 500)) {
                            i = -1;
                            $location.path("/");
                        }
                    }
                }
            };
        }];
    }

    angular.module("app.telemetry").provider("errorRedirect", [ErrorRedirectProvider]);

} 
