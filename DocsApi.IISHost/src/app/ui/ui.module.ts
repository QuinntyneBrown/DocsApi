/// <reference path="../../../scripts/typings/typescriptapp.d.ts" />

module app.ui {
    angular.module("app.ui", [
        "angularMoment",
        "app.configuration",
        "app.telemetry",
        "app.security",
        "ui.bootstrap",
        "app.i18n"
    ]);
} 