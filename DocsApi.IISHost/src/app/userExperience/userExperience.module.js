var app;
(function (app) {
    var userExperience;
    (function (userExperience) {
        angular.module("app.userExperience", [
            "ui.bootstrap",
            "ui.router",
            "app.common",
            "app.telemetry",
            "app.i18n",
            "app.ui"
        ]);
    })(userExperience = app.userExperience || (app.userExperience = {}));
})(app || (app = {}));
//# sourceMappingURL=userExperience.module.js.map