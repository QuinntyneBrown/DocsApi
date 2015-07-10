var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        common.formDecode = function (data) {
            var result = {};
            data = data.replace("+", " ");
            var properties = data.split("&");
            properties.forEach(function (property) {
                result[property.split("=")[0]] = property.split("=")[1];
            });
            return result;
        };
        angular.module("app.common").value("formDecode", common.formDecode);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=formDecode.js.map