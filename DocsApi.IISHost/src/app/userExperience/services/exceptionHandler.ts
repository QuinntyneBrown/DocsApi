/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />

module app.userExperience {

    angular.module("app.userExperience").config(["$provide", ($provide) => {

        $provide.decorator("$exceptionHandler", ["$delegate", "$injector", ($delegate, $injector) => {

            return (exception, cause) => {

                if (exception.message === "Unable to get property 'focus' of undefined or null reference")
                    return;

                $delegate(exception, cause);



                var timestamp = Date.now();
                var telemetryManager: telemetry.ITelemetryManager = $injector.get("telemetryManager");
                var userExperienceService: IUserExperienceService = $injector.get("userExperienceService");
                var userExperienceManager: IUserExperienceManager = $injector.get("userExperienceManager");
                var printStackTrace: telemetry.IPrintStackTrace = $injector.get("printStackTrace");
                var $location: ng.ILocationService = $injector.get("$location");
                var errorRedirect: telemetry.IErrorRedirect = $injector.get("errorRedirect");

                telemetryManager.consoleMessages.push({ message: cause });

                userExperienceService.save({
                    consoleMessages: telemetryManager.consoleMessages,
                    stackTrace: printStackTrace({ e: exception }),
                    screenCaptures: telemetryManager.screenCaptures,
                    requestProfiles: telemetryManager.requestProfiles,
                    features: telemetryManager.features
                }).then((results: any) => {
                    userExperienceManager.guid = results.data.guid;
                    $injector.get("userExperienceModalService").showModal().then((results) => {
                        errorRedirect.redirectPostError({ timestamp: timestamp });
                    });
                });
            };
        }]);
    }]);
} 