var app;
(function (app) {
    var abstractDataTypes;
    (function (abstractDataTypes) {
        "use strict";
        var PaginatedListController = (function () {
            function PaginatedListController(paginatedList, routeData) {
                var _this = this;
                this.routeData = routeData;
                this.loadMore = function () {
                    return _this._paginatedList.loadMore();
                };
                this._paginatedList = paginatedList.instance({
                    items: routeData.items,
                    totalItems: routeData.totalItems,
                    repository: routeData.repository
                });
            }
            Object.defineProperty(PaginatedListController.prototype, "currentPageItems", {
                get: function () {
                    return this._paginatedList.currentPageItems;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedListController.prototype, "totalItems", {
                get: function () {
                    return this._paginatedList.totalItems;
                },
                enumerable: true,
                configurable: true
            });
            return PaginatedListController;
        })();
        abstractDataTypes.PaginatedListController = PaginatedListController;
        angular.module("app.abstractDataTypes").controller("paginatedListController", ["routeData", PaginatedListController]);
    })(abstractDataTypes = app.abstractDataTypes || (app.abstractDataTypes = {}));
})(app || (app = {}));
//# sourceMappingURL=paginatedListController.js.map