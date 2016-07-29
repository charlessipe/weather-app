'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.yelp
 * @description
 * # yelp
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('yelp', function ($resource) {
    // Service logic
    // ...

    
    var generateNonce = function(length) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for(var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        }
    console.log(generateNonce(32));
    


    // Public API here
    return $resource('https://crossorigin.me/https://api.yelp.com/v2/search/', {}, {
      query: {
        method:'GET',
        params:{
          oauth_consumer_key: 'wfmrdaQihSpXxYS1YTwG1A',
          oauth_token: 'G68wajA06Nij1dlq1coGDigKrc0TuK2M',
          oauth_signature_method: 'HMAC-SHA1',
          oauth_signature: 'QtfGTrldDslaqGVZszWVxrQ-e1o',
          oauth_timestamp: new Date().getTime(),
          oauth_nonce: generateNonce(32),
          oauth_version: '1.0',
          location: 'Seattle'
        },
        isArray:false
      }
    });
  });
