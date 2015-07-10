module app.userExperience {

    "use strict";

    export class FeedbackModalController {

        constructor(private $modalInstance: any,
            private $rootScope: any,
            private feedbackManager: IUserExperienceManager,
            private feedbackService: IUserExperienceService) {
            $rootScope.$on("$locationChangeStart", () => {
                this.$modalInstance.close('cancel');
            });

        }

        public save = () => {
            this.feedbackService.update({
                guid: this.guid,
                comments: this.comments,
                rating: this.rating
            }).then(() => {
                this.$modalInstance.close('ok');
            });
        }

        private _comments: string;

        public get comments() {
            return this._comments;
        }

        public set comments(value: string) {
            this._comments = value;
        }

        private _rating: number;

        public get rating() {
            return this._rating;
        }

        public set rating(value: number) {
            this.rating = value;
        }

        public get guid() {
            return this.feedbackManager.guid;
        }
    }

    angular.module("app.userExperience").controller("userExperienceModalController",
        ["$modalInstance", "$rootScope", "userExperienceManager","userExperienceService", FeedbackModalController]);

} 