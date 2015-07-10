var app;
(function (app) {
    var i18n;
    (function (i18n) {
        describe("i18nService", function () {
            beforeEach(function () {
                module("app.i18n");
            });
            var i18nService;
            var backend;
            beforeEach(inject(function ($httpBackend, apiEndpoint) {
                backend = $httpBackend;
                backend.expect("POST", apiEndpoint.getBaseUrl() + "/i18n").respond({ translatedPhrases: [] });
            }));
            beforeEach(inject(function (_i18nService_) {
                i18nService = _i18nService_;
            }));
            it("should be defined", function () {
                expect(i18nService).toBeDefined();
            });
            //it("should get a dto from the /i18n endpoint with an array of translated phrases",() => {
            //    var i18nResults;
            //    i18nService.get({}).then((results) => {
            //        i18nResults = results.data.translatedPhrases;
            //    });
            //    backend.flush();
            //    expect(i18nResults).toEqual([]);
            //});
        });
    })(i18n = app.i18n || (app.i18n = {}));
})(app || (app = {}));
//# sourceMappingURL=i18nService.spec.js.map