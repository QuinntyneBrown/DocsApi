/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var ManualWorkSpinner = (function () {
            function ManualWorkSpinner($timeout) {
                var _this = this;
                this.$timeout = $timeout;
                this.transclude = true;
                this.restrict = "EA";
                this.replace = true;
                this.templateUrl = "/src/app/ui/manualWorkSpinner/manualWorkSpinner.html";
                this.link = function (scope, element) {
                    var _isBusy = false;
                    var visibilityDurationInMilliseconds = 300;
                    var timeout;
                    scope.$watch("isBusy", function () {
                        if (scope["isBusy"]) {
                            show();
                            _isBusy = true;
                        }
                        else {
                            if (_isBusy) {
                                timeout = _this.$timeout(function () {
                                    timeout = null;
                                    hide();
                                }, visibilityDurationInMilliseconds);
                                _isBusy = false;
                            }
                        }
                    });
                    function hide() {
                        element.find("i.fa-spinner").css({
                            "display": "none"
                        });
                    }
                    function show() {
                        element.find("i.fa-spinner").css({
                            "display": "inline-block"
                        });
                    }
                };
            }
            ManualWorkSpinner.instance = function ($timeout) {
                return new ManualWorkSpinner($timeout);
            };
            return ManualWorkSpinner;
        })();
        common.ManualWorkSpinner = ManualWorkSpinner;
        angular.module("app.ui").directive("manualWorkSpinner", ["$timeout", ManualWorkSpinner.instance]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=manualWorkSpinner.js.map