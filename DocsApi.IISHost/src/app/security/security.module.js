/// <reference path="../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var security;
    (function (security) {
        angular.module("app.security", [
            "ui.bootstrap",
            "app.common",
            "app.ui"
        ]).run(["$http", "$location", "$rootScope", "$state", "$templateCache", "fire", "loginRedirect", "securityManager", function ($http, $location, $rootScope, $state, $templateCache, fire, loginRedirect, securityManager) {
            var rootScope = $rootScope;
            var location = $location;
            var state = $state;
            var loginUrl = "/login";
            $rootScope.$on("$stateChangeStart", function (event, toState) {
                rootScope.isNavigating = true;
                if (toState.url == loginUrl) {
                    fire(document.getElementsByTagName("body")[0], "sessionTimeout");
                }
                if (toState && toState["authorizationRequired"]) {
                    if (securityManager.token == null || securityManager.tokenExpiryDate == null || Date.now() > securityManager.tokenExpiryDate) {
                        rootScope.$evalAsync(function () {
                            loginRedirect.redirectToLogin();
                        });
                    }
                }
            });
            $rootScope.$on("$viewContentLoaded", function () {
                $rootScope.isNavigating = false;
                if (state.current.name && state.current["authorizationRequired"] && (securityManager.currentUser == null || securityManager.currentUser == "")) {
                    rootScope.$evalAsync(function () {
                        loginRedirect.redirectToLogin();
                    });
                }
            });
        }]);
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=security.module.js.map