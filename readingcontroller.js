(function (angular) {
    'use strict';

    var app = angular.module('myApp');

    app.controller('readingController', function ($scope, $rootScope, $http, $httpParamSerializer, ReadingService, $uibModal) {
        var initialise = function () {
            ReadingService.getReadings(function (data) {
                console.log(data.data);
                $scope.data = data.data;
            });
        };
        //$scope.$on('loggedin', initialise);

        $scope.deleteReading = function (reading) {
            var data = $scope.data;
            $scope.data = data.filter(function (value) {
                return value.id !== reading.id;
            });
        };

        $scope.saveReading = function () {
            var r = $rootScope.reading;
            ReadingService.saveReading(r)
                .then(function (savedReading) {

                    if (r.id > 0) {
                        var existingReadingIndex = $scope.data.findIndex(function (item) {
                            return item.id === r.id;
                        });

                        $scope.data[existingReadingIndex] = r;

                    } else {
                        $scope.data.push(r);
                    }

                    //$scope.data = $scope.data;
                    $('#readingDialog').modal('toggle');

                });
        }

        $scope.editReading = function (reading) {

            //$('#readingDialog').modal();
            $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: '/views/readingForm.html',
                controller: 'readingEditController',
                resolve: {}
            });

            var copiedReading = {};
            if (reading == null) {
                copiedReading = {
                    readingDate: moment().toDate(),

                }
            } else {
                copiedReading = {
                    id: reading.id,
                    readingDate: moment(reading.readingDate).toDate(),
                    weightKg: reading.weightKg,
                    musclePercent: reading.musclePercent,
                    fatPercent: reading.fatPercent,
                    bmi: reading.bmi,
                    viscrealFatLevel: reading.viscrealFatLevel
                }
            }
            $rootScope.reading = copiedReading;
        }

        initialise();

    });

}(window.angular));