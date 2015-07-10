var app;
(function (app) {
    var userExperience;
    (function (userExperience) {
        "use strict";
        var FeedbackChatHub = (function () {
            function FeedbackChatHub($rootScope, $) {
                this.$rootScope = $rootScope;
                this.connection = null;
                this.hub = null;
                this.connection = $.hubConnection();
                this.hub = this.connection.createHubProxy("userExperienceChatHub");
                this.connection.start(function () {
                });
            }
            return FeedbackChatHub;
        })();
        userExperience.FeedbackChatHub = FeedbackChatHub;
        angular.module("app.userExperience").service("userExperienceChatHub", ["$rootScope", "$", FeedbackChatHub]);
    })(userExperience = app.userExperience || (app.userExperience = {}));
})(app || (app = {}));
//# sourceMappingURL=userExperienceChatHub.js.map