var app;
(function (app) {
    var i18n;
    (function (i18n) {
        describe("Translate Filter", function () {
            beforeEach(function () {
                module("app.i18n");
            });
            String.prototype.hashCode = function () {
                var hash = 0, i, chr, len;
                if (this.length == 0)
                    return hash;
                for (i = 0, len = this.length; i < len; i++) {
                    chr = this.charCodeAt(i);
                    hash = ((hash << 5) - hash) + chr;
                    hash |= 0;
                }
                return hash;
            };
            var translate;
            var mockI18nManager = {
                cultureCode: "en-US",
                translatedPhrases: {
                    cultureCode: "en-US",
                    phrases: [
                        {
                            hashCode: "something".hashCode(),
                            text: "something",
                            translation: "something else"
                        }
                    ]
                }
            };
            beforeEach(function () {
                module(function ($provide) {
                    $provide.value('i18nManager', mockI18nManager);
                });
            });
            beforeEach(inject(function ($filter) {
                translate = $filter("translate");
            }));
            it("should be defined", function () {
                expect(translate).toBeDefined();
            });
            it("should translate a phrase that has been provided via the i18n service", function () {
                var result = translate("something");
                expect(result).toEqual("something else");
            });
            it("should use the translated phrases provided", function () {
                var result = translate("something", {
                    phrases: []
                });
                expect(result).toEqual("something");
            });
        });
    })(i18n = app.i18n || (app.i18n = {}));
})(app || (app = {}));
//# sourceMappingURL=translate.spec.js.map