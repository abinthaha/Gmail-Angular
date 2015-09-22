GmailApp.controller('draftController', [
    '$scope',
    'inboxData',
    function($scope, inboxData){
        $scope.draftItems = inboxData.drafts;
        console.log($scope.draftItems);
    }
]);
