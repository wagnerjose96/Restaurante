angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Hamburguer',
    lastText: 'Com 100g de carne !',
    face: 'img/burguer.jpeg'
  }, {
    id: 1,
    name: 'Pizza',
    lastText: 'Com muito mais queijo !',
    face: 'img/pizza.jpeg'
  }, {
    id: 2,
    name: 'Tacos',
    lastText: 'Bem apimentados !',
    face: 'img/tacos.jpeg'
  }, {
    id: 3,
    name: 'Macarrão',
    lastText: 'Com nosso molho especial !',
    face: 'img/macarrão.jpeg'
  }, {
    id: 4,
    name: 'Salada',
    lastText: 'Salada de folhas verdes com azeite !',
    face: 'img/salada.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});





