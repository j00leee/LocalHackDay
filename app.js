angular.module("interestsApp",["firebase"])
  .controller("FirstController",function($scope){
    $scope.interests = [{
      name:"Coding",
      numberOfPeople:42,
      Description:"If your interesting in coding in anyway, these are the people for you.",
      link:""
    },{
      name:"Basketball",
      numberOfPeople:23,
      Description:"If your interesting in hooping, these are the people for you.",
      link:"https://docs.angularjs.org/api/ng/directive/ngHref"
    },
    {
      name:"Video Games",
      numberOfPeople:55,
      Description:"If your interesting in Video Games, these are the people for you.",
      link:""
    },
    {
      name:"Fashion",
      numberOfPeople:23,
      Description:"If your interesting in fashion, these are the people for you.",
      link:""
    },
    {
      name:"Fishing",
      numberOfPeople:23,
      Description:"If your interesting in Fishing, these are the people for you.",
      link:""
    }];
}).controller("ChatController",function($scope) {
  var firechatRef = new Firebase('https://<YOUR-FIREBASE>.firebaseio.com');
firechatRef.onAuth(function(authData) { ... });
...
firechatRef.authWithOAuthPopup('twitter' /* or 'facebook', 'github, 'persona', 'password' */, function(error, authData) {
  if (error) {
    console.log(error);
  }
});
});
