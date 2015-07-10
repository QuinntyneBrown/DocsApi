var app;
(function (app) {
    var userExperience;
    (function (userExperience) {
        "use strict";
        var FeedbackService = (function () {
            function FeedbackService(apiEndpointConfig, dataService) {
                var _this = this;
                this.apiEndpointConfig = apiEndpointConfig;
                this.dataService = dataService;
                this.save = function (options) {
                    var data = {
                        screenCaptures: options.screenCaptures,
                        consoleMessages: options.consoleMessages,
                        urls: options.urls,
                        features: options.features,
                        comments: options.comments,
                        rating: options.rating
                    };
                    return _this.dataService.fromService({ method: "POST", data: data, url: _this.baseUri + "/feedback/" });
                };
                this.update = function (options) {
                    var data = {
                        guid: options.guid,
                        comments: options.comments,
                        rating: options.rating
                    };
                    return _this.dataService.fromService({ method: "PUT", data: data, url: _this.baseUri + "/feedback/" });
                };
            }
            Object.defineProperty(FeedbackService.prototype, "baseUri", {
                get: function () {
                    return this.apiEndpointConfig.getBaseUrl();
                },
                enumerable: true,
                configurable: true
            });
            return FeedbackService;
        })();
        userExperience.FeedbackService = FeedbackService;
        angular.module("app.userExperience").service("userExperienceService", [
            "apiEndpoint",
            "dataService",
            FeedbackService
        ]);
    })(userExperience = app.userExperience || (app.userExperience = {}));
})(app || (app = {}));
//# sourceMappingURL=userExperienceService.js.map