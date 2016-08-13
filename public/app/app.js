var app = angular.module("app",[]);

app.controller("fetchIssuesController", ['$scope', '$http', function ($scope, $http){

  $scope.gitLink = [];
  $scope.open_issues_count=[];
  $scope.open_issues=null;
  $scope.total_open_issues=[];
  $scope.total_open_issues_lastoneday = [];
  $scope.total_open_issues_lastoneweek = [];
  $scope.lastoneday = null;
  $scope.lastoneweek = null;
  $scope.error = null;
  $scope.loaded = true;

  //fetch function evoked when a github link is submitted. It gets count of issues from github using GITHUB API.
  $scope.fetch = function (searchLink){
    $scope.loaded = false;
    //seperating the searched link using javascript split() function on "/" to get {org_name or username} and {repo_name}
    var gitLink = searchLink.split("/");

    //gitLink[3] is the org_name or username and gitLink[4] is the repo_name.
    $http.get('https://api.github.com/repos/'+gitLink[3]+"/"+gitLink[4]).success(function(data){
      total_open_issues=data.open_issues_count;
      $scope.open_issues=total_open_issues;
    }).error(function(err){
      console.log(err);
      $scope.error=err;
    })

    //three variables to hold three timestamps, todays, 24 hours ago and seven days ago
    var d = new Date(), y = new Date(), w = new Date();
    //converting the timestamp in ISO 8601 format
    d.toISOString();
    //setting 'y' timestamp as 24 hours ago same time GMT.
    y.setDate(d.getDate() - 1);
    //setting 'w' timestamp as 7 days ago same time GMT
    w.setDate(d.getDate() - 7);

    //using GITHUB API : getting issues for the given link which was created in last 24 hours
    $http.get('https://api.github.com/repos/'+gitLink[3]+"/"+gitLink[4]+'/issues?since='+y).success(function(result){
      total_open_issues_lastoneday=result;
      lastoneday =total_open_issues_lastoneday.length;
      $scope.lastoneday=lastoneday;
    }).error(function(err){
      console.log(err);
      $scope.error=err;

    })

    //using GITHUP API : getting issues for the given link which was created in last 7 days
    $http.get('https://api.github.com/repos/'+gitLink[3]+"/"+gitLink[4]+'/issues?since='+w).success(function(output){
      total_open_issues_lastoneweek=output;
      lastoneweek =total_open_issues_lastoneweek.length;
      //subtracting number of issues which were created in last 24 hours.
      lastoneweek = lastoneweek - lastoneday;
      $scope.lastoneweek=lastoneweek;
      $scope.loaded=true;
    }).error(function(err){
      console.log(err);
      $scope.error=err;
    })
  }
}
]);
