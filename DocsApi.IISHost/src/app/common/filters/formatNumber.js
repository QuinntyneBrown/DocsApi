var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        function formatNumber() {
            return function (value, culture) {
                var format = "0, 0.00";
                switch (culture) {
                    case "fr-CA":
                        format = "0, 0,00";
                        break;
                }
                return numeral(value).format(format);
            };
        }
        common.formatNumber = formatNumber;
        angular.module("app.common").filter("formatNumber", [formatNumber]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=formatNumber.js.map