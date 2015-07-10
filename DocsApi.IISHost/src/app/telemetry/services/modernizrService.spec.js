var app;
(function (app) {
    var telemetry;
    (function (telemetry) {
        describe("modernizrService", function () {
            beforeEach(function () {
                module("app.telemetry");
            });
        });
    })(telemetry = app.telemetry || (app.telemetry = {}));
})(app || (app = {}));
//# sourceMappingURL=modernizrService.spec.js.map