var app;
(function (app) {
    var telemetry;
    (function (telemetry) {
        describe("requestProfiler", function () {
            beforeEach(function () {
                module("app.telemetry");
            });
        });
    })(telemetry = app.telemetry || (app.telemetry = {}));
})(app || (app = {}));
//# sourceMappingURL=requestProfiler.spec.js.map