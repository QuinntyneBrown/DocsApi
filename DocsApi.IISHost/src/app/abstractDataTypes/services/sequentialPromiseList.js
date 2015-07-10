var app;
(function (app) {
    var abstractDataTypes;
    (function (abstractDataTypes) {
        "use strict";
        var SequentialPromiseList = (function () {
            function SequentialPromiseList($q) {
                var _this = this;
                this.$q = $q;
                this.instance = function () {
                    return new SequentialPromiseList(_this.$q);
                };
                this.promises = [];
                this.results = [];
                this.push = function (options) {
                    _this.promises.push({
                        index: _this.promises.length,
                        func: options.func,
                        options: options.options
                    });
                };
                this.sorted = false;
                this.resolve = function (sequentialPromise) {
                    var deferred = _this.$q.defer();
                    if (!_this.sorted) {
                        _this.promises = _this.promises.sort(function (a, b) {
                            return b.index - a.index;
                        });
                        _this.sorted = true;
                    }
                    sequentialPromise = sequentialPromise || _this.promises[_this.promises.length - 1];
                    sequentialPromise.func(sequentialPromise.options).then(function (results) {
                        _this.results.push(results);
                        _this.promises.pop();
                        if (_this.promises.length > 0) {
                            _this.resolve(_this.promises[_this.promises.length - 1]);
                        }
                        else {
                            deferred.resolve(_this.results);
                        }
                    });
                    return deferred.promise;
                };
            }
            return SequentialPromiseList;
        })();
        abstractDataTypes.SequentialPromiseList = SequentialPromiseList;
        angular.module("app.abstractDataTypes").service("sequentialPromiseList", ["$q", SequentialPromiseList]);
    })(abstractDataTypes = app.abstractDataTypes || (app.abstractDataTypes = {}));
})(app || (app = {}));
//# sourceMappingURL=sequentialPromiseList.js.map