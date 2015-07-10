var app;
(function (app) {
    var telemetry;
    (function (telemetry) {
        describe("feature", function () {
            beforeEach(function () {
                module("app.telemetry");
            });
        });
    })(telemetry = app.telemetry || (app.telemetry = {}));
})(app || (app = {}));
//# sourceMappingURL=features.spec.js.map