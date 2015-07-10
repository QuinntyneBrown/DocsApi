/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var WorkSpinner = (function () {
            function WorkSpinner($rootScope, requestCounter) {
                var _this = this;
                this.$rootScope = $rootScope;
                this.requestCounter = requestCounter;
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.template = "<div class='work-spinner' data-ng-show='requestCount && isNavigating'><i id='spin' class='fa fa-spinner fa-spin fade'></i></div>";
                this.link = function (scope) {
                    scope.$watch(function () {
                        return _this.requestCounter.getRequestCount();
                    }, function (requestCount) {
                        scope["requestCount"] = requestCount;
                    });
                    _this.$rootScope.$watch("isNavigating", function () {
                        scope["isNavigating"] = _this.$rootScope["isNavigating"];
                    });
                };
            }
            WorkSpinner.instance = function ($rootScope, requestCounter) {
                return new WorkSpinner($rootScope, requestCounter);
            };
            return WorkSpinner;
        })();
        angular.module("app.common").directive("workSpinner", ["$rootScope", "requestCounter", WorkSpinner.instance]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=workSpinner.js.map