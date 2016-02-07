angular.module('educationcentral', ['ngMaterial'])
    .config(function ($mdThemingProvider) {
        // Extend the red theme with a few different colors
        var neonRedMap = $mdThemingProvider.extendPalette('grey', {
            '500': 'F6F6F6'
        });
        // Register the new color palette map with the name <code>neonRed</code>
        $mdThemingProvider.definePalette('neonRed', neonRedMap);
        // Use that theme for the primary intentions
        $mdThemingProvider.theme('default')
            .primaryPalette('neonRed')
    })
    .controller('educationcentralCtrl', function ($scope) {

        $scope.menus = [
//            {
//                "name": "Market Place",
//                "image": "marketplace.png",
//                "url": "",
//                "class": "sideblock"
//            },
            {
                "name": "College",
                "image": "college.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Schools",
                "image": "school.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Training",
                "image": "training.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Acting",
                "image": "acting.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Arts & Crafts",
                "image": "craft.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Language",
                "image": "language.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Music & Painting",
                "image": "music.png",
                "url": "",
                "class": "menublock"
            }
//            ,
 //            {
 //                "name": "Custom Development",
 //                "image": "customdevelopment.png",
 //                "url": "",
 //                "class": "sideblock"
 //            }

        ];
    });
