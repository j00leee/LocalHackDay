var ref = new Firebase('https://subinapp.firebaseio.com/ChatStream');

ref.on("value", function(data) {
  console.log(data.val());
for(var x in data.val()){

  $('#chatSpace').html("");
  for(var x in data.val()){
  $('#chatSpace').append("<p>"+data.val()[x]+"</p><hr>");
}
}
});

function sendMessage(){
          var text = $('#messageInput').val();
          ref.push(text,function() {
            $('#messageInput').val('');
            console.log("DAta set");
          });
}

  ref.authAnonymously(function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
