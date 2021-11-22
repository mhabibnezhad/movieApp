movieApp.controller("movieController",function($scope,$http){
            // do something
            $scope.username = ""
            $scope.password = ""

            $scope.check= function(username,password){
                username=$scope.username;
                password=$scope.password;

                if (username=="mahmoud" && password=="1234"){
                    $http.get("movieCollection.json").then(function(response){
                        $scope.myData=response.data.movieList;
                    });
                    $scope.message1="Here are the movies for you:"
                    $scope.message2="No error"
                }
                else{
                    $scope.myData=null
                    console.log("error page/message should be shown")
                    $scope.message1="No movie to show!"
                    $scope.message2="Your username/password is wronge! Please try again."
                }
                    
                };
        });