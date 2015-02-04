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

    //we added numberField and letterField as well as numberData and letterData, so we can push credits and letter grade
    //into data list.
    $scope.courseField = "";
    $scope.courseData = [];
    $scope.numberData = [];
    $scope.letterData = [];

    $scope.addCourse = function () {
        if ($scope.courseField.length >= 1) {
            if ($scope.validation() == true) {
                $scope.courseData.push({text: $scope.courseField});
                $scope.numberData.push({number: $scope.numberField});
                $scope.letterData.push({letter: $scope.letterField});
                $scope.courseField = "";
                $scope.numberField = 0;
                $scope.letterField = "";
            }
            else {
                alert("error: try again! Please read the directions!" );
            }
        }
    };

    //contains function, to check if a object is in array
    $scope.contains = function(a,obj) {
        for (var i =0; i < a.length; i++) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    };

    //validation function, to check if the inputs are valid.
    $scope.validation = function () {
        var letters = ["A","B","C","D","F"];
       if ($scope.numberField == 0) {
           alert("error: invalid credit amount");
           return false;
       }
        else if (!$scope.contains(letters,$scope.letterField)) {
//           console.log("works here");
           alert("error: invalid letter grade");
           return false;
       }
        else {
           return true;
       }
    };

    $scope.coursesInList = function () {
        return $scope.courseData.length;
    };

    //changed it so that when the user remove a course, the numberdata and letterdata removed as well, and re-calls function
    //GPAcalc().
    $scope.removeCourseData = function (index) {
        $scope.courseData.splice(index, 1);
        $scope.numberData.splice(index, 1);
        $scope.letterData.splice(index, 1);
        $scope.GPAcalc();
    };


    //Another helper function that can change a given letter grade to number grade.
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
//        console.log("NumGrade");
//        console.log(numGrade);
        return numGrade;

    };

    //This is our function to calculate GPA.
    $scope.GPAcalc = function () {
        var letter = $scope.letterData;
        var numb = $scope.numberData;
//        console.log("~~~~~~~~~ Gpa calc stuff ~~~~");
//        console.log(letter[0]);
//        console.log(numb[0]);
        var result;
        var top = 0;
        var bottom = 0;
               for (i = 0; i < numb.length; i++) {
                    bottom += Number(numb[i].number);
//                   console.log(numb[i].number);
                   top = top + numb[i].number * $scope.ChangeToNumber(letter[i].letter);
                    result = top / bottom;
                }
//        console.log("bottom: " + bottom);
        return result;
    };

    //This function will change the color of words depends on the GPA score.
    $scope.colorCode = function () {
        if ($scope.GPAcalc() < 2.0) {
           return {"color": 'red'};
        }
        else if ($scope.GPAcalc() >= 2.0 && $scope.GPAcalc() < 3.0) {
           return {"color": 'blue'};
        }
        else if ($scope.GPAcalc() >= 3.0) {
            return {"color": 'green'};
        }
        else {
            return {"color": 'black'};
        }
    };
});