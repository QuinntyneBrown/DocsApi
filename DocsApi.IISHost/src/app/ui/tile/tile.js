var app;
(function (app) {
    var ui;
    (function (ui) {
        "use strict";
        var Tile = (function () {
            function Tile() {
                this.restrict = "E";
                this.replace = true;
                this.scope = {};
                this.templateUrl = "/src/app/ui/tile/tile.html";
                this.controller = "";
                this.controllerAs = "";
            }
            Tile.instance = function () {
                return new Tile();
            };
            return Tile;
        })();
        ui.Tile = Tile;
        angular.module("app.ui").directive("tile", [Tile.instance]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=tile.js.map