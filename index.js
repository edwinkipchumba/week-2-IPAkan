var CC, YY, MM, d, dayValue;
var dayNames= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames= ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

/*---form validation---*/
function validateInPutForm(){
    var gender = document.getElementsByName("gender");
    if(document.inPutForm.year.value==="" || document.inPutForm.year.value.length !=4 || document.inPutForm.year.value>2500 || document.inPutForm.year.value<=1800){
        alert("please provide a valid year e.g 2021");
        document.inPutForm.year.focus();
    }

};
  else if(document.inPutForm.month.value==="" || isNaN(document.inPutForm.month.value) || document.inPutForm.month.value.length !=2 || document.inPutForm.month.value>12 || document.inPutForm.month.value<=0){
     alert("please provide a valid month from 1 to 12");
     document.inPutForm.month.focus();
 }
 else if(document.inPutForm.day.value==="" || isNaN(document.inPutForm.day.value) || document.inPutForm.day.value.length !=2 || document.inPutForm.day.value>31 || document.inPutForm.day.value<=0){
     alert("please provide a valid days from 1 to 31");
     document.inPutForm.day.focus();
 };
 else if(gender[0].checked===false && gender[1].checked===false){
     alert("you must select either male or female gender");
    return false;
 }
 else{
     return true;
 };
 function getGender(){
    var gender = document.getElementsByName("gender")
    if(gender[0].checked===true){
        var gender ="male"
    }

  else if(gender[0].checked===true){
      var gender ="female"
  }
 
 else{
     return false;
 }


/*---switch for akan names depending the gender---*/
switch(gender().getGender()){
