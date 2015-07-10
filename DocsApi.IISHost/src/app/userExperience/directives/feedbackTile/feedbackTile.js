var app;
(function (app) {
    var feedback;
    (function (feedback) {
        var FeedbackTile = (function () {
            function FeedbackTile() {
                this.restrict = "E";
                this.replace = true;
                this.templateUrl = "/src/app/feedback/directives/feedbackTile/feedbackTile.html";
                this.scope = {};
                this.link = function () {
                };
            }
            FeedbackTile.instance = function () {
                return new FeedbackTile();
            };
            return FeedbackTile;
        })();
        feedback.FeedbackTile = FeedbackTile;
        angular.module("app.userExperience").directive("userExperienceTile", [FeedbackTile.instance]);
    })(feedback = app.userExperience || (app.userExperience = {}));
})(app || (app = {}));
//# sourceMappingURL=feedbackTile.js.map