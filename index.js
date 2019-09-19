    var passwordInput ,confirmedPasswordInput ,prenom,nom,age,civilite,pseudo;

    $( document ).ready(function() {
        $(".container").hide();
        $(".container").fadeIn("slow");
        verificationPassword()
        isMajor()
        createProfil()
    })

function isMajor() {
   $("#age").keyup(function() {
        age = $("#age").val();
       if(age == 0 && age == "") {
            $(".majorite").hide()
       } else if(age >= 18 ) {
            $(".majorite").removeClass("text-warning")
            $(".majorite").text("Vous etes majeur")
            $(".majorite").fadeIn("slow").removeClass('d-none');
            $(".majorite").addClass("text-success")
       } else if(age < 18) {
            $(".majorite").fadeIn('slow').removeClass('d-none');
            $(".majorite").text("vous etes mineur")
            $(".majorite").addClass("text-warning")
       }
   })
}

function verificationPassword() {
    $("#password").change(function() {
        if($("#password").val() != $("#confirmpassword").val() && $("#password").val() != "" && $("#confirmpassword").val() != "" ) {
                $(".checkpassword").text(" Les 2 mots de passes ne correspondent pas")
        } else {
                $(".checkpassword").text(" ")
        }
    })
    $("#confirmpassword").change(function() {
        if($("#password").val() != $("#confirmpassword").val() && $("#password").val() != "" && $("#confirmpassword").val() != "") {
            $(".checkpassword").text(" Les 2 mots de passes ne correspondent pas")
        } else {
            $(".checkpassword").text(" ")
        }
    })
}

function createProfil() {
    $(".send").click(function() {
        prenom = $("#prenom").val();
        nom = $("#nom").val();
        pseudo = $("#pseudo").val();
        age = $("#age").val();
        passwordInput =  $("#password").val()
        confirmedPasswordInput =  $("#confirmpassword").val()
        civilite = $('input[name=sexe]:checked').val()
        if( prenom == "" || nom == "" || pseudo == "" || age == "" || civilite == undefined || passwordInput == "" || confirmedPasswordInput == ""   ) {
            $(".checkpassword").text(" Veuillez remplir tous les champs ")
         } else if(passwordInput != confirmedPasswordInput) {
            $(".checkpassword").text(" Les 2 mots de passes ne correspondent pas ")
         } else {
            $(".checkpassword").text(" ")
            $(".resume").html(civilite +"<br />"+ nom + " " + prenom + "<br /> Pseudo : " + pseudo + "<br />  Age : " + age + "<br /> Mot de passe : " + passwordInput) ;
        }
    })
}

