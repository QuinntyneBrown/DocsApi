var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        (function (formFactor) {
            formFactor[formFactor["phone"] = 1] = "phone";
            formFactor[formFactor["tablet"] = 2] = "tablet";
            formFactor[formFactor["desktop"] = 3] = "desktop";
        })(common.formFactor || (common.formFactor = {}));
        var formFactor = common.formFactor;
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=formFactor.js.map