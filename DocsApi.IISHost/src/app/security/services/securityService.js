/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var security;
    (function (security) {
        "use strict";
        var SecurityService = (function () {
            function SecurityService($q, dataService, formEncode, apiEndpoint, configurationManager) {
                var _this = this;
                this.$q = $q;
                this.dataService = dataService;
                this.formEncode = formEncode;
                this.apiEndpoint = apiEndpoint;
                this.configurationManager = configurationManager;
                this.getCurrentUser = function () {
                    var deferred = _this.$q.defer();
                    _this.dataService.fromService({ method: "GET", url: _this.apiEndpoint.getBaseUrl("currentUser") }).then(function (results) {
                        deferred.resolve(results);
                    }).catch(function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
            }
            SecurityService.prototype.tryToLogin = function (username, password) {
                var deferred = this.$q.defer();
                var configuration = {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                };
                var data = this.formEncode({
                    username: this.configurationManager.configuration.applicationName + "." + username,
                    password: password,
                    grant_type: "password"
                });
                this.dataService.fromService({ method: "POST", url: this.apiEndpoint.getBaseUrl("login"), data: data, configuration: configuration }).then(function (results) {
                    deferred.resolve({ username: username, data: results.data });
                }).catch(function (Error) {
                    deferred.reject();
                });
                return deferred.promise;
            };
            return SecurityService;
        })();
        security.SecurityService = SecurityService;
        angular.module("app.security").service("securityService", ["$q", "dataService", "formEncode", "apiEndpoint", "configurationManager", SecurityService]);
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=securityService.js.map