var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
mainApp.controller('navbarCtrl', function($scope){
    console.log("controller loaded!");

    $scope.pages = [
        {text: "Home", link: '/'},
        {text: "About", link: '/about'},
        {text: "Kittens", link: '/kittens'},
        //added the GPA calculator link in navbar
        {text: "GPA Calculator", link: '/GPAcalc'},
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

//====================================GPA CONTROLLER========================================================

mainApp.controller('GPACtrl', function($scope) {
    console.log("controller loaded!");

    $scope.courseField = "";
    $scope.courseData = [

    ];

    $scope.numberField = 0;
    $scope.numberData = [];

    $scope.letterField = "";
    $scope.letterData = [];

    $scope.addCourse = function () {
        if ($scope.courseField.length >= 1) {
            $scope.courseData.push({text: $scope.courseField});
            $scope.numberData.push({number: $scope.numberField});
            $scope.letterData.push({letter: $scope.letterField});
            $scope.courseField = "";
            $scope.numberField = 0;
            $scope.letterField = "";

        }
    };
    $scope.coursesInList = function () {
        return $scope.courseData.length;
    };
    $scope.removeCourseData = function (index) {
        $scope.courseData.splice(index, 1);
        $scope.GPAcalc();
    };
    //$scope.addNumber = function () {
    //    if ($scope.numberField.length >= 1) {
    //        $scope.numberData.push({number: $scope.numberField});
    //        $scope.numberField = 0;
    //        //var numb = $scope.numberField;
    //    }
    //};
    //$scope.numberInList = function () {
    //    return $scope.numberData.length;
    //};
    //$scope.removeNumberData = function (index) {
    //    $scope.numberData.splice(index, 1);
    //};
    //$scope.addLetter = function () {
    //    if ($scope.letterField.length >= 1) {
    //        $scope.letterData.push({letter: $scope.letterField});
    //        $scope.letterField = "";
    //        //var letter = $scope.letterField;
    //    }
    //};
    //$scope.letterInList = function () {
    //    return $scope.letterData.length;
    //};
    //$scope.removeLetterData = function (index) {
    //    $scope.letterData.splice(index, 1);
    //};

    $scope.ChangeToNumber = function (str) {
        var numGrade;
        switch (str) {
            case 'A':
                number = 4.0;
                break;
            case 'B':
                number = 3.0;
                break;
            case 'C':
                number = 2.0;
                break;
            case 'D':
                number = 1.0;
                break;
            case 'F':
                number = 0.0;
                break;
        }
        numGrade = number;
        console.log("NumGrade");
        console.log(numGrade);
        return numGrade;

    };

    $scope.GPAcalc = function () {
        var letter = $scope.letterData;
        var numb = $scope.numberData;
        console.log("~~~~~~~~~ Gpa calc stuff ~~~~");
        console.log(letter[0]);
        console.log(numb[0]);
        var result;
        var top = 0;
        var bottom = 0;
               for (i = 0; i < numb.length; i++) {
                    bottom += Number(numb[i].number);
                   console.log(numb[i].number);
                   top = top + numb[i].number * $scope.ChangeToNumber(letter[i].letter);
                    result = top / bottom;
                };
        console.log("bottom: " + bottom);
        return result;
    };

});