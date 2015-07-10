/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var telemetry;
    (function (telemetry) {
        "use strict";
        var Features = (function () {
            function Features(modernizrService) {
                var _this = this;
                this.modernizrService = modernizrService;
                this.set = function (value) {
                    throw new Error("Can not set browswer Features");
                };
                this.get = function () {
                    var features = [];
                    features.push({ name: "autofocus", state: _this.modernizrService.autofocus });
                    features.push({ name: "fontface", state: _this.modernizrService.fontface });
                    features.push({ name: "backgroundsize", state: _this.modernizrService.backgroundsize });
                    features.push({ name: "borderimage", state: _this.modernizrService.borderimage });
                    features.push({ name: "borderradius", state: _this.modernizrService.borderradius });
                    features.push({ name: "boxshadow", state: _this.modernizrService.boxshadow });
                    features.push({ name: "flexbox", state: _this.modernizrService.flexbox });
                    features.push({ name: "hsla", state: _this.modernizrService.hsla });
                    features.push({ name: "multiplebgs", state: _this.modernizrService.multiplebgs });
                    features.push({ name: "opacity", state: _this.modernizrService.opacity });
                    features.push({ name: "rgba", state: _this.modernizrService.rgba });
                    features.push({ name: "textshadow", state: _this.modernizrService.textshadow });
                    features.push({ name: "cssanimations", state: _this.modernizrService.cssanimations });
                    features.push({ name: "csscolumns", state: _this.modernizrService.csscolumns });
                    features.push({ name: "generatedcontent", state: _this.modernizrService.generatedcontent });
                    features.push({ name: "cssgradients", state: _this.modernizrService.cssgradients });
                    features.push({ name: "cssreflections", state: _this.modernizrService.cssreflections });
                    features.push({ name: "csstransforms", state: _this.modernizrService.csstransforms });
                    features.push({ name: "csstransforms3d", state: _this.modernizrService.csstransforms3d });
                    features.push({ name: "csstransitions", state: _this.modernizrService.csstransitions });
                    features.push({ name: "applicationcache", state: _this.modernizrService.applicationcache });
                    features.push({ name: "canvas", state: _this.modernizrService.canvas });
                    features.push({ name: "canvastext", state: _this.modernizrService.canvastext });
                    features.push({ name: "draganddrop", state: _this.modernizrService.draganddrop });
                    features.push({ name: "hashchange", state: _this.modernizrService.hashchange });
                    features.push({ name: "history", state: _this.modernizrService.history });
                    features.push({ name: "audio", state: _this.modernizrService.audio });
                    features.push({ name: "video", state: _this.modernizrService.video });
                    features.push({ name: "indexeddb", state: _this.modernizrService.indexeddb });
                    features.push({ name: "input", state: _this.modernizrService.input });
                    features.push({ name: "inputtypes", state: _this.modernizrService.inputtypes });
                    features.push({ name: "localstorage", state: _this.modernizrService.localstorage });
                    features.push({ name: "postmessage", state: _this.modernizrService.postmessage });
                    features.push({ name: "sessionstorage", state: _this.modernizrService.sessionstorage });
                    features.push({ name: "websockets", state: _this.modernizrService.websockets });
                    features.push({ name: "websqldatabase", state: _this.modernizrService.websqldatabase });
                    features.push({ name: "webworkers", state: _this.modernizrService.webworkers });
                    features.push({ name: "geolocation", state: _this.modernizrService.geolocation });
                    features.push({ name: "inlinesvg", state: _this.modernizrService.inlinesvg });
                    features.push({ name: "smil", state: _this.modernizrService.smil });
                    features.push({ name: "svg", state: _this.modernizrService.svg });
                    features.push({ name: "svgclippaths", state: _this.modernizrService.svgclippaths });
                    features.push({ name: "Touch", state: _this.modernizrService.touch });
                    features.push({ name: "webgl", state: _this.modernizrService.webgl });
                    return features;
                };
            }
            return Features;
        })();
        telemetry.Features = Features;
        angular.module("app.telemetry").service("features", ["modernizrService", Features]).config([
            "sessionProvider",
            function (sessionProvider) {
                sessionProvider.configure("features");
            }
        ]);
    })(telemetry = app.telemetry || (app.telemetry = {}));
})(app || (app = {}));
//# sourceMappingURL=features.js.map