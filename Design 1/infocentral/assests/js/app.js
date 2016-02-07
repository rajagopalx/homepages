angular.module('infocentral', ['ngMaterial'])
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
    .controller('infocentralCtrl', function ($scope) {

        $scope.menus = [

            {
                "name": "HealthCare",
                "image": "healthcare.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Education",
                "image": "education.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Retail",
                "image": "retail.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Real Estate",
                "image": "realestate.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Mobiles",
                "image": "mobiles.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Jobs",
                "image": "jobs.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Logistics",
                "image": "logistics.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Automobiles",
                "image": "automobiles.png",
                "url": "",
                "class": "menublock"
            }

        ];
    });
