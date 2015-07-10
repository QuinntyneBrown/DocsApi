var app;
(function (app) {
    var common;
    (function (common) {
        var LocalStorageService = (function () {
            function LocalStorageService(commonStorage) {
                var _this = this;
                this.commonStorage = commonStorage;
                this.set = function (key, value) {
                    _this.commonStorage.put({ name: key, value: value });
                    return _this.commonStorage.getByName({ name: key });
                };
                this.get = function (key) {
                    var property = _this.commonStorage.getByName({ name: key });
                    if (property)
                        return _this.commonStorage.getByName({ name: key }).value;
                    return null;
                };
                this.remove = function (key) {
                    _this.commonStorage.put({ name: key, value: null });
                    return true;
                };
                this.clearAll = function () {
                };
                this.bind = function ($scope, key, opts) {
                    return {};
                };
                this.unbind = function ($scope, key, storeName) {
                    return {};
                };
            }
            return LocalStorageService;
        })();
        common.LocalStorageService = LocalStorageService;
        angular.module("app.common").service("localStorageService", ["commonStorage", LocalStorageService]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=localStorageService.js.map