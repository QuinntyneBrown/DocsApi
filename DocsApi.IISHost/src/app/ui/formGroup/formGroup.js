/// <reference path="../../../../scripts/typings/typescriptapp.d.ts" />
var app;
(function (app) {
    var ui;
    (function (ui) {
        var FormGroup = (function () {
            function FormGroup(metadataService) {
                var _this = this;
                this.metadataService = metadataService;
                this.restrict = "E";
                this.compile = function (element, attributes) {
                    var metadata = _this.metadataService.getLocalMetadataForEntity(attributes["entity"]);
                    element.replaceWith(getTemplate(metadata));
                    function getTemplate(metadata) {
                        var template;
                        var label;
                        for (var i = 0; i < metadata.attributes.length; i++) {
                            if (metadata.attributes[i].propertyName && metadata.attributes[i].propertyName.toLowerCase() === attributes["propertyName"].toLowerCase()) {
                                if (metadata.attributes[i].attributeName == "DisplayAttribute") {
                                    label = metadata.attributes[i].name;
                                }
                            }
                        }
                        template = '<div class="form-group">' + '<label>' + label + '</label>' + '<input class="form-control" type="input" data-ng-model="' + attributes["ngModel"] + '" ' + getCustomValidationAttributes(metadata).join(" ") + ' ></input>' + '<span class="help-block"></span>' + '</div>';
                        return template;
                    }
                    function getCustomValidationAttributes(metadata) {
                        var customValidationAttributes = [];
                        customValidationAttributes.push(isRequired(metadata) ? "required='required'" : "");
                        return customValidationAttributes;
                    }
                    function isRequired(metadata) {
                        for (var i = 0; i < metadata.attributes.length; i++) {
                            if (metadata.attributes[i].propertyName && metadata.attributes[i].propertyName.toLowerCase() === attributes["propertyName"].toLowerCase()) {
                                if (metadata.attributes[i].attributeName == "RequiredAttribute") {
                                    if (metadata.attributes[i].isRequired) {
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                    return _this.link;
                };
                this.link = function (scope, element, attributes) {
                };
            }
            FormGroup.instance = function (metadataService) {
                return new FormGroup(metadataService);
            };
            return FormGroup;
        })();
        ui.FormGroup = FormGroup;
        angular.module("app.ui").directive("formGroup", ["metadataService", FormGroup.instance]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=formGroup.js.map