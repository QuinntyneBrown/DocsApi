var app;
(function (app) {
    var ui;
    (function (ui) {
        var AppHeader = (function () {
            function AppHeader($compile, $filter, appHeaderConfig, $injector) {
                var _this = this;
                this.$compile = $compile;
                this.$filter = $filter;
                this.appHeaderConfig = appHeaderConfig;
                this.$injector = $injector;
                this.templateUrl = "/src/app/ui/appHeader/appHeader.html";
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.link = function (scope, element, attributes) {
                    scope.getTranslations = function () {
                        return _this.i18nManager.translatedPhrases;
                    };
                    scope.appTitle = function () {
                        return _this.$filter("translate")(_this.appHeaderConfig.appTitle);
                    };
                    scope.isAuthenticated = function () {
                        return _this.securityManager.isAuthenticated;
                    };
                    scope.getCurrentUser = function () {
                        return _this.securityManager.currentUser;
                    };
                    scope.navigationLinks = _this.appManager.navigationLinks;
                };
                this.securityManager = $injector.get(appHeaderConfig.securityManager);
                this.i18nManager = $injector.get(appHeaderConfig.i18nManager);
                this.appManager = $injector.get(appHeaderConfig.appManager);
            }
            AppHeader.instance = function ($compile, $filter, appHeaderConfig, $injector) {
                return new AppHeader($compile, $filter, appHeaderConfig, $injector);
            };
            return AppHeader;
        })();
        ui.AppHeader = AppHeader;
        angular.module("app.ui").directive("appHeader", ["$compile", "$filter", "appHeaderConfig", "$injector", AppHeader.instance]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=appHeader.js.map