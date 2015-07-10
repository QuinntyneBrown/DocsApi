var app;
(function (app) {
    var ui;
    (function (ui) {
        "use strict";
        var AppFooterConfigProvider = (function () {
            function AppFooterConfigProvider() {
                var _this = this;
                this.appFooterConfig = {};
                this.configure = function (options) {
                    _this.appFooterConfig.appManager = options.appManager;
                };
                this.$get = [function () {
                    return _this.appFooterConfig;
                }];
            }
            return AppFooterConfigProvider;
        })();
        ui.AppFooterConfigProvider = AppFooterConfigProvider;
        angular.module("app.ui").provider("appFooterConfig", [AppFooterConfigProvider]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=appFooterConfigProvider.js.map