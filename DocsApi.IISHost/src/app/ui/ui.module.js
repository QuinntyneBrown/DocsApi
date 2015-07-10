/// <reference path="../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var ui;
    (function (ui) {
        angular.module("app.ui", [
            "angularMoment",
            "app.configuration",
            "app.telemetry",
            "app.security",
            "ui.bootstrap",
            "app.i18n"
        ]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=ui.module.js.map