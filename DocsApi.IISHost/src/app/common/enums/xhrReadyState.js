var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        (function (xhrReadyState) {
            xhrReadyState[xhrReadyState["completed"] = 4] = "completed";
        })(common.xhrReadyState || (common.xhrReadyState = {}));
        var xhrReadyState = common.xhrReadyState;
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=xhrReadyState.js.map