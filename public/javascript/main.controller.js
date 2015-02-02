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
        {text: "lala"}
    ];

    $scope.numberField = "";
    $scope.numberData = [

    ];
    $scope.letterField = "";});
    $scope.letterData = [

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
            var numb = $scope.numberField;
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
            var letter = $scope.letterField;
        }
    };
    $scope.letterInList = function(){
        return $scope.letterData.length;
    };
    $scope.removeLetterData = function(index){
        $scope.letterData.splice(index, 1);
    };

    $scope.ChangeToNumber = function(str){
        switch(str) {
            case A:
                number = 4.0;
                break;
            case B:
                number = 3.0;
                break;
            case C:
                number = 2.0;
                break;
            case D:
                number = 1.0;
                break;
            case F:
                number = 0.0;
                break;
        }
        numGrade = Number(number);
        return numGrade;
    };

    $scope.GPAcalc = function(){
        letter = $scope.letterField;
        numb = $scope.numberField;
        for (i = 1; i < numb.length; i++) {
            $scope.GPAcalc = function (numb, letter) {
                for (i = 1; i < numb.length; i++) {
                    bottom = Number(numb[i].text) + bottom;
                    top = top + Number(numb[i].text) * $scope.ChangeToNumber(letter[i].text);
                    result = Number(top / bottom);
                }
                return result;
            };
        }
    };