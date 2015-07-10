var app;
(function (app) {
    var telemetry;
    (function (telemetry) {
        "use strict";
        angular.module("app.telemetry").value("printStackTrace", function (error) {
            return printStackTrace({ e: error });
        });
    })(telemetry = app.telemetry || (app.telemetry = {}));
})(app || (app = {}));
//# sourceMappingURL=printStackTrace.js.map