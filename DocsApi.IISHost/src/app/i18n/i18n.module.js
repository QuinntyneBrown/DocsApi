var app;
(function (app) {
    var i18n;
    (function (i18n) {
        "use strict";
        angular.module("app.i18n", [
            "angularMoment",
            "ui.router",
            "app.common",
            "app.configuration"
        ]).config([function () {
            if (typeof String.prototype.hashCode === "undefined") {
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
            }
        }]).config(["stateResolverProvider", function (stateResolverProvider) {
            stateResolverProvider.configure({
                priority: 2,
                key: "i18nRouteData",
                promise: ["$q", "amMoment", "i18nManager", "i18nService", "numeral", "phrases", function ($q, amMoment, i18nManager, i18nService, numeral, phrases) {
                    var deferred = $q.defer();
                    amMoment.changeLocale(i18nManager.cultureCode);
                    numeral.language = i18nManager.cultureCode;
                    i18nService.get(i18nManager.cultureCode, phrases).then(function (results) {
                        i18nManager.translatedPhrases = results.data;
                        deferred.resolve(results.data);
                    }).catch(function (error) {
                        deferred.resolve();
                    });
                    return deferred.promise;
                }]
            });
        }]);
    })(i18n = app.i18n || (app.i18n = {}));
})(app || (app = {}));
//# sourceMappingURL=i18n.module.js.map