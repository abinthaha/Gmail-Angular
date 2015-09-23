GmailApp.controller('inboxController', [
    '$scope',
    'inboxData',
    function($scope, inboxData){
        $scope.inboxItems = inboxData.Received;
        console.log(inboxData);

        $scope.toggleStar = function(index){
            console.log(index);
            inboxData.Received[index].starred = inboxData.starred === true ? false : true ;
        };
    }
]);
