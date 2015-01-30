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

    });
//======================GPA Ctrl============
mainApp.controller('GPACtrl', function($scope) {
    console.log("controller loaded!");

    $scope.courseField = "";
    $scope.courseData = [
        {text: "Current Courses"}
    ];

    $scope.numberField = "";
    $scope.numberData = [
        {text: "Current Credits"}
    ];

    $scope.letterField = "";
    $scope.letterData = [
        {text: "Current Letter Grade"}
    ];

    $scope.addCourse = function(){
        if($scope.courseField.length >= 1) {
            $scope.courseData.push({text: $scope.courseField});
            $scope.courseField = "";
        }
    };

    $scope.coursesInList = function(){
        return $scope.courseData.length;
    };

    $scope.removeCourseData = function(index){
        $scope.courseData.splice(index, 1);
    };

    $scope.addNumber = function(){
        if($scope.numberField.length >= 1) {
            $scope.numberData.push({text: $scope.numberField});
            $scope.numberField = "";
        }
    };

    $scope.numberInList = function(){
        return $scope.numberData.length;
    };

    $scope.removeNumberData = function(index){
        $scope.numberData.splice(index, 1);
    };

    $scope.addLetter = function(){
        if($scope.letterField.length >= 1) {
            $scope.letterData.push({text: $scope.letterField});
            $scope.letterField = "";
        }
    };

    $scope.letterInList = function(){
        return $scope.letterData.length;
    };

    $scope.removeLetterData = function(index){
        $scope.letterData.splice(index, 1);
    };
});