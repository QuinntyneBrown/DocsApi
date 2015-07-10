var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        common.getStringFromUrl = function (url) {
            var request = new XMLHttpRequest();
            var response = null;
            request.onreadystatechange = function () {
                if (request.readyState == 4 /* completed */) {
                    if (request.status == 200 /* success */) {
                        response = request.responseText;
                    }
                }
            };
            request.open("GET", url, false);
            request.send(null);
            return response;
        };
        angular.module("app.common").value("getStringFromUrl", common.getStringFromUrl);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=getStringFromUrl.js.map