var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var PrioritizedPromisesService = (function () {
            function PrioritizedPromisesService($q) {
                var _this = this;
                this.$q = $q;
                this.instance = function ($q) {
                    return new PrioritizedPromisesService($q);
                };
                this.add = function (func) {
                    _this.stack.push(func);
                    return _this;
                };
                this.resolve = function () {
                    var deferred = _this.$q.defer();
                    _this.processAll(_this.stack, 0, function () {
                        deferred.resolve();
                    });
                    return deferred.promise;
                };
                this.processAll = function (stack, index, callback) {
                    stack[index].func(_this.stack[index].options).then(function (results) {
                        _this.next(stack, index, callback);
                    }).catch(function (error) {
                        _this.next(stack, index, callback);
                    });
                };
                this.next = function (stack, index, callback) {
                    index = index + 1;
                    if (index < _this.stack.length)
                        _this.processAll(stack, index, callback);
                    else {
                        callback();
                    }
                };
                this.stack = [];
            }
            return PrioritizedPromisesService;
        })();
        common.PrioritizedPromisesService = PrioritizedPromisesService;
        angular.module("app.common").service("prioritizedPromisesService", ["$q", PrioritizedPromisesService]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=prioritizedPromisesService.js.map