var app;
(function (app) {
    var security;
    (function (security) {
        "use strict";
        var SecurityModalService = (function () {
            function SecurityModalService($rootScope, $q, modalService, securityManager) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.$q = $q;
                this.modalService = modalService;
                this.securityManager = securityManager;
                this.showModal = function () {
                    var deferred = _this.$q.defer();
                    _this.modalService.showModal({
                        //controller: "loginModalController as loginModal",
                        templateUrl: "/src/app/security/views/partials/login.html"
                    }, null).then(function (results) {
                        deferred.resolve();
                    });
                    return deferred.promise;
                };
            }
            return SecurityModalService;
        })();
        security.SecurityModalService = SecurityModalService;
        angular.module("app.security").service("securityModalService", ["$rootScope", "$q", "modalService", "securityManager", SecurityModalService]);
    })(security = app.security || (app.security = {}));
})(app || (app = {}));
//# sourceMappingURL=securityModalService.js.map