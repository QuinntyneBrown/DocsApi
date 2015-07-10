var app;
(function (app) {
    var abstractDataTypes;
    (function (abstractDataTypes) {
        var List = (function () {
            function List() {
                var _this = this;
                this.dataStore = [];
                this.instance = function () {
                    return new List();
                };
                this.clear = function () {
                    throw new Error("Not Implemented");
                };
                this.toString = function () {
                    throw new Error("Not Implemented");
                };
                this.getElement = function (pos) {
                    throw new Error("Not Implemented");
                };
                this.insert = function (elemnt) {
                    throw new Error("Not Implemented");
                };
                this.append = function (element) {
                    _this.dataStore[_this.pos++] = element;
                };
                this.remove = function (element) {
                    throw new Error("Not Implemented");
                };
                this.front = function () {
                    throw new Error("Not Implemented");
                };
                this.end = function () {
                    throw new Error("Not Implemented");
                };
                this.prev = function () {
                    throw new Error("Not Implemented");
                };
                this.next = function () {
                    throw new Error("Not Implemented");
                };
                this.currPos = function () {
                    throw new Error("Not Implemented");
                };
                this.moveTo = function () {
                    throw new Error("Not Implemented");
                };
            }
            Object.defineProperty(List.prototype, "listSize", {
                get: function () {
                    return this.dataStore.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "pos", {
                get: function () {
                    return 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(List.prototype, "length", {
                get: function () {
                    return this.dataStore.length;
                },
                enumerable: true,
                configurable: true
            });
            return List;
        })();
        abstractDataTypes.List = List;
        angular.module("app.abstractDataTypes").service("list", [List]);
    })(abstractDataTypes = app.abstractDataTypes || (app.abstractDataTypes = {}));
})(app || (app = {}));
//# sourceMappingURL=list.js.map