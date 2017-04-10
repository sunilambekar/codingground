var main = angular.module("mainApp", []);
         
         main.controller('studentController', function($scope) {
            $scope.student={
            fname:"sunil",
            lname:"ambekar",
            fees:500,
            subjects :[
                {name:"c",marks:70},
                {name:"c++",marks:79},
                {name:"c#",marks:77}
            ]
            };
            $scope.fullname=function(){
            
            return $scope.student.fname+" "+$scope.student.lname;
            }
         });