var app;
(function (app) {
    var ui;
    (function (ui) {
        //http://blogs.windows.com/buildingapps/2015/06/08/winjs-4-0-released/
        "use strict";
        var Popover = (function () {
            function Popover(configurationManager, popoverService) {
                var _this = this;
                this.configurationManager = configurationManager;
                this.popoverService = popoverService;
                this.restrict = "E";
                this.replace = true;
                this.scope = {
                    options: "="
                };
                this.templateUrl = "/src/app/ui/popover/popover.html";
                this.link = function (scope, element, attributes) {
                    initialize(scope, element, attributes);
                    element[0].addEventListener(scope.options.triggerEvent, function (event) {
                        event.stopPropagation();
                        _this.popoverService.showPopover({
                            appendToBody: scope.options.appendToBody || true,
                            defaultDirection: scope.options.defaultDirection || "bottom",
                            element: element[0],
                            popoverTitle: scope.options.popoverTitle,
                            templateUrl: scope.options.templateUrl,
                            template: template,
                            transitionDurationInMilliseconds: scope.options.transitionDurationInMilliseconds || 500,
                            triggerScope: scope,
                            visibilityDurationInMilliseconds: scope.options.visibilityDurationInMilliseconds || 3000
                        });
                    });
                    function initialize(scope, element, attributes) {
                        scope.options.triggerEvent = scope.options.triggerEvent || "click";
                        extendScope(scope, attributes);
                        template = element[0].querySelectorAll("[popover-template]")[0];
                        if (template) {
                            template.parentNode.removeChild(template);
                        }
                    }
                    function extendScope(scope, attributes) {
                        angular.extend(scope, buildViewBagFromAttributes(attributes));
                        angular.extend(scope, scope.options.viewBag);
                    }
                    function buildViewBagFromAttributes(attributes) {
                        var viewBag = {};
                        for (var attr in attributes) {
                            if (attr.indexOf("$") < 0 && attr.indexOf("class") < 0 && attr.indexOf("popoverTrigger") < 0) {
                                if (!angular.isFunction(attributes[attr])) {
                                    viewBag[attr] = attributes[attr];
                                }
                            }
                        }
                        return viewBag;
                    }
                    var template;
                };
            }
            Popover.instance = function (configurationManager, popoverService) {
                return new Popover(configurationManager, popoverService);
            };
            return Popover;
        })();
        ui.Popover = Popover;
        angular.module("app.ui").directive("popover", ["configurationManager", Popover.instance]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=popover.js.map