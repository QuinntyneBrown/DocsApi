var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        (function (httpStatusCode) {
            httpStatusCode[httpStatusCode["success"] = 200] = "success";
            httpStatusCode[httpStatusCode["notFound"] = 400] = "notFound";
            httpStatusCode[httpStatusCode["unauthorized"] = 401] = "unauthorized";
        })(common.httpStatusCode || (common.httpStatusCode = {}));
        var httpStatusCode = common.httpStatusCode;
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=httpStatusCode.js.map