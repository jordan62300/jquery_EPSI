
   $("#age").keyup(function() {
       var majorite = $("#age").val();
       console.log(majorite)
       if(majorite < 18) {
        $(".majorite").text("vous etes mineur")
        $(".majorite").fadeIn("slow")
        $(".majorite").removeClass("d-none")
        
       } else {
           $(".majorite").text("Vous etes majeur")
       }
   }
   )
