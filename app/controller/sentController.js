GmailApp.controller('sentController', [
    '$scope',
    'inboxData',
    function($scope, inboxData){
        $scope.sentItems = inboxData.sent_items;
        console.log($scope.sentItems);
    }
]);
