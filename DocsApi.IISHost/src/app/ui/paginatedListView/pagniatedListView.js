var app;
(function (app) {
    var ui;
    (function (ui) {
        var PaginatedListView = (function () {
            function PaginatedListView() {
                this.templateUrl = "/src/app/ui/paginatedListView/paginatedListView/recentPoList.html";
                this.replace = true;
                this.restrict = "E";
                this.scope = {
                    ngModel: "="
                };
                this.link = function () {
                };
            }
            PaginatedListView.instance = function () {
                return new PaginatedListView();
            };
            return PaginatedListView;
        })();
        ui.PaginatedListView = PaginatedListView;
        angular.module("app.ui").directive("paginatedListView", [PaginatedListView.instance]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=pagniatedListView.js.map