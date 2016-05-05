(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function closeLoginModal() {
	$('#loginScreen').addClass("animated slideOutDown");
};

$("form").submit(function() {
      $.post($(this).attr("action"), $(this).serialize(), function(data) {
          $("#someDiv").html(data);
          jsondata = jQuery.parseJSON(data);
          alliance = jsondata.alliance_name;
          foto = jsondata.request;
          logincard = document.getElementById("#CardLogin");
          
          if (alliance == "falso") {
            console.log("cagadero");
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $('#CardLogin').addClass("animated shake").one(animationEnd, function() {
                $(this).removeClass('animated ' + 'shake')});
          } else { 
            var loginScreen = document.getElementById("loginScreen");
            $("#loginScreen").addClass("animated bounceOutDown");
            var foto = jsondata.request;
            console.log(foto);
            var background = "img/alianzas/" + foto + ".png"
            document.body.style.backgroundImage = 'url('+background+')';
            document.getElementById('body').style.backgroundPosition = 'top center';
            document.getElementById('body').style.backgroundSize = 'cover';

          }

      });

      return false; // prevent normal submit
  });

function submitForm () {
  console.log("hola");
  $('#submitBtn').click();
};