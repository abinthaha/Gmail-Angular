GmailApp.controller('inboxController', [
    '$scope',
    'inboxData',
    function($scope, inboxData){
        $scope.inboxItems = inboxData.Received;
        console.log(inboxData);
    }
]);
