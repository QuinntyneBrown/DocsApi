/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var formEncode = function (data) {
            var pairs = [];
            for (var name in data) {
                pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }
            return pairs.join('&').replace(/%20/g, '+');
        };
        angular.module("app.common").value("formEncode", formEncode);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=formEncode.js.map