var app;
(function (app) {
    var feedback;
    (function (feedback) {
        "use strict";
        var FeedbackModalController = (function () {
            function FeedbackModalController($modalInstance, $rootScope, feedbackManager, feedbackService) {
                var _this = this;
                this.$modalInstance = $modalInstance;
                this.$rootScope = $rootScope;
                this.feedbackManager = feedbackManager;
                this.feedbackService = feedbackService;
                this.save = function () {
                    _this.feedbackService.update({
                        guid: _this.guid,
                        comments: _this.comments,
                        rating: _this.rating
                    }).then(function () {
                        _this.$modalInstance.close('ok');
                    });
                };
                $rootScope.$on("$locationChangeStart", function () {
                    _this.$modalInstance.close('cancel');
                });
            }
            Object.defineProperty(FeedbackModalController.prototype, "comments", {
                get: function () {
                    return this._comments;
                },
                set: function (value) {
                    this._comments = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FeedbackModalController.prototype, "rating", {
                get: function () {
                    return this._rating;
                },
                set: function (value) {
                    this.rating = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FeedbackModalController.prototype, "guid", {
                get: function () {
                    return this.feedbackManager.guid;
                },
                enumerable: true,
                configurable: true
            });
            return FeedbackModalController;
        })();
        feedback.FeedbackModalController = FeedbackModalController;
        angular.module("app.userExperience").controller("userExperienceModalController", ["$modalInstance", "$rootScope", "userExperienceManager", "userExperienceService", FeedbackModalController]);
    })(feedback = app.userExperience || (app.userExperience = {}));
})(app || (app = {}));
//# sourceMappingURL=feedbackModalController.js.map