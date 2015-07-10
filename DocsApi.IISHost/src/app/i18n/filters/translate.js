/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var i18n;
    (function (i18n) {
        "use strict";
        function translate(i18nManager) {
            return function (phrase, translatedPhrases) {
                var currentTranslations = translatedPhrases || i18nManager.translatedPhrases;
                var translatedPhrase = null;
                var phraseHashCode = phrase.hashCode();
                currentTranslations.phrases.forEach(function (item) {
                    if (item.hashCode == phraseHashCode)
                        translatedPhrase = item.translation;
                });
                return translatedPhrase || phrase;
            };
        }
        i18n.translate = translate;
        angular.module("app.i18n").filter("translate", ["i18nManager", translate]);
    })(i18n = app.i18n || (app.i18n = {}));
})(app || (app = {}));
//# sourceMappingURL=translate.js.map