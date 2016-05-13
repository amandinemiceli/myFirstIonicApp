angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('PeopleCtrl', function($scope, People) {
  $scope.all = People.all();

  $scope.add = function() {
    People.add(this.enteredName);
    this.enteredName = '';
  }
  $scope.remove = function(name) {
    People.remove(name);
  }
  $scope.search = function() {
    if (this.query) {
      People.get(this.query).then(function(data) {
        $scope.data = data;
        console.log(data);
      }).catch(function() {
        $scope.error = 'unable to get data';
      });
      this.query = '';
    }
  }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});