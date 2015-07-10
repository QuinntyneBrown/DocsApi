/// <reference path="../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var security;
    (function (security) {
        var States = (function () {
            function States() {
            }
            States.configure = function ($stateProvider) {
                $stateProvider.state("login", {
                    url: "/login",
                    templateUrl: "/src/app/security/views/login.html",
                    resolve: {
                        routeData: ["stateResolver", function (stateResolver) {
                            return stateResolver.resolve("login");
                        }]
                    }
                });
            };
            return States;
        })();
        security.States = States;
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=security.states.js.map