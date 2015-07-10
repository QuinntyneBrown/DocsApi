var app;
(function (app) {
    var i18n;
    (function (i18n) {
        var I18nManager = (function () {
            function I18nManager($rootScope, $window, localStorageService, phrases) {
                this.$rootScope = $rootScope;
                this.$window = $window;
                this.localStorageService = localStorageService;
                this.phrases = phrases;
                this._translatedPhrases = {
                    cultureCode: null,
                    phrases: []
                };
            }
            Object.defineProperty(I18nManager.prototype, "cultureCode", {
                get: function () {
                    if (this._cultureCode)
                        return this._cultureCode;
                    if (this.localStorageService.get("cultureCode")) {
                        this._cultureCode = this.localStorageService.get("cultureCode");
                        return this._cultureCode;
                    }
                    if (this.acceptedCultureCodes.indexOf(this.$window.navigator.userLanguage || this.$window.navigator.language) > 0) {
                        this._cultureCode = this.$window.navigator.userLanguage || this.$window.navigator.language;
                        this.localStorageService.set("cultureCode", this._cultureCode);
                        return this._cultureCode;
                    }
                    return "en-US";
                },
                set: function (value) {
                    this._cultureCode = value;
                    this.localStorageService.set("cultureCode", value);
                    if (this.translatedPhrases && this.translatedPhrases.cultureCode != this._cultureCode) {
                        this.$rootScope.$broadcast("cultureCodeChanged");
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(I18nManager.prototype, "translatedPhrases", {
                get: function () {
                    if (this._translatedPhrases)
                        return this._translatedPhrases;
                    this._translatedPhrases = this.localStorageService.get("translatedPhrases" + this.cultureCode);
                    return this._translatedPhrases;
                },
                set: function (value) {
                    this._translatedPhrases = value;
                    this.localStorageService.set("translatedPhrases" + this.cultureCode, value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(I18nManager.prototype, "acceptedCultureCodes", {
                get: function () {
                    return ["en-US", "fr-CA"];
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(I18nManager.prototype, "defaultCultureCode", {
                get: function () {
                    return "en-US";
                },
                enumerable: true,
                configurable: true
            });
            return I18nManager;
        })();
        i18n.I18nManager = I18nManager;
        angular.module("app.i18n").service("i18nManager", ["$rootScope", "$window", "localStorageService", "phrases", I18nManager]);
    })(i18n = app.i18n || (app.i18n = {}));
})(app || (app = {}));
//# sourceMappingURL=i18nManager.js.map