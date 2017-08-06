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
 //  	FB.getLoginStatus(function(response) {
 //   	 statusChangeCallback(response);
 //  	});
	// }
  function sendUserInfo(){

  }
  function login() {
            FB.login(function(response) {
            // handle the response
            console.log("Response goes here!");
            });        
            $('#logout').show()
		        $('#login').hide()    
    }


	function logout(){
		    FB.getLoginStatus(function(response) {
		     if (response && response.status === 'connected') {
		       FB.logout(function(response) {
		         $('#logout').hide()
		         $('#login').show()

		        	console.log('hello')
		        });
		      }
		    })
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
	                // FB.api('/me', function(fbUser) {
	                //     console.log("Open the pod bay doors, " + fbUser.name + ".");
	                // });
	            } else { $('#logout').show()}
	        });
	    }
	);

});