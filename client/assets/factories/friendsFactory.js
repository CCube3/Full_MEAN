app.factory('friendsFactory', ['$http', function($http) {
    var friends = [];
    var friend = {};

    function FriendConstructor() {
        var _this = this;

        this.index = function(callback) {
            $http.get('/friends').then(function(returned_data){
                friends = returned_data.data;
                callback(friends);
            });
        };

        this.create = function(newFriend, callback) {
            $http.post('/friends', newFriend).then(function(returned_data) {
                if (typeof(callback) == 'function') {
                    callback(returned_data);
                }
            });
        };

        this.update = function(id, updateFriend, callback) {
            $http.put('/friends/'+id, updateFriend).then(function(returned_data) {
                if (typeof(callback) == 'function') {
                    callback(returned_data);
                }
            });
        };

        this.show = function(id, callback) {// what parameters do we need?
            $http.get('/friends/'+id).then(function(returned_data) {
                if (typeof(callback) == 'function') {
                    callback(returned_data.data);
                }
            });
        };

        this.delete = function(id, callback) {// what parameters do we need?
            $http.delete('/friends/'+id).then(function(returned_data) {
                if (typeof(callback) == 'function') {
                    friends = returned_data.data;
                    callback(returned_data.data);
                }
            });
        };
    }
    return (new FriendConstructor());
}]);
