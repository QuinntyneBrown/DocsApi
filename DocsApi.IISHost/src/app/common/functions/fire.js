/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        common.fire = function (target, type, properties) {
            var htmlEvent = document.createEvent("HTMLEvents");
            htmlEvent.initEvent(type, true, true);
            for (var j in properties) {
                htmlEvent[j] = properties[j];
            }
            target.dispatchEvent(htmlEvent);
        };
        angular.module("app.common").value("fire", common.fire);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=fire.js.map