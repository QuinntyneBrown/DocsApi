var app;
(function (app) {
    var telemetry;
    (function (telemetry) {
        "use strict";
        var ModernizrService = (function () {
            function ModernizrService() {
            }
            Object.defineProperty(ModernizrService.prototype, "autofocus", {
                get: function () {
                    return Modernizr.autofocus;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "fontface", {
                get: function () {
                    return Modernizr.fontface;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "backgroundsize", {
                get: function () {
                    return Modernizr.backgroundsize;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "borderimage", {
                get: function () {
                    return Modernizr.borderimage;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "borderradius", {
                get: function () {
                    return Modernizr.borderradius;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "boxshadow", {
                get: function () {
                    return Modernizr.boxshadow;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "flexbox", {
                get: function () {
                    return Modernizr.flexbox;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "hsla", {
                get: function () {
                    return Modernizr.hsla;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "multiplebgs", {
                get: function () {
                    return Modernizr.multiplebgs;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "opacity", {
                get: function () {
                    return Modernizr.opacity;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "rgba", {
                get: function () {
                    return Modernizr.rgba;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "textshadow", {
                get: function () {
                    return Modernizr.textshadow;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "cssanimations", {
                get: function () {
                    return Modernizr.cssanimations;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "csscolumns", {
                get: function () {
                    return Modernizr.csscolumns;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "generatedcontent", {
                get: function () {
                    return Modernizr.generatedcontent;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "cssgradients", {
                get: function () {
                    return Modernizr.cssgradients;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "cssreflections", {
                get: function () {
                    return Modernizr.cssreflections;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "csstransforms", {
                get: function () {
                    return Modernizr.csstransforms;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "csstransforms3d", {
                get: function () {
                    return Modernizr.csstransforms3d;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "csstransitions", {
                get: function () {
                    return Modernizr.csstransitions;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "applicationcache", {
                get: function () {
                    return Modernizr.applicationcache;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "canvas", {
                get: function () {
                    return Modernizr.canvas;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "canvastext", {
                get: function () {
                    return Modernizr.canvastext;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "draganddrop", {
                get: function () {
                    return Modernizr.draganddrop;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "hashchange", {
                get: function () {
                    return Modernizr.hashchange;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "history", {
                get: function () {
                    return Modernizr.history;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "audio", {
                get: function () {
                    return Modernizr.audio.mp3;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "video", {
                get: function () {
                    return Modernizr.video.webm;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "indexeddb", {
                get: function () {
                    return Modernizr.indexeddb;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "input", {
                get: function () {
                    return Modernizr.input.required;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "inputtypes", {
                get: function () {
                    return Modernizr.inputtypes.tel;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "localstorage", {
                get: function () {
                    return Modernizr.localstorage;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "postmessage", {
                get: function () {
                    return Modernizr.postmessage;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "sessionstorage", {
                get: function () {
                    return Modernizr.sessionstorage;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "websockets", {
                get: function () {
                    return Modernizr.websockets;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "websqldatabase", {
                get: function () {
                    return Modernizr.websqldatabase;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "webworkers", {
                get: function () {
                    return Modernizr.webworkers;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "geolocation", {
                get: function () {
                    return Modernizr.geolocation;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "inlinesvg", {
                get: function () {
                    return Modernizr.inlinesvg;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "smil", {
                get: function () {
                    return Modernizr.smil;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "svg", {
                get: function () {
                    return Modernizr.svg;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "svgclippaths", {
                get: function () {
                    return Modernizr.svgclippaths;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "touch", {
                get: function () {
                    return Modernizr.touch;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ModernizrService.prototype, "webgl", {
                get: function () {
                    return Modernizr.webgl;
                },
                enumerable: true,
                configurable: true
            });
            return ModernizrService;
        })();
        telemetry.ModernizrService = ModernizrService;
        angular.module("app.telemetry").service("modernizrService", [ModernizrService]);
    })(telemetry = app.telemetry || (app.telemetry = {}));
})(app || (app = {}));
//# sourceMappingURL=modernizrService.js.map