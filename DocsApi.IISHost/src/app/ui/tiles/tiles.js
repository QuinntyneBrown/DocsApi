var app;
(function (app) {
    var ui;
    (function (ui) {
        var Tiles = (function () {
            function Tiles() {
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.templateUrl = "/src/app/ui/tiles/tiles.html";
                this.link = function () {
                };
            }
            Tiles.instance = function () {
                return new Tiles();
            };
            return Tiles;
        })();
        ui.Tiles = Tiles;
        angular.module("app.ui").directive("tiles", [Tiles.instance]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=tiles.js.map