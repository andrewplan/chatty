'use strict';

angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('http://localhost:4000');
      },

      addMessage: function ( message, name, url ) {
        return $http.post('http://localhost:4000', { message: message, name: name, url: url });
      }
    };
  });
