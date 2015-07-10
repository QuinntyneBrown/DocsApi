var app;
(function (app) {
    var ui;
    (function (ui) {
        "use strict";
        var AppHeaderConfigProvider = (function () {
            function AppHeaderConfigProvider() {
                var _this = this;
                this.appHeaderConfig = {};
                this.configure = function (options) {
                    _this.appHeaderConfig.securityManager = options.securityManager || "securityManager";
                    _this.appHeaderConfig.i18nManager = options.i18nManager || "i18nManager";
                    _this.appHeaderConfig.appTitle = options.appTitle || "Road Call Center";
                    _this.appHeaderConfig.appManager = options.appManager;
                };
                this.$get = [function () {
                    return _this.appHeaderConfig;
                }];
            }
            return AppHeaderConfigProvider;
        })();
        ui.AppHeaderConfigProvider = AppHeaderConfigProvider;
        angular.module("app.ui").provider("appHeaderConfig", [AppHeaderConfigProvider]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=appHeaderConfigProvider.js.map