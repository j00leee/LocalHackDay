angular.module("interestsApp",["firebase"])
  .controller("FirstController",function($scope){
    $scope.interests = [{
      name:"Coding",
      numberOfPeople:42,
      Description:"If you are interested in coding in anyway, these are the people for you.",
      link:""
    },{
      name:"Basketball",
      numberOfPeople:23,
      Description:"If you are interested in hooping, these are the people for you.",
      link:"https://docs.angularjs.org/api/ng/directive/ngHref"
    },
    {
        name:"Video Games",
      numberOfPeople:55,
      Description:"If you are interested in Video Games, these are the people for you.",
      link:""
    },
    {
      name:"Fashion",
      numberOfPeople:23,
      Description:"If you are interested in fashion, these are the people for you.",
      link:""
    },
    {
      name:"Fishing",
      numberOfPeople:23,
      Description:"If you are interested in Fishing, these are the people for you.",
      link:""
    }];
});
