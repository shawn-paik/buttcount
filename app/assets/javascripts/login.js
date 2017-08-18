
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

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  

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
            $('#fbLogout').show()
            $('#fbLogin').hide()    
    }

  function addUser(user) {
    var facebookEmail = user.name + '@facebook.com'
    var email = facebookEmail.replace(/ /g,"_");
    console.log(email)
    let data = {
      fb: true,
      email: email,
      fbid: user.id
    }
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
             $('#fbLogout').hide()
             $('#fbLogin').show()
              console.log('you have been logged out')
            });
          }
        })
        window.location ='pages/signout'
    }

$(document).ready(function(){
  $('button').hide()
  $('#fbLogout').on("click",logout)
  $('#fbLogin').on("click",login)
  $(".sign-up-form").hide()
  $(".log-in-form").hide()

  $('#sign-up').on("click", function(event){
    event.preventDefault()
     $('#sign-up').hide()
    $(".sign-up-form").show()
  })

  $('#log-in').on("click", function(event){
    event.preventDefault()
    $('#log-in').hide()
    $(".log-in-form").show()
  })

  $('.toggle').on("click", function(event){
    if ($(this).hasClass('show')){
      console.log('true')
      $(this).parent()[0][3].type = "text"
      $(this).removeClass('show')
    } else {
      console.log('false')
      // $('#password').attr('type','password')
      $(this).parent()[0][3].type = "password"
      // $(this).parent()[0][3].attr('type','password')
      $(this).addClass('show')
    }
  })

  
  $(document).on(
      'fbload',  //  <---- HERE'S OUR CUSTOM EVENT BEING LISTENED FOR
      function(){
          //some code that requires the FB object
          //such as...
          FB.getLoginStatus(function(res){
              if( res.status == "connected" ){
                  $('#logout').show()
              } else { $('#logout').show()}
          });
      }
  );

});