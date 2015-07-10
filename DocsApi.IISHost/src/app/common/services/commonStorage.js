/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var CommonStorage = (function () {
            function CommonStorage(storage) {
                var _this = this;
                this.storage = storage;
                this.storageId = "commonStorage";
                this.get = function () {
                    return _this._storage.get();
                };
                this.getByName = function (params) {
                    return _this._storage.getByName(params);
                };
                this.put = function (params) {
                    _this._storage.put(params);
                };
                this.clear = function () {
                };
                this._storage = storage.instance("commonStorage");
            }
            return CommonStorage;
        })();
        angular.module("app.common").service("commonStorage", ["storage", CommonStorage]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=commonStorage.js.map