angular.module("interestsApp",["firebase"])
  .controller("FirstController",function($scope){
    $scope.interests = [{
      name:"Coding",
      numberOfPeople:42,
      Description:"If your interested in coding in anyway, these are the people for you.",
      link:""
    },{
      name:"Basketball",
      numberOfPeople:23,
      Description:"If your interested in hooping, these are the people for you.",
      link:"https://docs.angularjs.org/api/ng/directive/ngHref"
    },
    {
        name:"Video Games",
      numberOfPeople:55,
      Description:"If your interested in Video Games, these are the people for you.",
      link:""
    },
    {
      name:"Fashion",
      numberOfPeople:23,
      Description:"If your interested in fashion, these are the people for you.",
      link:""
    },
    {
      name:"Fishing",
      numberOfPeople:23,
      Description:"If your interested in Fishing, these are the people for you.",
      link:""
    }];
});
