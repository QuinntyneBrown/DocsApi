var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        common.convertObjectToCamelCase = function (object, newObject) {
            for (var property in object) {
                newObject[property[0].toLowerCase() + property.substr(1)] = object[property];
                for (var childObject in object[property]) {
                    common.convertObjectToCamelCase(childObject, newObject[property[0].toLowerCase() + property.substr(1)]);
                }
            }
            return newObject;
        };
        angular.module("app.common").value("convertObjectToCamelCase", common.convertObjectToCamelCase);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=convertObjectToCamelCase.js.map