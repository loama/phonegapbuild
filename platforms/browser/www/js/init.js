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

          }

      $.ajax({
        type: "GET",
        url: "http://52.10.76.37/alien/public/orders/palmitos?type=new",
        dataType: "json",
        success : function(data) {
                      json = data;
                      
                      
                      for (i = 0; i < json.length; i++){
                      products = data[i].products;
                        for (h = 0; h < products.length; h++){
                          new_orders= "<li><div class='collapsible-header valing-wrapper row' style='margin-bottom:0;'><div class='col s3' style='height:80px'><span class='helper'></span><img src='http://v2.mxgrability.rappi.com/uploads/products/low/" + data[i].products[0].image + " 'style='margin-top:10px; vertical-align:middle' width='80px'></div> <div class='col s6'><p>" + data[i].products[0].name + "</div></div><div class='collapsible-body' style='min-height:30px'><p>" + data[i].products[0].image + "</p></div></li>";


                          /*"<li onclick='consola(" + [i] +")'><a href='form.html' data-popup='.popup-" + [i] +"' class='item-link item-content'><div class='item-media'></div><div class='item-inner'><div class='item-title-row'><div class='item-title'>" + data[i].products[h].name + "</div><div class='item-after'>" + data[i].datetime.substring(11, 16) + "<br>" + data[i].status + "</div></div><div class='item-subtitle'>"+ data[i].order_id +"</div><div class='item-text'>" + data[i].products[h].description + "</div></div></a></li>";*/
                      $('#nuevasordenesTab').append(new_orders);
                      $('#nuevasordenesTab').addClass("animated bounceInUp");
                      
                    }
                    }
                    if (json.length > 0) { $('#notifications').append("<span class='badge bg-red' style='position: absolute; top: 5px; right: 25px'>" + json.length + "</span>"); };

                      for (i = 0; i < json.length; i++){
                      var order_id=(data[i].order_id);
                      var order_status=(data[i].status);
                      var order_datetime=(data[i].datetime);
                        var order_products=(data[i].products.product_id);
                        for (h = 0; h < products.length; h++){
                          var product_id= (data[i].products[0].product_id);
                          console.log(data[i].products[0].image);
                          console.log(data[i].products[0].name);
                          console.log(data[i].products[0].description);
                        }
                        console.log(data[i].rt[0].name)
                        console.log(data[i].rt[0].profile_pic);
                        console.log(data[i].rt[0].telephone);
                      }
                  }
               });



      });

      return false; // prevent normal submit
  });

function submitForm () {
  console.log("hola");
  $('#submitBtn').click();
};