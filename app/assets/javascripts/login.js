console.log('hi')


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '412402172465035',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();    
    $(document).trigger('fbload')
  };

  // var status = FB.getLoginStatus();
  //   console.log(status);
  // console.log(status)

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  
 //  function checkLoginState() {
 //   FB.getLoginStatus(function(response) {
 //      statusChangeCallback(response);
 //   });
  // }
  function sendUserInfo(){

  }


  function login() {
            FB.login(function(response) {
            // handle the response
            // console.log("Response goes here!");
            console.log(response)
            
            FB.api('/me', function(fbUser) {
                  // debugger
                  addUser(fbUser)
                      console.log("Open the pod bay doors, " + fbUser.name + ".");

                  });
            });        
            $('#logout').show()
            $('#login').hide()    
    }
  function addUser(user) {
    var facebookEmail = user.name + '@facebook.com'
    var email = facebookEmail.replace(/ /g,"_");
    console.log(email)
    let data = {
      fb: true,
      email: email,
      fbid: user.id
      // status: loginStatus.status
    }
    // debugger
    $.ajax({
      method: 'POST',
      url:'/users',
      data: data
    }).done(function (response){
      if (response) {
        var $newdiv1 = $("<div id='error-message'>" + response[0] +"</div>")
        $('.image-container').prepend($newdiv1) }
    });
  } 

  function logout(){
        FB.getLoginStatus(function(response) {
         if (response && response.status === 'connected') {
           FB.logout(function(response) {
             $('#logout').hide()
             $('#login').show()
              console.log('you have been logged out')
            });
          }
        })
        window.location ='pages/signout'
    }


$(document).ready(function(){
  $('button').hide()
  $('#logout').on("click",logout)
  $('#login').on("click",login)
  
  $(document).on(
      'fbload',  //  <---- HERE'S OUR CUSTOM EVENT BEING LISTENED FOR
      function(){
          //some code that requires the FB object
          //such as...
          FB.getLoginStatus(function(res){
              if( res.status == "connected" ){
                  $('#logout').show()
                  // 
              } else { $('#logout').show()}
          });
      }
  );

});