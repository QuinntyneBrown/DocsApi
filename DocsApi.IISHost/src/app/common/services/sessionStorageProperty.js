var app;
(function (app) {
    var common;
    (function (common) {
        "use strict";
        var SessionStorageProperty = (function () {
            function SessionStorageProperty(commonStorage) {
                var _this = this;
                this.commonStorage = commonStorage;
                this.data = null;
                this.get = function () {
                    if (_this.data) {
                        return _this.data;
                    }
                    try {
                        _this.data = _this.commonStorage.getByName({ name: _this.name }).value;
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
                    return _this.set(items);
                };
                this.instance = function (name, initialValue) {
                    var sessionStorageProperty = new SessionStorageProperty(_this.commonStorage);
                    sessionStorageProperty.name = name;
                    if (initialValue && !sessionStorageProperty.get()) {
                        sessionStorageProperty.set(initialValue);
                    }
                    document.getElementsByTagName("body")[0].addEventListener("sessionTimeout", function () {
                        sessionStorageProperty.data = null;
                        sessionStorageProperty.set(null);
                    });
                    return sessionStorageProperty;
                };
            }
            return SessionStorageProperty;
        })();
        common.SessionStorageProperty = SessionStorageProperty;
        angular.module("app.common").service("sessionStorageProperty", ["commonStorage", SessionStorageProperty]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=sessionStorageProperty.js.map