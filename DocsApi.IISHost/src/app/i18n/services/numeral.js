/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var i18n;
    (function (i18n) {
        var Numeral = (function () {
            function Numeral() {
            }
            Object.defineProperty(Numeral.prototype, "language", {
                set: function (value) {
                    if (this.acceptedCultureCodes.indexOf(value) > 0) {
                        numeral.language(value);
                    }
                    else {
                        numeral.language("en");
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Numeral.prototype, "acceptedCultureCodes", {
                get: function () {
                    return ["en-US", "fr-CA"];
                },
                enumerable: true,
                configurable: true
            });
            return Numeral;
        })();
        i18n.Numeral = Numeral;
        angular.module("app.i18n").service("numeral", [Numeral]);
    })(i18n = app.i18n || (app.i18n = {}));
})(app || (app = {}));
//# sourceMappingURL=numeral.js.map