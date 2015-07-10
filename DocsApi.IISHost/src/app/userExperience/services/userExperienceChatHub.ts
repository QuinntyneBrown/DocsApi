module app.userExperience {

    "use strict";

    export class FeedbackChatHub {
        constructor(private $rootScope: ng.IRootScopeService, $: any) {

            this.connection = $.hubConnection();

            this.hub = this.connection.createHubProxy("userExperienceChatHub");

            this.connection.start(() => {

            });

        }

        public connection: any = null;

        public hub: any = null;


    }

    angular.module("app.userExperience").service("userExperienceChatHub", ["$rootScope","$",FeedbackChatHub]);
} 