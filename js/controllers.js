'use strict';

/* Controllers */

var controllers = angular.module('kodiak.controllers', ['kodiak.configs']);


controllers.controller('landingCtrl',
    function($scope) {
        $scope.descdata = [
{header:'school', descrip:'lorem ipsam', url:'sasasas',val:'25'},
{header:'school1', descrip:'lorem ipsam1', url:'sasasas1',val:'25'},
{header:'school1', descrip:'lorem ipsam1', url:'sasasas1',val:'25'},
{header:'school1', descrip:'lorem ipsam1', url:'sasasas1',val:'55'},
{header:'school1', descrip:'lorem ipsam1', url:'sasasas1',val:'25'},
{header:'school1', descrip:'lorem ipsam1', url:'sasasas1',val:'75'},
{header:'school1', descrip:'lorem ipsam1', url:'sasasas1',val:'25'},
{header:'school1', descrip:'lorem ipsam1', url:'sasasas1',val:'25'},
{header:'school1', descrip:'lorem ipsam1', url:'sasasas1',val:'15'},
{header:'school2', descrip:'lorem ipsam3', url:'sasasas2',val:'25'}];
    }
);

