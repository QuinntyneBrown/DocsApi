var app;
(function (app) {
    var ui;
    (function (ui) {
        "use strict";
        var PaginatedImageListViewer = (function () {
            function PaginatedImageListViewer() {
                this.templateUrl = "/src/app/ui/paginatedImageListViewer/paginatedImageListViewer.html";
                this.replace = true;
                this.restrict = "E";
                this.scope = {};
                this.link = function () {
                };
            }
            PaginatedImageListViewer.instance = function () {
                return new PaginatedImageListViewer();
            };
            return PaginatedImageListViewer;
        })();
        ui.PaginatedImageListViewer = PaginatedImageListViewer;
        angular.module("app.ui").directive("paginatedImageListViewer", [PaginatedImageListViewer.instance]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=paginatedImageListViewer.js.map