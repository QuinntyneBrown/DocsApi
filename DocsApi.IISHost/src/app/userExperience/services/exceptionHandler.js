/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var userExperience;
    (function (userExperience) {
        angular.module("app.userExperience").config(["$provide", function ($provide) {
            $provide.decorator("$exceptionHandler", ["$delegate", "$injector", function ($delegate, $injector) {
                return function (exception, cause) {
                    if (exception.message === "Unable to get property 'focus' of undefined or null reference")
                        return;
                    $delegate(exception, cause);
                    var timestamp = Date.now();
                    var telemetryManager = $injector.get("telemetryManager");
                    var userExperienceService = $injector.get("userExperienceService");
                    var userExperienceManager = $injector.get("userExperienceManager");
                    var printStackTrace = $injector.get("printStackTrace");
                    var $location = $injector.get("$location");
                    var errorRedirect = $injector.get("errorRedirect");
                    telemetryManager.consoleMessages.push({ message: cause });
                    userExperienceService.save({
                        consoleMessages: telemetryManager.consoleMessages,
                        stackTrace: printStackTrace({ e: exception }),
                        screenCaptures: telemetryManager.screenCaptures,
                        requestProfiles: telemetryManager.requestProfiles,
                        features: telemetryManager.features
                    }).then(function (results) {
                        userExperienceManager.guid = results.data.guid;
                        $injector.get("userExperienceModalService").showModal().then(function (results) {
                            errorRedirect.redirectPostError({ timestamp: timestamp });
                        });
                    });
                };
            }]);
        }]);
    })(userExperience = app.userExperience || (app.userExperience = {}));
})(app || (app = {}));
//# sourceMappingURL=exceptionHandler.js.map