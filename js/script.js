var app = angular.module('pyramidApp', []);
app.controller('pyramidCtrl', function ($scope) {
  $scope.pyramid= function (num) {
    $scope.result=[];
    // $scope.result.push(j)
    // $scope.pyramid="pyramid";
     
    for (var i = 1; i <=num; i++) {
         var obj = []
        for (var j = 1; j <= i; j++) {
                     // var obj = []

            // var obj ={
            //     i: i,
            //     j: j
            // }
           obj.push(j);
          
            
            console.log("pattern",$scope.result);
        }
        $scope.result.push(obj)
        console.log("\n");
    }

}
     

   
        
});
