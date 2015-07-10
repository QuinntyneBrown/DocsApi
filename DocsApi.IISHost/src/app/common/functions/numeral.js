var app;
(function (app) {
    var common;
    (function (common) {
        angular.module("app.common").value("numeral", window["numeral"]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=numeral.js.map