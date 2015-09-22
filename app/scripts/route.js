
//Defining the routes
GmailApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/inbox');

    $stateProvider
    .state('inbox', {
        url: "/inbox",
        templateUrl: "app/views/inbox.html",
        controller : "inboxController",
        resolve : {
            inboxData : function(MailSrv){
                return MailSrv.fetchInbox();
            }
        }
    })
    .state('starred', {
        url: "/starred",
        templateUrl: "app/views/starred.html"
    })
    .state('important', {
        url: "/important",
        templateUrl: "app/views/important.html"
    })
    .state('sent_mail', {
        url: "/sent_mail",
        templateUrl: "app/views/sent.html"
    })
    .state('drafts', {
        url: "/drafts",
        templateUrl: "app/views/draft.html"
    });
});
