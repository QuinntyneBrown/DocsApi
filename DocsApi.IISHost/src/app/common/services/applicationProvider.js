var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var ApplicationProvider = (function () {
            function ApplicationProvider() {
                var _this = this;
                this.configure = function (options) {
                    _this.application.name = options.applicationName;
                };
                this.application = {};
                this.$get = [function () {
                    return _this.application;
                }];
            }
            return ApplicationProvider;
        })();
        common.ApplicationProvider = ApplicationProvider;
        angular.module("app.common").provider("application", [ApplicationProvider]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=applicationProvider.js.map