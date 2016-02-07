angular.module('healthcentral', ['ngMaterial'])
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
    .controller('healthcentralCtrl', function ($scope) {

        $scope.menus = [
            {
                "name": "Market Place",
                "image": "marketplace.png",
                "url": "",
                "class": "sideblock"
            },
            {
                "name": "Directory",
                "image": "directory.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Clinics",
                "image": "clinic.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Patients",
                "image": "patient.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Doctors",
                "image": "doctor.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Laboratory",
                "image": "lab.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Pharmacy",
                "image": "pharmacy.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Service / Support",
                "image": "service.png",
                "url": "",
                "class": "menublock"
            },
            {
                "name": "Custom Development",
                "image": "customdevelopment.png",
                "url": "",
                "class": "sideblock"
            }

        ];
    });
