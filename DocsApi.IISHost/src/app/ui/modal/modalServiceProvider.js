var app;
(function (app) {
    var ui;
    (function (ui) {
        "use strcit";
        var ModalServiceProvider = (function () {
            function ModalServiceProvider() {
                var _this = this;
                this.$get = ["$modal", "$rootScope", function ($modal, $rootScope, any) {
                    $rootScope.$on("showModal", function (event, object) {
                        _this.showModal({
                            templateUrl: object.templateUrl
                        }, null);
                    });
                    _this.$modal = $modal;
                    return {
                        showModal: _this.showModal,
                        isOpen: false
                    };
                }];
                this.modalDefaults = {
                    backdrop: true,
                    keyboard: true,
                    modalFade: true,
                    templateUrl: '/src/app/ui/modal/default.html'
                };
                this.modalOptions = {
                    closeButtonText: 'Close',
                    actionButtonText: 'OK',
                    headerText: 'Proceed?',
                    bodyText: 'Perform this action?'
                };
                this.showModal = function (customModalDefaults, customModalOptions) {
                    if (!customModalDefaults)
                        customModalDefaults = {};
                    customModalDefaults.backdrop = 'static';
                    return _this.show(customModalDefaults, customModalOptions);
                };
                this.show = function (customModalDefaults, customModalOptions) {
                    var tempModalDefaults = {};
                    var tempModalOptions = {};
                    angular.extend(tempModalDefaults, _this.modalDefaults, customModalDefaults);
                    angular.extend(tempModalOptions, _this.modalOptions, customModalOptions);
                    if (!tempModalDefaults.controller) {
                        tempModalDefaults.controller = function ($rootScope, $scope, $modalInstance) {
                            $scope.modalOptions = tempModalOptions;
                            $scope.modalOptions.ok = function (result) {
                                $modalInstance.close('ok');
                            };
                            $scope.modalOptions.close = function (result) {
                                $modalInstance.close('cancel');
                            };
                            $rootScope.$on("closeModal", function () {
                                $modalInstance.close('ok');
                            });
                            $rootScope.$on("$locationChangeStart", function () {
                                $modalInstance.close('cancel');
                            });
                        };
                        tempModalDefaults.controller.$inject = ['$rootScope', '$scope', '$modalInstance'];
                    }
                    return _this.$modal.open(tempModalDefaults).result;
                };
            }
            return ModalServiceProvider;
        })();
        ui.ModalServiceProvider = ModalServiceProvider;
        angular.module("app.ui").provider("modalService", [ModalServiceProvider]).run(["modalService", function (modalService) {
        }]);
    })(ui = app.ui || (app.ui = {}));
})(app || (app = {}));
//# sourceMappingURL=modalServiceProvider.js.map