var app;
(function (app) {
    var userExperience;
    (function (userExperience) {
        "use strict";
        var FeedbackModalService = (function () {
            function FeedbackModalService($q, modalService) {
                var _this = this;
                this.$q = $q;
                this.modalService = modalService;
                this.showModal = function () {
                    var deferred = _this.$q.defer();
                    _this.modalService.showModal({
                        controller: "userExperienceModalController as feedbackModal",
                        templateUrl: "/src/app/feedback/views/partials/feedbackModal.html"
                    }, null).then(function (results) {
                        deferred.resolve();
                    });
                    return deferred.promise;
                };
            }
            return FeedbackModalService;
        })();
        userExperience.FeedbackModalService = FeedbackModalService;
        angular.module("app.userExperience").service("userExperienceModalService", ["$q", "modalService", FeedbackModalService]);
    })(userExperience = app.userExperience || (app.userExperience = {}));
})(app || (app = {}));
//# sourceMappingURL=userExperienceModalService.js.map