var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var StorageProperty = (function () {
            function StorageProperty(commonStorage) {
                var _this = this;
                this.commonStorage = commonStorage;
                this.data = null;
                this.get = function () {
                    if (_this.data && _this.data.length > 0) {
                        return _this.data;
                    }
                    try {
                        var storageData = _this.commonStorage.getByName({ name: _this.name }).value;
                        if (storageData && storageData.length > 0) {
                            _this.data = storageData;
                        }
                    }
                    catch (error) {
                    }
                    return _this.data;
                };
                this.set = function (value, limit) {
                    if (limit) {
                        var diff = value.length - limit;
                        if (diff > 0) {
                            for (var i = 0; i < diff; i++) {
                                value.splice(i, 1);
                            }
                        }
                    }
                    _this.data = value;
                    _this.commonStorage.put({ name: _this.name, value: value });
                };
                this.push = function (value) {
                    var items = _this.get();
                    if (items) {
                        items.push(value);
                    }
                    else {
                        items = [value];
                    }
                    _this.set(items);
                };
                this.instance = function (name, initialValue) {
                    var storageProperty = new StorageProperty(_this.commonStorage);
                    storageProperty.name = name;
                    if (initialValue && !storageProperty.get()) {
                        storageProperty.set(initialValue);
                    }
                    return storageProperty;
                };
            }
            return StorageProperty;
        })();
        common.StorageProperty = StorageProperty;
        angular.module("app.common").service("storageProperty", ["commonStorage", StorageProperty]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=storageProperty.js.map