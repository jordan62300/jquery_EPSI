    var passwordInput;
    var confirmedPasswordInput;

   $("#age").keyup(function() {
       var majorite = $("#age").val();
       console.log(majorite)
       if(majorite < 18) {
            $(".majorite").text("vous etes mineur")
            $(".majorite").fadeIn("slow")
            $(".majorite").removeClass("d-none")
            $(".majorite").addClass("text-warning")
        
       } else if(majorite >= 18) {
            $(".majorite").removeClass("text-warning")
            $(".majorite").text("Vous etes majeur")
            $(".majorite").fadeIn("slow")
            $(".majorite").removeClass("d-none")
            $(".majorite").addClass("text-success")
       }
   })

   $("#password").change(function() {
       passwordInput = $("#password").val();
       console.log(passwordInput);
       if(passwordInput != confirmedPasswordInput && passwordInput != "" && confirmedPasswordInput != "" ) {
            $(".checkpassword").text(" Les 2 mots de passes ne correspondent pas")
            console.log("pas hello")
    } else {
            console.log("hello")
            $(".checkpassword").text(" ")
    }
 })

   $("#confirmpassword").change(function() {
        confirmedPasswordInput = $("#confirmpassword").val();
        console.log(confirmedPasswordInput);
    if(passwordInput != confirmedPasswordInput && passwordInput != "" && confirmedPasswordInput != "") {
        $(".checkpassword").text(" Les 2 mots de passes ne correspondent pas")
        console.log("pas hello")
    } else {
        console.log("hello")
        $(".checkpassword").text(" ")
    }
})

