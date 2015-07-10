var app;
(function (app) {
    var configuration;
    (function (configuration) {
        "use strict";
        var ConfigurationManager = (function () {
            function ConfigurationManager(storageProperty) {
                this._configuration = storageProperty.instance("configuration", {});
            }
            Object.defineProperty(ConfigurationManager.prototype, "configuration", {
                get: function () {
                    return this._configuration.get();
                },
                set: function (value) {
                    this._configuration.set(value);
                },
                enumerable: true,
                configurable: true
            });
            return ConfigurationManager;
        })();
        configuration.ConfigurationManager = ConfigurationManager;
        angular.module("app.configuration").service("configurationManager", ["storageProperty", ConfigurationManager]);
    })(configuration = app.configuration || (app.configuration = {}));
})(app || (app = {}));
//# sourceMappingURL=configurationManager.js.map