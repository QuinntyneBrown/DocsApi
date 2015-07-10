var app;
(function (app) {
    var abstractDataTypes;
    (function (abstractDataTypes) {
        "use strict";
        describe("PaginatedList", function () {
            var paginatedList;
            var $window;
            var scope;
            beforeEach(function () {
                module("app.abstractDataTypes");
            });
            beforeEach(inject(function (_paginatedList_, _$rootScope_, _$window_) {
                paginatedList = _paginatedList_.instance();
                $window = _$window_;
                scope = _$rootScope_.$new();
            }));
            it("should be defined", function () {
                expect(paginatedList).toBeDefined();
            });
            it("should have default of 0 total items", function () {
                expect(paginatedList.totalItems).toEqual(0);
            });
            it("expect to set total items through the instance constructor", function () {
                var instance = paginatedList.instance({ totalItems: 10 });
                expect(instance.totalItems).toEqual(10);
            });
            it("should have default page size of 0", function () {
                expect(paginatedList.pageSize).toEqual(0);
            });
            it("expect to set page size through the instance constructor along with total items", function () {
                var instance = paginatedList.instance({ pageSize: 10 });
                expect(instance.pageSize).toEqual(10);
            });
            it("expect currentPageItems to be an empty array", function () {
                expect(paginatedList.currentPageItems).toEqual([]);
            });
            it("expect to currentPageItems to be set through constructor", function () {
                var instance = paginatedList.instance({ currentPageItems: [{ index: 0, entity: "item" }] });
                expect(instance.currentPageItems).toEqual([{ index: 0, entity: "item" }]);
            });
            it("expect currentPageItems to be an empty array", function () {
                expect(paginatedList.currentPageItems).toEqual([]);
            });
            it("should have an initial currentPageNumber of 0", function () {
                expect(paginatedList.currentPageNumber).toEqual(null);
            });
            it("should have 2 pages, if you pass offSet of 0 and pageSize of 10 and total items of 20", function () {
                var instance = paginatedList.instance({ offSet: 0, pageSize: 10, totalItems: 20 });
                expect(instance.pages.length).toEqual(2);
            });
            it("should have 3 pages, if you pass offSet of 0 and pageSize of 10 and total items of 21", function () {
                var instance = paginatedList.instance({ offSet: 0, pageSize: 10, totalItems: 21 });
                expect(instance.pages.length).toEqual(3);
            });
            it("should have a currentPageNumber of 1, if you pass offSet of 0 and pageSize of 10 and total items of 10", function () {
                var instance = paginatedList.instance({ offSet: 0, pageSize: 10, totalItems: 21 });
                expect(instance.currentPageNumber).toEqual(1);
            });
            it("should have a currentPageNumber of 3, if you pass offSet of 7 and pageSize of 3 and total items of 15", function () {
                var instance = paginatedList.instance({ offSet: 7, pageSize: 3, totalItems: 15 });
                expect(instance.currentPageNumber).toEqual(3);
            });
            it("should have a hasNext value of true if current page is 3 when you initiallize with a offSet of 7 and pageSize of 3 and total items of 15", function () {
                var instance = paginatedList.instance({ offSet: 7, pageSize: 3, totalItems: 15 });
                expect(instance.hasNext()).toEqual(true);
            });
            it("should have a havePrevious value of true if current page is 3 when you initiallize with a offSet of 7 and pageSize of 3 and total items of 15", function () {
                var instance = paginatedList.instance({ offSet: 7, pageSize: 3, totalItems: 15 });
                expect(instance.hasPrevious()).toEqual(true);
            });
            it("should have a pageYOffSet of 0", function () {
                var instance = paginatedList.instance({ offSet: 7, pageSize: 3, totalItems: 15 });
                expect(instance.pageYOffSet).toEqual(0);
            });
            it("should have a pageYOffSet of 0 same as window", function () {
                var instance = paginatedList.instance({ offSet: 7, pageSize: 3, totalItems: 15 });
                expect(instance.pageYOffSet).toEqual(0);
                instance.onScroll({ pageYOffSet: 100 });
                expect(instance.pageYOffSet).toEqual(100);
            });
            it("should have a default available height of 0", function () {
                var instance = paginatedList.instance({ offSet: 7, pageSize: 3, totalItems: 15 });
                expect(instance.availHeight).toEqual(0);
            });
            it("should have a default available height of 110", function () {
                var instance = paginatedList.instance({ availHeight: 110 });
                expect(instance.availHeight).toEqual(110);
            });
            it("should have a new available height after resize", function () {
                var instance = paginatedList.instance({ availHeight: 110 });
                instance.onResize({ availHeight: 0 });
                expect(instance.availHeight).toEqual(0);
            });
            it("should have an itemHeight default 0", function () {
                var instance = paginatedList.instance({});
                expect(instance.itemHeight).toEqual(0);
            });
            it("should have an item height of 100", function () {
                var instance = paginatedList.instance({ itemHeight: 100 });
                expect(instance.itemHeight).toEqual(100);
            });
            it("should have a first viewable item index of 0", function () {
                var instance = paginatedList.instance({ itemHeight: 100 });
                expect(instance.indexOfFirstViewableItem).toEqual(0);
            });
            it("should have a first viewable item index of 1", function () {
                var instance = paginatedList.instance({ itemHeight: 10 });
                instance.onScroll({ pageYOffSet: 10 });
                expect(instance.indexOfFirstViewableItem).toEqual(1);
            });
            it("should have a first viewable item index of 1", function () {
                var instance = paginatedList.instance({ itemHeight: 10, top: 10 });
                instance.onScroll({ pageYOffSet: 10 });
                expect(instance.indexOfFirstViewableItem).toEqual(0);
            });
        });
    })(abstractDataTypes = app.abstractDataTypes || (app.abstractDataTypes = {}));
})(app || (app = {}));
//# sourceMappingURL=paginatedList.spec.js.map