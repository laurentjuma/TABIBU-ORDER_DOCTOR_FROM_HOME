//BUSINESS LOGIC
function Doctor(firstName, lastName, email, regNo, age, gender, phoneNumber, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.regNo = regNo;
    this.age = age;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.password = password;
}

function Patient(firstName, lastName, email, id, age, gender, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.id = id;
    this.age = age;
    this.gender = gender;
    this.password = password;
}

Patient.prototype.details= function() {
    return this.firstName+" "+this.lastName+" "+this.email+" "+this.id+" "+this.age+" "+this.gender+" "+this.password;
}

//UI Logic
$(Document).ready(function () {

    $("#patient-signup-form").submit(function () {
        event.preventDefault();
        newPatient = new Patient($("#pFirstName").val(), $("#pLastName").val(), $("#pEmail").val(), $("#pAge").val(), $("#pDOB").val(), $(".pGender").val(), $("#pPassword").val());
        sessionStorage.setItem("pDetails", newPatient.details());
        location.href = "patient_profile.html";
    });

    patientDetails=sessionStorage.getItem("pDetails");
    patientDetailsA=patientDetails.split(" ");
    $(window).on("load",function(e){
        $("#patient-profile-card-body").remove();
        $(".patient-profile-card-edit").append("<div class='card-body' id='patient-profile-card-body'>"+
        "<span><b>First Name:"+ patientDetailsA[0] +"</b></span><br>"+
        "<br>"+
        "<span><b>Second Name:"+ patientDetailsA[1] +"</b></span><br>"+
        "<br>"+
        "<span><b>Email Address:"+ patientDetailsA[2] +"</b></span><br>"+
        "<br>"+
        "<span><b>Phone Number:"+ +"</b></span><br>"+
        "<br>"+
        "<span><b>Age:"+ patientDetailsA[3] +"</b></span><br>"+
        "<br>"+
        
      "</div>"+
    "</div>");
      });

});