var app;
(function (app) {
    var telemetry;
    (function (telemetry) {
        describe("telemetryManager", function () {
            beforeEach(function () {
                module("app.telemetry");
            });
        });
    })(telemetry = app.telemetry || (app.telemetry = {}));
})(app || (app = {}));
//# sourceMappingURL=telemetryManager.spec.js.map