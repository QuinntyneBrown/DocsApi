var app;
(function (app) {
    var i18n;
    (function (i18n) {
        describe("i18nManager", function () {
            var amMoment;
            var i18nManager;
            var $window;
            var mockLocalStorageService;
            var mockWindow;
            var _localStorage = {};
            beforeEach(function () {
                module("app.i18n");
                module(function ($provide) {
                    $provide.value('localStorageService', mockLocalStorageService);
                    $provide.value('$window', mockWindow);
                });
                _localStorage = {};
                mockWindow = {
                    navigator: {
                        language: "",
                        userLanguage: ""
                    }
                };
                mockLocalStorageService = {
                    get: function (name) {
                        return _localStorage[name];
                    },
                    set: function (name, value) {
                        _localStorage[name] = value;
                    }
                };
            });
            beforeEach(inject(function (_i18nManager_, _$window_) {
                i18nManager = _i18nManager_;
                $window = _$window_;
            }));
            it("should be defined", function () {
                expect(i18nManager).toBeDefined();
            });
            it("should be en-US if window language is en-CA", function () {
                mockWindow.navigator.language = "en-CA";
                mockWindow.navigator.userLanguage = "en-CA";
                expect($window.navigator.language).toEqual("en-CA");
                expect(mockLocalStorageService.get("cultureCode")).toBeUndefined();
                expect(i18nManager.cultureCode).toEqual("en-US");
            });
            it("should have cultureCode equal to localStorage value if available", function () {
                mockLocalStorageService.get = function (name, value) {
                    return "fr-CA";
                };
                expect(i18nManager.cultureCode).toEqual("fr-CA");
            });
            it("should have be able to change cultureCodes", function () {
                expect(i18nManager.cultureCode).toEqual("en-US");
                i18nManager.cultureCode = "fr-CA";
                expect(i18nManager.cultureCode).toEqual("fr-CA");
                expect(mockLocalStorageService.get("cultureCode")).toEqual("fr-CA");
            });
        });
    })(i18n = app.i18n || (app.i18n = {}));
})(app || (app = {}));
//# sourceMappingURL=i18nManager.spec.js.map