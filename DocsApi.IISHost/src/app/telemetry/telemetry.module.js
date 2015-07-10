var app;
(function (app) {
    var telemetry;
    (function (telemetry) {
        "use strict";
        angular.module("app.telemetry", [
            "ui.router",
            "app.common",
            "app.configuration"
        ]).config(["$provide", function ($provide) {
            $provide.decorator("$log", ["$delegate", "$injector", function ($delegate, $injector) {
                var log = function (message) {
                    var telemetryManager = $injector.get("telemetryManager");
                    var consoleMessages = telemetryManager.consoleMessages;
                    consoleMessages.push({ message: message });
                    telemetryManager.consoleMessages = consoleMessages;
                    return $delegate.log(message);
                };
                var warn = function (message) {
                    var telemetryManager = $injector.get("telemetryManager");
                    var consoleMessages = telemetryManager.consoleMessages;
                    consoleMessages.push({ message: message });
                    telemetryManager.consoleMessages = consoleMessages;
                    return $delegate.info(message);
                };
                var info = function (message) {
                    var telemetryManager = $injector.get("telemetryManager");
                    var consoleMessages = telemetryManager.consoleMessages;
                    consoleMessages.push({ message: message });
                    telemetryManager.consoleMessages = consoleMessages;
                    return $delegate.info(message);
                };
                var error = function (message) {
                    var telemetryManager = $injector.get("telemetryManager");
                    var consoleMessages = telemetryManager.consoleMessages;
                    consoleMessages.push({ message: message });
                    telemetryManager.consoleMessages = consoleMessages;
                    return $delegate.info(message);
                };
                return {
                    log: log,
                    warn: warn,
                    info: info,
                    error: error
                };
            }]);
        }]).run(["$location", "$rootScope", "telemetryManager", "getWatchersCount", function ($location, $rootScope, telemetryManager, getWatchersCount) {
            var _consoleLog = console.log;
            console.log = function (message) {
                var consoleMessages = telemetryManager.consoleMessages;
                consoleMessages.push({ message: message });
                telemetryManager.consoleMessages = consoleMessages;
                _consoleLog.apply(console, arguments);
            };
            $rootScope.$on("$locationChangeStart", function (event, newUrl) {
                var urls = telemetryManager.urls;
                urls.push({
                    dateTime: Date.now(),
                    url: newUrl,
                    path: null,
                    changeSuccess: null,
                    watchers: null
                });
                telemetryManager.urls = urls;
            });
            $rootScope.$on("$viewContentLoaded", function () {
                var urls = telemetryManager.urls;
                if (urls.length > 1) {
                    urls[urls.length - 1].changeSuccess = true;
                    urls[urls.length - 1].path = $location.path();
                }
                telemetryManager.urls = urls;
                html2canvas(document.body, {
                    onrendered: function (canvas) {
                        var image = new Image();
                        image.src = canvas.toDataURL("image/png");
                        var screenCaptures = telemetryManager.screenCaptures;
                        screenCaptures.push({
                            dateTime: new Date().toISOString(),
                            base64StringEncodedImage: image.src.split(";")[1].split(",")[1]
                        });
                        telemetryManager.screenCaptures = screenCaptures;
                    }
                });
            });
        }]);
    })(telemetry = app.telemetry || (app.telemetry = {}));
})(app || (app = {}));
//# sourceMappingURL=telemetry.module.js.map