angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller("ChatsCtrl", function($rootScope, Chats, $scope, $state, $ionicModal, $ionicPlatform, $ionicPopup, $ionicHistory, $ionicSideMenuDelegate, $window){
  $scope.serverIp = "http://10.10.22.88:3000/Menu";
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.refreshData = function(callback){
    
   /* { //TODO REMOVER ESSA DESGRinha
      AppService.login("1", "1").then(function(res2){
        $rootScope.usuario = res2.data[0];
        $scope.refreshData();
      });
    }*/
      console.log("REFRESHING");
     if ($rootScope.prato._id){
        console.log($rootScope.prato);
        AppService.getMenu().then(
          function(res){
            $rootScope.prato = res.data;
            AppService.getConsultas($rootScope.prato._id).then( 
              function(res){   
                  $rootScope.pratos = res.data;
                  $scope.printData();
                  if(callback){callback();}
                });
            });
      
    }
  };



  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
