"use strict";angular.module("maxmythicApp",["ngResponsiveImages"]).config(["$locationProvider","$routeProvider",function(a,b){a.html5Mode(!0),a.hashPrefix="!",b.when("/",{templateUrl:"/views/design.html",controller:"MainCtrl"}).when("/design",{templateUrl:"/views/design.html",controller:"MainCtrl"}).when("/about",{templateUrl:"/views/about.html",controller:"MainCtrl"}).when("/contact",{templateUrl:"/views/contact.html",controller:"MainCtrl"}).when("/design/vance-and-gary-unhinged",{templateUrl:"/views/design/vance-and-gary-unhinged.html",controller:"MainCtrl"}).when("/design/dam-funk",{templateUrl:"/views/design/dam-funk.html",controller:"MainCtrl"}).when("/design/relationships",{templateUrl:"/views/design/relationships.html",controller:"MainCtrl"}).when("/design/paintjob",{templateUrl:"/views/design/paintjob.html",controller:"MainCtrl"}).when("/design/lemy-leopard-streets-of-house",{templateUrl:"/views/design/lemy-leopard-streets-of-house.html",controller:"MainCtrl"}).when("/design/cloudsick",{templateUrl:"/views/design/cloudsick.html",controller:"MainCtrl"}).when("/design/popr0n",{templateUrl:"/views/design/popr0n.html",controller:"MainCtrl"}).when("/design/i-is-the-path",{templateUrl:"/views/design/i-is-the-path.html",controller:"MainCtrl"}).when("/design/culture-blind",{templateUrl:"/views/design/culture-blind.html",controller:"MainCtrl"}).when("/design/lounge-coffee",{templateUrl:"/views/design/lounge-coffee.html",controller:"MainCtrl"}).when("/design/raverz",{templateUrl:"/views/design/raverz.html",controller:"MainCtrl"}).when("/design/troonz",{templateUrl:"/views/design/troonz.html",controller:"MainCtrl"}).when("/design/future-shock-logo",{templateUrl:"/views/design/future-shock-logo.html",controller:"MainCtrl"}).when("/design/various-sketches",{templateUrl:"/views/design/various-sketches.html",controller:"MainCtrl"}).when("/design/the-yellers",{templateUrl:"/views/design/the-yellers.html",controller:"MainCtrl"}).when("/design/fame-logo",{templateUrl:"/views/design/fame-logo.html",controller:"MainCtrl"}).when("/design/chaos-conspiracies",{templateUrl:"/views/design/chaos-conspiracies.html",controller:"MainCtrl"}).when("/design/maxmythic-dot-com",{templateUrl:"/views/design/maxmythic-dot-com.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("maxmythicApp").controller("MainCtrl",["$scope",function(a){a.designTiles=[{url:"/design/vance-and-gary-unhinged",bgImageClass:"vance-and-gary-unhinged",title:"Vance & Gary Unhinged"},{url:"/design/dam-funk",bgImageClass:"dam-funk",title:"Dam-Funk"},{url:"/design/relationships",bgImageClass:"relationships",title:"Relationships"},{url:"/design/lemy-leopard-streets-of-house",bgImageClass:"lemy-leopard-soh",title:"Lemy Leopard : Streets of House"},{url:"/design/cloudsick",bgImageClass:"cloudsick",title:"Cloudsick"},{url:"/design/popr0n",bgImageClass:"popr0n",title:"Popr0n"},{url:"/design/paintjob",bgImageClass:"paintjob",title:"Paint Job"},{url:"/design/i-is-the-path",bgImageClass:"i-is-the-path",title:"I IS THE PATH"},{url:"/design/culture-blind",bgImageClass:"culture-blind",title:"Max Mythic : Culture Blind"},{url:"/design/lounge-coffee",bgImageClass:"lounge-coffee",title:"Loung Coffee"},{url:"/design/raverz",bgImageClass:"raverz",title:"RAVERz"},{url:"/design/troonz",bgImageClass:"troonz",title:"TROONz Wallpaper"},{url:"/design/future-shock-logo",bgImageClass:"future-shock-logo",title:"Future Shock"},{url:"/design/the-yellers",bgImageClass:"the-yellers",title:"The Yellers"},{url:"/design/chaos-conspiracies",bgImageClass:"chaos-conspiracies",title:"Chaos Concpiracies"},{url:"/design/fame-logo",bgImageClass:"fame-logo",title:"F.A.M.E."},{url:"/design/various-sketches",bgImageClass:"various-sketches",title:"Various Sketches"},{url:"/design/maxmythic-dot-com",bgImageClass:"maxmythic-dot-com",title:"maxmythic.com"}]}]);