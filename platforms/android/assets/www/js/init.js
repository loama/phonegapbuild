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
            $("#loginScreen").addClass("animated bounceOutLeft");
            console.log(jsondata.store_id);
            var background = "img/alianzas/" + foto + ".png"
            document.getElementById('body').style.background = 'url('+background+')';
            document.getElementById('body').style.backgroundPosition = 'top center';
            document.getElementById('body').style.backgroundSize = 'cover';

          }

      });

      return false; // prevent normal submit
  });