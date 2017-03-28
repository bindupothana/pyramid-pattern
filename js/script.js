var app = angular.module('pyramidApp', []);
app.controller('pyramidCtrl', function ($scope) {
  $scope.pyramid= function (num) {
    $scope.result=[];
    // $scope.result.push(j)
    // $scope.pyramid="pyramid";
    
    for (var i = 1; i <=num; i++) {

        for (var j = 1; j <= i; j++) {

           $scope.result.push(j)
          
            
            console.log("pattern",$scope.result);
        }
        console.log("\n");
    }

}
     

   
        
});
