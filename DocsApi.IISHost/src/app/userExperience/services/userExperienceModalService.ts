module app.userExperience {

    "use strict";

    export class FeedbackModalService implements IUserExperienceModalService {

        constructor(private $q:ng.IQService,private modalService: ui.IModalService) {
            
        }

        public showModal = () => {

            var deferred = this.$q.defer();

            this.modalService.showModal({
                controller: "userExperienceModalController as feedbackModal",
                templateUrl: "/src/app/feedback/views/partials/feedbackModal.html"
            }, null).then((results) => {
                deferred.resolve();
            });

            return deferred.promise;
        }
    }

    angular.module("app.userExperience").service("userExperienceModalService", ["$q","modalService", FeedbackModalService]);
} 