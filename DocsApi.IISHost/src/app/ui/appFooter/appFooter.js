var app;
(function (app) {
    var ui;
    (function (ui) {
        "use strict";
        var AppFooter = (function () {
            function AppFooter($injector, appFooterConfig) {
                var _this = this;
                this.$injector = $injector;
                this.appFooterConfig = appFooterConfig;
                this.templateUrl = "/src/app/ui/appFooter/appFooter.html";
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.link = function (scope, element, attributes) {
                    scope.appManager = _this.appManager;
                };
                this.appManager = $injector.get(appFooterConfig.appManager);
            }
            AppFooter.instance = function ($injector, appFooterConfig) {
                return new AppFooter($injector, appFooterConfig);
            };
            return AppFooter;
        })();
        ui.AppFooter = AppFooter;
        angular.module("app.ui").directive("appFooter", ["$injector", "appFooterConfig", AppFooter.instance]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=appFooter.js.map