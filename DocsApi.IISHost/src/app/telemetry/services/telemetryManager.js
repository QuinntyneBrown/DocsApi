var app;
(function (app) {
    var telemetry;
    (function (telemetry) {
        "use strict";
        var TelemetryManager = (function () {
            function TelemetryManager(configurationManager, features, storageProperty) {
                var _this = this;
                this.configurationManager = configurationManager;
                this.updateRequestProfile = function (response) {
                    var requestProfiles = _this.requestProfiles;
                    _this.requestProfiles.forEach(function (profile) {
                        if (profile.startTime === response.config.timestamp) {
                            profile.elapsed = Date.now() - profile.startTime;
                        }
                    });
                    _this.requestProfiles = requestProfiles;
                };
                this._features = features;
                this._requestProfiles = storageProperty.instance("requestProfiles", []);
                this._urls = storageProperty.instance("urls", []);
                this._consoleMessages = storageProperty.instance("consoleMessages", []);
                this._stackTrace = storageProperty.instance("stackTrace", []);
                this._screenCaptures = storageProperty.instance("screenCaptures", []);
            }
            Object.defineProperty(TelemetryManager.prototype, "features", {
                get: function () {
                    return this._features;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TelemetryManager.prototype, "requestProfiles", {
                get: function () {
                    return this._requestProfiles.get();
                },
                set: function (value) {
                    this._requestProfiles.set(value, this.configurationManager.configuration.requestProfilesLimit);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TelemetryManager.prototype, "urls", {
                get: function () {
                    return this._urls.get();
                },
                set: function (value) {
                    this._urls.set(value, this.configurationManager.configuration.historyLimit);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TelemetryManager.prototype, "consoleMessages", {
                get: function () {
                    return this._consoleMessages.get();
                },
                set: function (value) {
                    this._consoleMessages.set(value, this.configurationManager.configuration.consoleMessagesLimit);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TelemetryManager.prototype, "screenCaptures", {
                get: function () {
                    return this._screenCaptures.get();
                },
                set: function (value) {
                    this._screenCaptures.set(value, this.configurationManager.configuration.screenCapturesLimit);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TelemetryManager.prototype, "stackTrace", {
                get: function () {
                    return this._stackTrace.get();
                },
                set: function (value) {
                    this._stackTrace.set(value);
                },
                enumerable: true,
                configurable: true
            });
            return TelemetryManager;
        })();
        telemetry.TelemetryManager = TelemetryManager;
        angular.module("app.telemetry").service("telemetryManager", ["configurationManager", "features", "storageProperty", TelemetryManager]);
    })(telemetry = app.telemetry || (app.telemetry = {}));
})(app || (app = {}));
//# sourceMappingURL=telemetryManager.js.map