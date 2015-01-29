var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
    mainApp.controller('navbarCtrl', function($scope){
        console.log("controller loaded!");

        $scope.pages = [
            {text: "Home", link: '/'},
            {text: "About", link: '/about'},
            {text: "GPA Calculator", link: '/GPACalc'},
            {text: "Kittens", link: '/kittens'},
            {text: "404 Page", link: '/wefwrtbertbeb'}
        ];
    });

//==================== MAIN CONTROLLER ==================================
    mainApp.controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.textField = "";

       // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
       $scope.data = [
           {text: "fish"},
           {text: "kittens"},
           {text: "snake"},
           {text: "badger"},
           {text: "puppies"},
           {text: "cats"}

       ];

       $scope.addData = function(){
           if($scope.textField.length >= 1) {
               $scope.data.push({text: $scope.textField});
               $scope.textField = "";
           }
       };

       $scope.removeData = function(index){
           $scope.data.splice(index, 1);
       };

       $scope.cat = function(str1, str2){
           return str1 + str2;
       };

       $scope.itemsInList = function(){
           return $scope.data.length;
       };

        /*$scope.addCourse = funtion()
        {
            $scope.list = [];
            $scope.text = 'hello';
            $scope.submit = function () {
                if ($scope.text) {
                    $scope.list.push(this.text);
                    $scope.text = '';
                }
            };
        };*/

    });
//======================GPA Ctrl============
mainApp.controller('GPACtrl', function($scope) {
    console.log("controller loaded!");

    $scope.courseField = "";
    $scope.CourseData = [
        {text: ""},
    ];
    $scope.addCOurse = function(){
        if($scope.courseField.length >= 1) {
            $scope.CourseData.push({text: $scope.courseField});
            $scope.courseField = "";
        }
    };
    //$scope.addCourse = funtion(){
    //    $scope.list = [];
    //    $scope.text = 'hello';
    //    $scope.addCourse = function () {
    //        if ($scope.text) {
    //            $scope.list.push(this.text);
    //            $scope.text = '';
    //        }
    //    };
    //};
});