(function () {

  angular.module('passwordManagers', [])
    
    .controller('main', function ($scope) {

      $scope.passwordManagers = [
        {
          link: 'https://www.zoho.com/vault/',
          name: 'Zoho Vault',
          prices: [
            {
              name: 'Personal Use',
              price: 'Free',
            },
            {
              name: 'Small Teams',
              price: '$1 / user / yr',
            },
            {
              name: 'Medium Teams',
              price: '$4 / user / yr',
            },
            {
              name: 'Enterprise Teams',
              price: '$7 / user / yr',
            },
          ],
          browser_plugins: [
            'chrome',
            'firefox',
          ],
          mobile_apps: [
            'android',
            'ios',
          ],
          desktop_apps: [
          ],

        },
        {
          link: 'https://encryptr.org/',
          name: 'Encryptr',
          prices: [
            {
              name: 'Open Source',
              price: 'Free',
            }
          ],
          browser_plugins: [
          ],
          mobile_apps: [
            'android',
          ],
          desktop_apps: [
            'windows',
            'osx',
            'linux',
          ],

        },
        {
          link: 'https://www.dashlane.com/passwordmanager',
          name: 'Dashlane',
          logo: 'https://pbs.twimg.com/profile_images/378800000742436759/5236c9e33e0703c2d2b45db796fdbc7b_normal.png',
          prices: [
            {
              name: 'Standard',
              price: 'Free',
            },
            {
              name: 'Premium - Sync to all devices',
              price: '$39.99 / yr'
            }
          ],
          browser_plugins: [
            'chrome',
            'firefox',
            'safari',
          ],
          mobile_apps: [
            'ios',
            'android',
          ],
          desktop_apps: [
            'windows',
            'osx',
          ],

        },
        {
          link: 'http://www.roboform.com/',
          name: 'RoboForm',
          logo: 'http://www.roboform.com/marketing-images/rfp/logo_top_01.png',
          prices: [
            {
              name: '',
              price: '$9.99 1st year',
            }
          ],
          browser_plugins: [
            'chrome',
            'firefox',
          ],
          mobile_apps: [
            'ios',
            'android',
          ],
          desktop_apps: [
            'windows',
            'osx',
          ],

        },
        {
          link: 'https://agilebits.com/store',
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
              name: 'iOS app',
              price: 'Free (Pro features $5.99)',
            },
            {
              name: 'Android app',
              price: '$9.99'
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

        },
        {
          link: 'http://keepass.info/',
          name: 'KeePass',
          logo: 'http://keepass.info/images/icons/keepass_512x512.png',
          prices: [
            {
              name: 'Open Source Version',
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
            'linux',
          ],

        },
        {
          link: 'https://passopolis.com/',
          name: 'Passopolis',
          prices: [
            {
              name: 'Open Source',
              price: 'Free',
            }
          ],
          browser_plugins: [
            'chrome',
            'firefox',
            'safari',
          ],
          mobile_apps: [
            'ios',
            'android',
          ],
          desktop_apps: [
          ],

        },
        {
          link: 'http://enpass.io/',
          name: 'Enpass',
          prices: [
            {
              name: 'Desktop',
              price: 'Free',
            },
            {
              name: 'Mobile Apps (upto 20 items)',
              price: 'Free',
            },
            {
              name: 'Mobile Apps: (>20 items)',
              price: 'One time $9.99 / platform',
            },
          ],
          browser_plugins: [
            'chrome',
            'firefox',
            'safari',
          ],
          mobile_apps: [
            'ios',
            'android',
          ],
          desktop_apps: [
            'windows',
            'osx',
            'linux',
          ],

        },
        {
          link: 'https://keepersecurity.com/',
          name: 'Keeper',
          prices: [
            {
              name: 'One Device',
              price: '$9.99/yr',
            },
            {
              name: 'Unlimitd Device',
              price: '$29.99/yr',
            },
            {
              name: 'Enterprise',
              price: '$750/yr & $48/user/yr',
            },
          ],
          browser_plugins: [
            'chrome',
            'firefox',
            'safari',
          ],
          mobile_apps: [
            'ios',
            'android',
          ],
          desktop_apps: [
            'windows',
            'osx',
            'linux',
          ],

        },
      ];
      
      // -> Fisher–Yates shuffle algorithm
      var shuffleArray = function(array) {
        var m = array.length, t, i;
      
        // While there remain elements to shuffle
        while (m) {
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
      
        return array;
      };
      
      // shuffle the psasword managers randomly.
      shuffleArray($scope.passwordManagers);
      
    })

    .directive('headerRow', function () {
      return {
        templateUrl: 'templates/headerRow.html',
      };
    })

    .directive('alternativeRow', function () {
      return {
        restrict: 'EA',
        templateUrl: 'templates/alternativeRow.html',
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
