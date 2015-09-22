GmailApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/inbox');

    $stateProvider
    .state('inbox', {
        url: "/inbox",
        templateUrl: "app/views/inbox.html"
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
