var app;
(function (app) {
    var abstractDataTypes;
    (function (abstractDataTypes) {
        var LinkedList = (function () {
            function LinkedList() {
            }
            return LinkedList;
        })();
        abstractDataTypes.LinkedList = LinkedList;
        angular.module("app.abstractDataTypes").service("linkedList", [LinkedList]);
    })(abstractDataTypes = app.abstractDataTypes || (app.abstractDataTypes = {}));
})(app || (app = {}));
//# sourceMappingURL=linkedList.js.map