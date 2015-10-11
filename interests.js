angular.module("interestsApp",[])
  .controller("FirstController",function($scope){
    $scope.interests = [{
      name:"Coding",
      numberOfPeople:42,
      Description:"If your interesting in coding in anyway, these are the people for you.",
      link:""
    },{
      name:"Basketball",
      numberOfPeople:23,
      Description:"If Ball is Life, these are the people for you.",
      link:"https://docs.angularjs.org/api/ng/directive/ngHref"
    },
    {
      name:"Video Games",
      numberOfPeople:55,
      Description:"If your interesting in beating noobs, these are the people for you.",
      link:""
    },
    {
      name:"Fashion",
      numberOfPeople:23,
      Description:"If your rocking that Supreme, these are the people for you.",
      link:""
    },
    {
      name:"Fishing",
      numberOfPeople:23,
      Description:"If you eat fish, these are the people for you.",
      link:""
    }];
});
