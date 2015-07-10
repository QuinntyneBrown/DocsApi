var app;
(function (app) {
    var userExperience;
    (function (userExperience) {
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
        userExperience.FeedbackTile = FeedbackTile;
        angular.module("app.userExperience").directive("userExperienceTile", [FeedbackTile.instance]);
    })(userExperience = app.userExperience || (app.userExperience = {}));
})(app || (app = {}));
//# sourceMappingURL=feedbackTile.js.map