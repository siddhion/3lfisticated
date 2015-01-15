'use strict';

angular.module('maxmythicApp', ['ngResponsiveImages'])
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix = '!';
    $routeProvider
      .when('/', {
        templateUrl: '/views/design.html',
        controller: 'MainCtrl'
      })
      .when('/design', {
        templateUrl: '/views/design.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '/views/about.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: '/views/contact.html',
        controller: 'MainCtrl'
      })
      .when('/design/vance-and-gary-unhinged', {
        templateUrl: '/views/design/vance-and-gary-unhinged.html',
        controller: 'MainCtrl'
      })
      .when('/design/dam-funk', {
        templateUrl: '/views/design/dam-funk.html',
        controller: 'MainCtrl'
      })
      .when('/design/relationships', {
        templateUrl: '/views/design/relationships.html',
        controller: 'MainCtrl'
      })
      .when('/design/paintjob', {
        templateUrl: '/views/design/paintjob.html',
        controller: 'MainCtrl'
      })
      .when('/design/lemy-leopard-streets-of-house', {
        templateUrl: '/views/design/lemy-leopard-streets-of-house.html',
        controller: 'MainCtrl'
      })
      .when('/design/cloudsick', {
        templateUrl: '/views/design/cloudsick.html',
        controller: 'MainCtrl'
      })
      .when('/design/popr0n', {
        templateUrl: '/views/design/popr0n.html',
        controller: 'MainCtrl'
      })
      .when('/design/i-is-the-path', {
        templateUrl: '/views/design/i-is-the-path.html',
        controller: 'MainCtrl'
      })
      .when('/design/culture-blind', {
        templateUrl: '/views/design/culture-blind.html',
        controller: 'MainCtrl'
      })
      .when('/design/lounge-coffee', {
        templateUrl: '/views/design/lounge-coffee.html',
        controller: 'MainCtrl'
      })
      .when('/design/raverz', {
        templateUrl: '/views/design/raverz.html',
        controller: 'MainCtrl'
      })
      .when('/design/troonz', {
        templateUrl: '/views/design/troonz.html',
        controller: 'MainCtrl'
      })
      .when('/design/future-shock-logo', {
        templateUrl: '/views/design/future-shock-logo.html',
        controller: 'MainCtrl'
      })
      .when('/design/various-sketches', {
        templateUrl: '/views/design/various-sketches.html',
        controller: 'MainCtrl'
      })
      .when('/design/the-yellers', {
        templateUrl: '/views/design/the-yellers.html',
        controller: 'MainCtrl'
      })
      .when('/design/fame-logo', {
        templateUrl: '/views/design/fame-logo.html',
        controller: 'MainCtrl'
      })
      .when('/design/chaos-conspiracies', {
        templateUrl: '/views/design/chaos-conspiracies.html',
        controller: 'MainCtrl'
      })
      .when('/design/fools-gold-recs', {
        templateUrl: '/views/design/fools-gold-recs.html',
        controller: 'MainCtrl'
      })
      .when('/design/flosstradamus', {
        templateUrl: '/views/design/flosstradamus.html',
        controller: 'MainCtrl'
      })
      .when('/design/uncamouflaged', {
        templateUrl: '/views/design/uncamouflaged.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('maxmythicApp')
  .controller('MainCtrl', function ($scope) {
    $scope.designTiles = [
      {
        url : '/design/uncamouflaged',
        bgImageClass : 'chaos-conspiracies',
        title : "Uncamouflaged",
        // use : 'Logo'
      },
      {
        url : '/design/flosstradamus',
        bgImageClass : 'chaos-conspiracies',
        title : "Flosstradamus PLURNT",
        // use : 'Logo'
      },
      {
        url : '/design/fools-gold-recs',
        bgImageClass : 'maxmythic-dot-com',
        title : "Fool's Gold Records",
        // use : 'Logo'
      },
      {
        url : '/design/vance-and-gary-unhinged',
        bgImageClass : 'vance-and-gary-unhinged',
        title : 'Vance & Gary Unhinged',
        // use : 'Album Art'
      },
      {
        url : '/design/dam-funk',
        bgImageClass : 'dam-funk',
        title : 'Dam-Funk',
        // use : 'Logo'
      },
      {
        url : '/design/relationships',
        bgImageClass : 'relationships',
        title : 'Relationships',
        // use : 'Logo'
      },
      {
        url : '/design/lemy-leopard-streets-of-house',
        bgImageClass : 'lemy-leopard-soh',
        title : 'Lemy Leopard : Streets of House',
        // use : 'Album Art'
      },
      {
        url : '/design/cloudsick',
        bgImageClass : 'cloudsick',
        title : 'Cloudsick',
        // use : 'Album Art'
      },
      {
        url : '/design/popr0n',
        bgImageClass : 'popr0n',
        title : 'Popr0n',
        // use : 'Album Art'
      },
      {
        url : '/design/paintjob',
        bgImageClass : 'paintjob',
        title : 'Paint Job',
        // use : 'Album Art'
      },
      {
        url : '/design/i-is-the-path',
        bgImageClass : 'i-is-the-path',
        title : 'I IS THE PATH',
        // use : 'Album Art'
      },
      {
        url : '/design/culture-blind',
        bgImageClass : 'culture-blind',
        title : 'Max Mythic : Culture Blind',
        // use : 'Album Art'
      },
      {
        url : '/design/lounge-coffee',
        bgImageClass : 'lounge-coffee',
        title : 'Loung Coffee',
        // use : 'Album Art'
      },
      {
        url : '/design/raverz',
        bgImageClass : 'raverz',
        title : 'RAVERz',
        // use : 'Album Art'
      },
      {
        url : '/design/troonz',
        bgImageClass : 'troonz',
        title : 'TROONz Wallpaper',
        // use : 'Wall Paper'
      },
      {
        url : '/design/future-shock-logo',
        bgImageClass : 'future-shock-logo',
        title : 'Future Shock',
        // use : 'Logo'
      },
      {
        url : '/design/the-yellers',
        bgImageClass : 'the-yellers',
        title : 'The Yellers',
        // use : 'Logo'
      },
      {
        url : '/design/fame-logo',
        bgImageClass : 'fame-logo',
        title : 'F.A.M.E.',
        // use : 'Logo'
      },
      {
        url : '/design/various-sketches',
        bgImageClass : 'various-sketches',
        title : 'Various Sketches',
        // use : 'Logo'
      }
    ];
  });

window.matchMedia || (window.matchMedia = function() {
    "use strict";

    // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia = (window.styleMedia || window.media);

    // For those that don't support matchMedium
    if (!styleMedia) {
        var style       = document.createElement('style'),
            script      = document.getElementsByTagName('script')[0],
            info        = null;

        style.type  = 'text/css';
        style.id    = 'matchmediajs-test';

        script.parentNode.insertBefore(style, script);

        // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
        info = ('getComputedStyle' in window) && window.getComputedStyle(style) || style.currentStyle;

        styleMedia = {
            matchMedium: function(media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                if (style.styleSheet) {
                    style.styleSheet.cssText = text;
                } else {
                    style.textContent = text;
                }

                // Test if media query is true or false
                return info.width === '1px';
            }
        };
    }

    return function(media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
        };
    };
}());

(function(){
	// monkeypatch unsupported addListener/removeListener with polling
	if( !window.matchMedia( "all" ).addListener ){
		var oldMM = window.matchMedia;
		
		window.matchMedia = function( q ){
			var ret = oldMM( q ),
				listeners = [],
				last = ret.matches,
				timer,
				check = function(){
					var list = oldMM( q ),
						unmatchToMatch = list.matches && !last,
						matchToUnmatch = !list.matches && last;
                                                
                                        //fire callbacks only if transitioning to or from matched state
					if( unmatchToMatch || matchToUnmatch ){
						for( var i =0, il = listeners.length; i< il; i++ ){
							listeners[ i ].call( ret, list );
						}
					}
					last = list.matches;
				};
			
			ret.addListener = function( cb ){
				listeners.push( cb );
				if( !timer ){
					timer = setInterval( check, 1000 );
				}
			};

			ret.removeListener = function( cb ){
				for( var i =0, il = listeners.length; i< il; i++ ){
					if( listeners[ i ] === cb ){
						listeners.splice( i, 1 );
					}
				}
				if( !listeners.length && timer ){
					clearInterval( timer );
				}
			};
			
			return ret;
		};
	}
}());

(function(){

var app = angular.module('ngResponsiveImages', []);

// Default queries (stolen from Zurb Foundation)
app.value('presetMediaQueries', {
  'default':   'only screen and (min-width: 1px)',
  'small':     'only screen and (min-width: 768px)',
  'medium':    'only screen and (min-width: 1280px)',
  'large':     'only screen and (min-width: 1440px)',
  'landscape': 'only screen and (orientation: landscape)',
  'portrait':  'only screen and (orientation: portrait)',
  'retina':    'only screen and (-webkit-min-device-pixel-ratio: 2), ' +
               'only screen and (min--moz-device-pixel-ratio: 2), ' +
               'only screen and (-o-min-device-pixel-ratio: 2/1), ' +
               'only screen and (min-device-pixel-ratio: 2), ' +
               'only screen and (min-resolution: 192dpi), ' +
               'only screen and (min-resolution: 2dppx)'
});

app.directive('ngSrcResponsive', ['presetMediaQueries', '$timeout', function(presetMediaQueries, $timeout) {
  return {
    restrict: 'A',
    priority: 100,
    link: function(scope, elm, attrs) {
      // Double-check that the matchMedia function matchMedia exists
      if (typeof(matchMedia) !== 'function') {
        throw "Function 'matchMedia' does not exist";
      }

      // Array of media query and listener sets
      // 
      // {
      //    mql: <MediaQueryList object>
      //    listener: function () { ... } 
      // }
      // 
      var listenerSets = [];

      // Query that gets run on link, whenever the directive attr changes, and whenever 
      var waiting = false;
      function updateFromQuery(querySets) {
        // Throttle calling this function so that multiple media query change handlers don't try to run concurrently
        if (!waiting) {
          $timeout(function() { 
            // Destroy registered listeners, we will re-register them below
            angular.forEach(listenerSets, function(set) {
              set.mql.removeListener(set.listener);
            });

            // Clear the deregistration functions
            listenerSets = [];
            var lastTrueQuerySet;

            // for (var query in querySets) {
            angular.forEach(querySets, function(set) {
              // if (querySets.hasOwnProperty(query)) {

              var queryText = set[0];

              // If we were passed a preset query, use its value instead
              var query = queryText;
              if (presetMediaQueries.hasOwnProperty(queryText)) {
                query = presetMediaQueries[queryText];
              }

              var mq = matchMedia(query);

              if (mq.matches) {
                lastTrueQuerySet = set;
              }

              // Listener function for this query
              var queryListener = function(mql) {
                // TODO: add throttling or a debounce here (or somewhere) to prevent this function from being called a ton of times
                updateFromQuery(querySets);
              };

              // Add a listener for when this query's match changes
              mq.addListener(queryListener);

              listenerSets.push({
                mql: mq,
                listener: queryListener
              });
            });

            if (lastTrueQuerySet) {
              setSrc( lastTrueQuerySet[1] );
            }

            waiting = false;
          }, 0);
          
          waiting = true;
        }
      }

      
      function setSrc(src) {
        elm.attr('src', src);
      }

      var updaterDereg;
      attrs.$observe('ngSrcResponsive', function(value) {
        var querySets = scope.$eval(value);
        
        if (querySets instanceof Array === false) {
          throw "Expected evaluate ng-src-responsive to evaluate to an Array, instead got: " + querySets;
        }

        updateFromQuery(querySets);

        // Remove the previous matchMedia listener
        if (typeof(updaterDereg) === 'function') { updaterDereg(); }

        // Add a global match-media listener back
        // var mq = matchMedia('only screen and (min-width: 1px)');
        // console.log('mq', mq);
        // updaterDereg = mq.addListener(function(){
        //   console.log('updating!');
        //   updateFromQuery(querySets);
        // });
      });
    }
  };
}]);

})();
