var app;
(function (app) {
    var ui;
    (function (ui) {
        "use strict";
        var TilesConfigProvider = (function () {
            function TilesConfigProvider() {
                var _this = this;
                this._configs = [];
                this.$get = [function () {
                    return _this.configs;
                }];
            }
            Object.defineProperty(TilesConfigProvider.prototype, "configs", {
                get: function () {
                    return this._configs;
                },
                enumerable: true,
                configurable: true
            });
            return TilesConfigProvider;
        })();
        ui.TilesConfigProvider = TilesConfigProvider;
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=tileConfigsProvider.js.map