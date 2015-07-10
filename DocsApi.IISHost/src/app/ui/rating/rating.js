var app;
(function (app) {
    var ui;
    (function (ui) {
        "use strict";
        var Rating = (function () {
            function Rating() {
                this.templateUrl = "/src/app/ui/rating/rating.html";
                this.replace = true;
                this.restrict = "E";
                this.scope = {
                    maxRating: "=",
                    ngModel: "="
                };
                this.link = function () {
                };
            }
            Rating.instance = function () {
                return new Rating();
            };
            return Rating;
        })();
        ui.Rating = Rating;
        angular.module("app.ui").directive("rating", [Rating.instance]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=rating.js.map