(function () {

  angular.module('passwordManagers', [])
    
    .controller('main', function ($scope) {

      $scope.passwordManagers = [
        {
          name: '1Password',
          logo: 'https://da9ipfiyfnxgu.cloudfront.net/images/pristine/icons/product-1password-mac-windows-bundle.png?1442119322',
          prices: [
            {
              name: '1Password Mac + Windows Bundle',
              price: '$69.99',
            },
            {
              name: '1Password 5 for Mac',
              price: '$49.99',
            },
            {
              name: '1Password 4 for Windows',
              price: '$49.99',
            },
            {
              name: 'iOS & Android apps',
              price: 'Free',
            }
          ],
          browser_plugins: [
            'chrome',
            'firefox',
            'safari',
            'opera',
          ],
          mobile_apps: [
            'ios',
            'android',
          ],
          desktop_apps: [
            'windows',
            'osx',
          ],

        }
      ];

    })

    .directive('headerRow', function () {
      return {
        templateUrl: '/templates/headerRow.html',
      };
    })

    .directive('alternativeRow', function () {
      return {
        restrict: 'EA',
        templateUrl: '/templates/alternativeRow.html',
        link: function (scope) {
          
          scope.getLogoImage = function (name) {
            return 'logos/' + name + '.png';
          };

          scope.logos = {
            chrome: 'logos/chrome.png',
            firefox: 'logos/firefox.png',
            safari: 'logos/safari.png',
            opera: 'logos/opera.png',
            windows: 'logos/windows.png',
          };

        }
      };
    })

    ;

}());
