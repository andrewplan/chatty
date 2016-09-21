'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
    });

    $scope.addMessage = function ( message, name, url ) {
      if ( message && name && url ) {
        messageService.addMessage( message, name, url ).then( function ( response ) {
          $scope.messages = response.data;
          console.log( $scope.messages );
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
