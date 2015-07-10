var app;
(function (app) {
    var common;
    (function (common) {
        var MetadataService = (function () {
            function MetadataService($q, apiEndpoint, dataService) {
                this.$q = $q;
                this.apiEndpoint = apiEndpoint;
                this.dataService = dataService;
            }
            MetadataService.prototype.getMetadata = function () {
                var deferred = this.$q.defer();
                deferred.resolve();
                return deferred.promise;
            };
            MetadataService.prototype.getMetadataForEntity = function () {
                var deferred = this.$q.defer();
                return deferred.promise;
            };
            MetadataService.prototype.getLocalMetadataForEntity = function () {
                return null;
            };
            return MetadataService;
        })();
        common.MetadataService = MetadataService;
        angular.module("app.common").service("metadataService", ["$q", "apiEndpoint", "dataService", MetadataService]);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=metadataService.js.map