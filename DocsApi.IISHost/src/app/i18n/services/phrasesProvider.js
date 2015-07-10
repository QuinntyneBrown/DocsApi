var app;
(function (app) {
    var i18n;
    (function (i18n) {
        "use strict";
        var PhrasesProvider = (function () {
            function PhrasesProvider() {
                var _this = this;
                this.configure = function (value) {
                    if (angular.isArray(value)) {
                        value.forEach(function (item) {
                            _this.phrases.push({
                                text: item,
                                hashCode: item.hashCode()
                            });
                        });
                    }
                    else {
                        _this.phrases.push({
                            text: value,
                            hashCode: value.hashCode()
                        });
                    }
                };
                this.phrases = [];
                this.$get = [function () {
                    return _this.phrases;
                }];
            }
            return PhrasesProvider;
        })();
        i18n.PhrasesProvider = PhrasesProvider;
        angular.module("app.i18n").provider("phrases", [PhrasesProvider]);
    })(i18n = app.i18n || (app.i18n = {}));
})(app || (app = {}));
//# sourceMappingURL=phrasesProvider.js.map