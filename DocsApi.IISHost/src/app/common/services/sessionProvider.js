var app;
(function (app) {
    var common;
    (function (common) {
        var SessionProvider = (function () {
            function SessionProvider() {
                var _this = this;
                this.configure = function (propertyName) {
                    _this.properties.push(propertyName);
                };
                this.properties = [];
                this.$get = ["$injector", function ($injector) {
                    var session = function () {
                    };
                    _this.properties.forEach(function (property, index) {
                        var object = $injector.get(property);
                        Object.defineProperty(session, property, {
                            get: function () {
                                return object.get();
                            },
                            set: function (value) {
                                object.set(value);
                            }
                        });
                    });
                    return session;
                }];
            }
            return SessionProvider;
        })();
        common.SessionProvider = SessionProvider;
        angular.module("app.common").provider("session", [SessionProvider]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=sessionProvider.js.map