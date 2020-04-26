var firebaseConfig = {
    apiKey: "AIzaSyA_oFEP4RWiDALCBXTkZcb6RV86I5tw_u8",
    authDomain: "buddy-blog-c0b0e.firebaseapp.com",
    databaseURL: "https://buddy-blog-c0b0e.firebaseio.com",
    projectId: "buddy-blog-c0b0e",
    storageBucket: "buddy-blog-c0b0e.appspot.com",
    messagingSenderId: "654686912462",
    appId: "1:654686912462:web:d97b78a5d1fa577b53359f",
    measurementId: "G-3865J0SCB3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  firebase.auth.Auth.Persistence.LOCAL;

  //Login buttun starts here
  $("#btn-login").click(function()
    {
    var email = $("#email").val();
    var password = $("#password").val();

    if(email != "" && password != ""){
        var result  = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function(error)
        {

            var errorCode= error.code;
            var errorMessage= error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        });  
    }else{
        window.alert("form is incomplete, please  fill in the empty fields.");
    }
  });
//Login buttun ends here


//sigUp buttun starts here
  $("#btn-signup").click(function()
  {
  var email = $("#email").val();
  var password = $("#password").val();
  var cPassword = $("#confirmpassword").val();

  if(email != "" && password != "" && cPassword != ""){
      if(password == cPassword){

        var result  = firebase.auth().createUserWithEmailAndPassword(email, password);

      result.catch(function(error)
      {

          var errorCode= error.code;
          var errorMessage= error.message;

          console.log(errorCode);
          console.log(errorMessage);

          window.alert("Message : " + errorMessage);
        });
      }else{

        window.alert("The password field does not match the confirm password field");

      }
        
  }else{
      window.alert("form is incomplete, please  fill in the empty fields.");
  }
});
//siginUp buttun ends here


//logout buttun starts here
  $("#btn-logout").click(function()
    {
        firebase.auth().signOut();
  });
//Logout buttun ends here


//reset password buttun starts here
  $("#btn-ResetPassword").click(function()
  {
    var auth = firebase.auth();
  var email = $("#email").val();

  if(email != ""){
      auth.sendPasswordResetEmail(email).then(function()
      {
        window.alert("an email has been sent to : " + email + " please check your emails and veriy");
      })
      .catch(function(error)
      {

          var errorCode= error.code;
          var errorMessage= error.message;

          console.log(errorCode);
          console.log(errorMessage);

          window.alert("Message : " + errorMessage);
      });  
  }else{
      window.alert("please enter your email address first.");
  }
});

//Login buttun ends here

//Accont Seetings
$("#btn-update").click(function()
{
  var phoneNum = $("#phone").val();
  var StudentNum = $("#studentNum").val();
  var bio = $("#bio").val();
  var university = $("#university").val();
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var gender= $("#Gender").val();
  
  var rootRef = firebase.database().ref().child("Users");
  var userID = firebase.auth().currentUser.uid;
  var usersRef = rootRef.child(userID); 

if (phoneNum!="" && studentNum !="" && university!="" && firstName!="" && lastName !="" && gender!="" ) {

  var userData = 
  {
    "phone": phoneNum,
    "studentNum": StudentNum,
    "bio":bio,
    "firstName": firstName,
    "university":university,
    "lastName": lastName,
    "Gender": gender,
  };

usersRef.set(userData, function(error)
{

if (error) {

  var errorCode= error.code;
  var errorMessage= error.message;

  console.log(errorCode);
  console.log(errorMessage);

  window.alert("Message : " + errorMessage);
  
} else {
  window.location.href= "MainPage.html";
  
}



});

} else {
  window.alert("form is incomplete, please  fill in the empty fields.");
}

});