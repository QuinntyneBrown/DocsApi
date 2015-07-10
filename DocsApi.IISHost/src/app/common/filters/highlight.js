var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        common.highlight = function ($sce) {
            return function (value, text) {
                if (!value) {
                    return $sce.trustAsHtml(text);
                }
                return $sce.trustAsHtml(text.replace(new RegExp(value, "gi"), function (match) {
                    return '<span class="highlightedText">' + match + '</span>';
                }));
            };
        };
        angular.module("app.common").filter("highlight", ["$sce", common.highlight]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=highlight.js.map