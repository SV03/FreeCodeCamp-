var app = angular.module('gameOfLifeApp', []);
app.controller('gameOfLifeCtrl', function($scope, $interval){

  //grid
  var rowMax = 25;
  var colMax = 30;

  //create grid
  $scope.rows = [];
  for(var i=0; i<rowMax; i++){
    var col = [];
    for (var j=0; j <colMax; j++){
      var elem = {'active': 0};
      col.push(elem);

    }
    $scope.rows.push({'cols':col});
  }

    // generate seeds
    var randomSeeds = function(){
      for(var i=0; i<(rowMax*colMax/2); i++){
        var row =Math.floor(Math.random()*(rowMax 1));
        var col =Math.floor(Math.random()*(colMax 1));
        $scope.activate(row,col);

      }
    }
   
})
