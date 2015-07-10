var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        (function (stateResolutionPriority) {
            stateResolutionPriority[stateResolutionPriority["requestStart"] = 0] = "requestStart";
            stateResolutionPriority[stateResolutionPriority["beforeAuthentication"] = 1] = "beforeAuthentication";
            stateResolutionPriority[stateResolutionPriority["afterAuthentication"] = 200] = "afterAuthentication";
        })(common.stateResolutionPriority || (common.stateResolutionPriority = {}));
        var stateResolutionPriority = common.stateResolutionPriority;
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=stateResolutionPriority.js.map