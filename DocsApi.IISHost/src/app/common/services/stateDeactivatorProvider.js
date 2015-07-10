var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var StateDeactivatorProvider = (function () {
            function StateDeactivatorProvider() {
            }
            return StateDeactivatorProvider;
        })();
        common.StateDeactivatorProvider = StateDeactivatorProvider;
        angular.module("app.common").service("stateDeactivator", [common.StateResolverProvider]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=stateDeactivatorProvider.js.map