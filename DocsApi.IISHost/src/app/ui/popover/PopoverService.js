var app;
(function (app) {
    var ui;
    (function (ui) {
        "use strict";
        var PopoverService = (function () {
            function PopoverService(uiHelper, prioritizedPromisesService, $http, $q, $templateCache, $timeout) {
                var _this = this;
                this.uiHelper = uiHelper;
                this.prioritizedPromisesService = prioritizedPromisesService;
                this.$http = $http;
                this.$q = $q;
                this.$templateCache = $templateCache;
                this.$timeout = $timeout;
                this.showPopover = function (options) {
                    var deferred = _this.$q.defer();
                    // 1. Cancel possible scheduled hide function
                    // 2. If 
                    //      Double click cancel
                    //      Otherwise continue
                    // 3. Initialize State
                    // 4. Fetch and Set Template
                    // 5. Style
                    // 6. Append To Body
                    // 7. Schedule Hide
                    return deferred.promise;
                };
                this.initialize = function () {
                    var deferred = _this.$q.defer();
                    deferred.resolve();
                    return deferred.promise;
                };
                this.fetchAndSetTemplate = function (options) {
                    var deferred = _this.$q.defer();
                    _this.$http({ method: "GET", url: options.templateUrl, cache: _this.$templateCache }).then(function (results) {
                        _this.htmlTemplate = results.data;
                        deferred.resolve();
                    });
                    return deferred.promise;
                };
                this.style = function () {
                    var deferred = _this.$q.defer();
                    deferred.resolve();
                    return deferred.promise;
                };
                this.appendToBody = function () {
                    var deferred = _this.$q.defer();
                    deferred.resolve();
                    return deferred.promise;
                };
                this.scheduleHide = function () {
                    var deferred = _this.$q.defer();
                    deferred.resolve();
                    return deferred.promise;
                };
            }
            return PopoverService;
        })();
        ui.PopoverService = PopoverService;
        angular.module("app.ui").service("popoverService", ["$compile", "$http", "$q", "$templateCache", "$timeout", "prioritizedPromisesService", "uiHelper", PopoverService]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=PopoverService.js.map