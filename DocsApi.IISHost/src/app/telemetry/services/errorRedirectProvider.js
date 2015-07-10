/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var telemetry;
    (function (telemetry) {
        "use strict";
        var ErrorRedirectProvider = (function () {
            function ErrorRedirectProvider() {
                this.$get = ["$location", "telemetryManager", function ($location, TelemetryManager) {
                    return {
                        redirectPostError: function (options) {
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
            return ErrorRedirectProvider;
        })();
        telemetry.ErrorRedirectProvider = ErrorRedirectProvider;
        angular.module("app.telemetry").provider("errorRedirect", [ErrorRedirectProvider]);
    })(telemetry = app.telemetry || (app.telemetry = {}));
})(app || (app = {}));
//# sourceMappingURL=errorRedirectProvider.js.map