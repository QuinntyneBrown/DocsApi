var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var StateParamsHelper = (function () {
            function StateParamsHelper($location, $state, pathRegExp) {
                var _this = this;
                this.$location = $location;
                this.$state = $state;
                this.pathRegExp = pathRegExp;
                this.getParams = function (paramIds, stateUrl) {
                    var params = {};
                    var currentState;
                    if (stateUrl) {
                        currentState = _this.$state.get().filter(function (state) {
                            return state.url === stateUrl;
                        });
                    }
                    else {
                        currentState = _this.$state.get().filter(function (state) {
                            return state.url.indexOf("{" + paramIds[0] + "}") > 0;
                        });
                    }
                    var url;
                    if (currentState[0].prefix) {
                        url = currentState[0].prefix + currentState[0].url;
                    }
                    else {
                        url = currentState[0].url;
                    }
                    paramIds.forEach(function (param) {
                        url = url.replace("{" + param + "}", ":" + param);
                    });
                    var regEx = _this.pathRegExp(url, {});
                    var results = regEx.regexp.exec(_this.$location.path());
                    paramIds.forEach(function (paramId, index) {
                        params[paramId] = results[index + 1];
                    });
                    return params;
                };
            }
            return StateParamsHelper;
        })();
        common.StateParamsHelper = StateParamsHelper;
        angular.module("app.common").service("stateParamsHelper", ["$location", "$state", "pathRegExp", StateParamsHelper]).run(["$state", function ($state) {
            // figure out to make a function to find duplicate query parameters
        }]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=stateParamsHelper.js.map