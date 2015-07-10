var app;
(function (app) {
    var abstractDataTypes;
    (function (abstractDataTypes) {
        "use strict";
        describe("List", function () {
            var list;
            beforeEach(function () {
                module("app.abstractDataTypes");
            });
            beforeEach(inject(function (_list_) {
                list = _list_;
            }));
            it("should be defined", function () {
                expect(list).toBeDefined();
            });
            it("should have list size of 0", function () {
                expect(list.listSize).toEqual(0);
            });
            it("should be able to append to datastore and increment listSize", function () {
                list.append("Quinn");
                expect(list.listSize).toEqual(1);
            });
        });
    })(abstractDataTypes = app.abstractDataTypes || (app.abstractDataTypes = {}));
})(app || (app = {}));
//# sourceMappingURL=list.spec.js.map