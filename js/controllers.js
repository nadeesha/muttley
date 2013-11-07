'use strict';

/* Controllers */

var controllers = angular.module('kodiak.controllers', ['kodiak.configs']);

var uri = 'http://localhost:3000';

controllers.controller('landingCtrl',
    function($scope, $http) {
        function updateClasses() {
            $http.get(uri + '/classrooms/')
                .success(function(data) {
                    $scope.classrooms = data;
                });
        };

        updateClasses();

        $scope.add = function(name) {
            $http.put(uri + '/classrooms/', JSON.stringify({
                name: name
            }))
                .success(function(data) {
                    updateClasses();

                    $.pnotify({
                        type: 'success',
                        title: 'Class created!',
                        message: 'Your class had been created successfully...',
                        hide: true
                    });
                })
                .error(function(data) {
                    $.pnotify({
                        type: 'error',
                        title: 'Something went wrong!',
                        hide: true
                    });
                })
        }
    }
);

controllers.controller('articlesCtrl', function($scope, $http, $stateParams) {
    var classId = $stateParams.classId;

    $http.get(uri + '/classrooms/' + classId)
    	.success(function (data) {
    		$scope.class = data;
    	})

    function updateArticles(id) {
        $http.get(uri + '/classrooms/' + id + '/articles')
            .success(function(data) {
                $scope.articles = data;
            });
    };

    updateArticles(classId);

    $scope.add = function (url) {
    	$http.put(uri + '/classrooms/' + classId + '/articles', JSON.stringify({url: url}))
    		.success(function (data) {
    			$.pnotify({
                        type: 'success',
                        title: 'Article submitted!',
                        message: 'Your article is being processed.',
                        hide: true
                    });

    			updateArticles(classId);
    		});
    }
});