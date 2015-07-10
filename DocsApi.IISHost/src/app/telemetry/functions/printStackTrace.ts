module app.telemetry {

    "use strict";

    angular.module("app.telemetry").value("printStackTrace", (error:Error) => {
        return printStackTrace({ e: error });
    });
} 