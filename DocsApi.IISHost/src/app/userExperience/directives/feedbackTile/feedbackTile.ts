﻿module app.userExperience{

    export class FeedbackTile {
        constructor() {

        }

        public static instance = () => {
            return new FeedbackTile();
        }

        public restrict: string = "E";

        public replace: boolean = true;

        public templateUrl: string = "/src/app/feedback/directives/feedbackTile/feedbackTile.html";

        public scope: any = {
        };

        public link = () => {
            
        }
    }

    angular.module("app.userExperience").directive("userExperienceTile", [FeedbackTile.instance]);

}