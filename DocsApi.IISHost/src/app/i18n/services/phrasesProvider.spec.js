var app;
(function (app) {
    var i18n;
    (function (i18n) {
        "use strict";
        describe("PhrasesProvider", function () {
            var phrasesProvider = null;
            beforeEach(function () {
                phrasesProvider = new app.i18n.PhrasesProvider();
            });
            it("PhrasesProvider", function () {
                expect(phrasesProvider).toBeDefined();
            });
            it("should create a hash number from a string", function () {
                var value = "string";
                expect(angular.isNumber(value.hashCode())).toEqual(true);
            });
            it("should create the same hash number from a string", function () {
                var value1 = "string";
                var value2 = "string";
                expect(value1.hashCode()).toEqual(value2.hashCode());
            });
            it("should create different hash numbers for different strings", function () {
                var value1 = "string1";
                var value2 = "string2";
                expect(value1.hashCode()).not.toEqual(value2.hashCode());
            });
            it("should create a hash number from a complicated phrase", function () {
                var value = "John when to the bank! 8 times? ~";
                expect(angular.isNumber(value.hashCode())).toEqual(true);
            });
        });
    })(i18n = app.i18n || (app.i18n = {}));
})(app || (app = {}));
//# sourceMappingURL=phrasesProvider.spec.js.map