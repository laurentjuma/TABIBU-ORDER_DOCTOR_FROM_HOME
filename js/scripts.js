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

Doctor.prototype.details = function () {
  return this.firstName + " " + this.lastName + " " + this.email + " " + this.regNo + " " + this.age + " " + this.gender + " " + this.phoneNumber + " " + this.password;
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

Patient.prototype.details = function () {
  return this.firstName + " " + this.lastName + " " + this.email + " " + this.id + " " + this.age + " " + this.gender + " " + this.password;
}

//UI Logic
$(Document).ready(function () {
  //Main Sign Up
  try {
    $("#as-doctor").click(function () {
      location.href = "doctor_signup.html";
    });
  } catch (Exception) {
    console.log("NO");
  }

  try {
    $("#as-patient").click(function () {
      location.href = "patient_signup.html";
    });
  } catch (Exception) {
    console.log("NO");
  }



  //Patient SignUp
  try {
    $("#patient-signup").click(function () {
      event.preventDefault();
      newPatient = new Patient($("#pFirstName").val(), $("#pLastName").val(), $("#pEmail").val(), $("#pAge").val(), $(".pGender").val(), $("#pPassword").val());
      sessionStorage.setItem("pDetails", newPatient.details());
      location.href = "patient_profile.html";
    });

    patientDetails = sessionStorage.getItem("pDetails");
    patientDetailsA = patientDetails.split(" ");

    $(window).on("load", function (e) {
      $("#patient-profile-card-body").remove();
      $(".patient-profile-card-edit").append("<div class='card-body' id='patient-profile-card-body'>" +
        "<span><b>First Name:" + patientDetailsA[0] + "</b></span><br>" +
        "<br>" +
        "<span><b>Second Name:" + patientDetailsA[1] + "</b></span><br>" +
        "<br>" +
        "<span><b>Email Address:" + patientDetailsA[2] + "</b></span><br>" +
        "<br>" +
        "<span><b>Phone Number:" + +"</b></span><br>" +
        "<br>" +
        "<span><b>Age:" + patientDetailsA[3] + "</b></span><br>" +
        "<br>" +

        "</div>" +
        "</div>");
    });
  } catch (Exception) {
    console.log("no");
  }

  //Doctor SignUp
  try {
    $("#doctor-signup").click(function () {
      event.preventDefault();
      newDoctor = new Doctor($("#dFirstName").val(), $("#dLastName").val(), $("#dEmail").val(), $("#kmpdb").val(), $("#dAge").val(), $(".dGender").val(), $("#dPhone").val(), $("#dPassword").val());
      sessionStorage.setItem("dDetails", newDoctor.details());
      location.href = "doctor_profile.html";
    });

    doctorDetails = sessionStorage.getItem("dDetails");
    doctorDetailsA = doctorDetails.split(" ");
    $(window).on("load", function (e) {
      $("#doctor-profile-card-body").remove();
      $(".doctor-profile-card-edit").append("<div class='card-body' id='doctor-profile-card-body'>" +
        "<span><b>First Name:" + doctorDetailsA[0] + "</b></span><br>" +
        "<br>" +
        "<span><b>Last Name:" + doctorDetailsA[1] + "</b></span><br>" +
        "<br>" +
        "<span><b>Email Address:" + doctorDetailsA[2] + "</b></span><br>" +
        "<br>" +
        "<span><b>Phone Number:" + doctorDetailsA[6] + "</b></span><br>" +
        "<br>" +
        "<span><b>Age:" + doctorDetailsA[4] + "</b></span><br>" +
        "<br>" +
        "<span><b>K.M.P.D.B:" + doctorDetailsA[3] + "</b></span><br>" +
        "<br><br>" +
        "</div>" +
        "</div>");
    });
  } catch (Exception) {
    console.log("Yes");
  }


});