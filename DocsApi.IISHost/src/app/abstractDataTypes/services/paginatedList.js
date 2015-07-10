var app;
(function (app) {
    var abstractDataTypes;
    (function (abstractDataTypes) {
        "use strict";
        /**
         * Implement Lazy
         * get data from the server incrementally
         *
         * UI Optimized
         * only bind the visible elments on the page
         *
         */
        var PaginatedList = (function () {
            function PaginatedList($q, configurationManager, uiHelper) {
                var _this = this;
                this.$q = $q;
                this.configurationManager = configurationManager;
                this.uiHelper = uiHelper;
                this.instance = function (options) {
                    var instance = new PaginatedList(_this.$q, _this.configurationManager, _this.uiHelper);
                    options = options || {};
                    instance.totalItems = options.totalItems || 0;
                    instance.pageSize = options.pageSize || 0;
                    instance.currentPageItems = options.currentPageItems || [];
                    instance.offSet = options.offSet || 0;
                    instance.pageYOffSet = 0;
                    instance.availHeight = options.availHeight || 0;
                    instance.itemHeight = options.itemHeight || 0;
                    instance.rows = options.rows || 0;
                    instance.top = options.top || 0;
                    if (options.totalItems && options.totalItems > 0 && options.pageSize) {
                        var totalPages = options.totalItems / options.pageSize;
                        for (var i = 1; i <= totalPages; i++) {
                            instance.pages.push({
                                startIndex: (i - 1) * options.pageSize,
                                endIndex: (i * options.pageSize) - 1,
                                pageNumber: i
                            });
                        }
                        if (options.totalItems % options.pageSize) {
                            instance.pages.push({
                                startIndex: (i - 1) * options.pageSize,
                                endIndex: (i * options.pageSize) - 1,
                                pageNumber: i
                            });
                        }
                    }
                    return instance;
                };
                this.fetchPageData = function (pageNumber) {
                    var deferred = _this.$q.defer();
                    deferred.resolve();
                    return deferred.promise;
                };
                this._pages = [];
                this.load = function (offSet, entities) {
                    entities.forEach(function (entity) {
                    });
                };
                this.loadMore = function () {
                };
                this.onScroll = function (options) {
                    _this.pageYOffSet = options.pageYOffSet;
                };
                this.onResize = function (options) {
                    _this.availHeight = options.availHeight;
                    _this.pageYOffSet = options.pageYOffSet;
                };
                this._totalItems = 0;
                this._pageSize = 0;
                this._dataStore = [];
                this._currentPageItems = [];
                this._currentPageNumber = 0;
                this.hasNext = function () {
                    return _this.currentPageNumber !== _this.pages.length;
                };
                this.hasPrevious = function () {
                    return _this.currentPageNumber !== 1;
                };
                this.moveTo = function (pageNumber) {
                    var deferred = _this.$q.defer();
                    _this.fetchPageData(pageNumber).then(function (results) {
                        _this.offSet = results.data.offSet;
                        _this.currentPageItems = results.data.items;
                        deferred.resolve();
                    });
                    return deferred.promise;
                };
                this.next = function () {
                    return _this.moveTo(_this.nextPageNumber);
                };
                this.prev = function () {
                    return _this.moveTo(_this.previousPageNumber);
                };
            }
            Object.defineProperty(PaginatedList.prototype, "rows", {
                get: function () {
                    return this._rows;
                },
                set: function (value) {
                    this._rows = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "itemHeight", {
                get: function () {
                    return this._itemHeight;
                },
                set: function (value) {
                    this._itemHeight = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "pageYOffSet", {
                get: function () {
                    return this._pageYOffSet;
                },
                set: function (value) {
                    this._pageYOffSet = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "availHeight", {
                get: function () {
                    return this._availHeight;
                },
                set: function (value) {
                    this._availHeight = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "pages", {
                get: function () {
                    return this._pages;
                },
                set: function (value) {
                    this._pages = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "totalItems", {
                get: function () {
                    return this._totalItems;
                },
                set: function (value) {
                    this._totalItems = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "pageSize", {
                get: function () {
                    return this._pageSize;
                },
                set: function (value) {
                    this._pageSize = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "dataStore", {
                get: function () {
                    return this._dataStore;
                },
                set: function (value) {
                    this._dataStore = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "currentPageItems", {
                get: function () {
                    return this._currentPageItems;
                },
                set: function (value) {
                    this._currentPageItems = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "currentPageNumber", {
                get: function () {
                    var _this = this;
                    var currentPageNumber = null;
                    this._pages.forEach(function (page) {
                        if (_this.offSet >= page.startIndex && _this.offSet <= page.endIndex) {
                            currentPageNumber = page.pageNumber;
                        }
                    });
                    return currentPageNumber;
                },
                set: function (value) {
                    this._currentPageNumber = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "offSet", {
                get: function () {
                    return this._offSet;
                },
                set: function (value) {
                    this._offSet = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "nextPageNumber", {
                get: function () {
                    if (this.hasNext()) {
                        return this.currentPageNumber + 1;
                    }
                    else {
                        return 1;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "previousPageNumber", {
                get: function () {
                    if (this.hasPrevious()) {
                        return this.currentPageNumber - 1;
                    }
                    else {
                        return this.pages.length;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "numberOfPages", {
                get: function () {
                    return this.pages.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "numberOfViewableItems", {
                get: function () {
                    if (this.itemHeight) {
                        return Math.floor(this.availHeight / this.itemHeight);
                    }
                    return this.totalItems;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "top", {
                get: function () {
                    return this._top;
                },
                set: function (value) {
                    this._top = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "indexOfFirstViewableItem", {
                get: function () {
                    var index = 0;
                    if (this.pageYOffSet === 0 || this.itemHeight === 0) {
                        return index;
                    }
                    if (this.top > this.pageYOffSet) {
                        return index;
                    }
                    index = (this.pageYOffSet - this.top) / this.itemHeight;
                    return index;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PaginatedList.prototype, "indexOfLastViewableItem", {
                get: function () {
                    return this.indexOfFirstViewableItem + this.numberOfViewableItems;
                },
                enumerable: true,
                configurable: true
            });
            return PaginatedList;
        })();
        abstractDataTypes.PaginatedList = PaginatedList;
        angular.module("app.abstractDataTypes").service("paginatedList", ["$q", "configurationManager", "uiHelper", PaginatedList]);
    })(abstractDataTypes = app.abstractDataTypes || (app.abstractDataTypes = {}));
})(app || (app = {}));
//# sourceMappingURL=paginatedList.js.map