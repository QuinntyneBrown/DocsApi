/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var Storage = (function () {
            function Storage($window) {
                var _this = this;
                this.$window = $window;
                this.instance = function (storageId) {
                    var storage = new Storage(_this.$window);
                    storage._storageId = storageId;
                    return storage;
                };
                this.get = function () {
                    if (_this._items) {
                        return _this._items;
                    }
                    var storageEntry = localStorage.getItem(_this._storageId);
                    if (storageEntry === "undefined" || storageEntry === null || storageEntry === "null") {
                        _this._items = [];
                    }
                    else {
                        _this._items = JSON.parse(storageEntry);
                    }
                    return _this._items;
                };
                this.getByName = function (params) {
                    var items = _this.get();
                    var storageItem = null;
                    _.each(items, function (item) {
                        if (params.name === item.name) {
                            storageItem = item;
                        }
                    });
                    return storageItem;
                };
                this.put = function (params) {
                    var items = _this.get();
                    var itemExist = false;
                    _.forEach(items, function (item) {
                        if (params.name === item.name) {
                            itemExist = true;
                            item.value = params.value;
                            item.category = params.category;
                        }
                    });
                    if (!itemExist) {
                        items.push(params);
                    }
                };
                $window.onbeforeunload = function () {
                    localStorage.setItem(_this._storageId, JSON.stringify(_this._items));
                };
            }
            return Storage;
        })();
        common.Storage = Storage;
        angular.module("app.common").service("storage", ["$window", Storage]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=storage.js.map