app.controller('newController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory) {

    $scope.addFriend = function(){
        var date = formatDate($scope.birthday);
        console.log(date);
        $scope.friend.birthday = date;
        friendsFactory.create($scope.friend, function(data) {
            if(data.errors) {
                console.log(data.errors);
            }
            else {
                $scope.friend = {};
                $location.url('/');
            }
        });
    };

    function formatDate(date) {
        month = '' + (date.getMonth() + 1),
        day   = '' + date.getDay(),
        year  = date.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
}]);
