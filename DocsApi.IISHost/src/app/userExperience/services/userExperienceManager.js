var app;
(function (app) {
    var userExperience;
    (function (userExperience) {
        "use strict";
        var FeedbackManager = (function () {
            function FeedbackManager(sessionStorageProperty) {
                this._guid = sessionStorageProperty.instance("guid");
            }
            Object.defineProperty(FeedbackManager.prototype, "guid", {
                get: function () {
                    return this._guid.get();
                },
                set: function (value) {
                    this._guid.set(value);
                },
                enumerable: true,
                configurable: true
            });
            return FeedbackManager;
        })();
        userExperience.FeedbackManager = FeedbackManager;
        angular.module("app.userExperience").service("userExperienceManager", [
            "sessionStorageProperty",
            FeedbackManager
        ]);
    })(userExperience = app.userExperience || (app.userExperience = {}));
})(app || (app = {}));
//# sourceMappingURL=userExperienceManager.js.map