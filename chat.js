var ref = new Firebase('https://subinapp.firebaseio.com/chat');
var chat = new FireChat(ref);

function login(){
  ref.authAnonymously(function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:"+authData.uiud, authData);
    }
  });
}
