let myModule = angular.module("newModule", []);

myModule.controller("dataControll", function ($scope, $http) {
  $http.get("http://localhost:5500/data.json").then(function (response) {
    $scope.persons = response.data.records;
  });
});
