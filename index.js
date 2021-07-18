var CC, YY, MM, DD, d, dayValue;
var dayNames= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames= ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function calculateDayValue(){
   CC = parseInt(year.toString())
   YY = parseInt(year.toString())
   MM = parseInt(document.getElementById("month").value);
   DD = parseInt(document.getElementById("date").value);
   d =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7
console.log(d);
return (math.floor(d));
}
/*---form validation---*/
function validate(){
    var gender = document.getElementsByName("gender");
    if(document.myForm.year.value>2300 || document.myForm.year.value<=1800) {
        alert("please provide a valid year e.g 2021");
        document.myForm.year.focus();
        return false;
    }
else if(document.myForm.month.value>12 || document.myForm.month.value<=0){
     alert("please provide a valid month from 1 to 12");
     document.myForm.month.focus();
     return false;
 }
 else if(document.myForm.day.value>31 || document.myForm.day.value<=0){
     alert("please provide a valid days from 1 to 31");
     document.myForm.day.focus();
     return false;
 }
 else if(gender[0].checked===false && gender[1].checked===false){
     alert("you must select either male or female gender");
    return false;
 }
 else{
     return true;
 };
}
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
 
switch(gender().getGender()){
    case "male":
     if(dayValue===1){
         alert("you were born on " + dayNames[0] + " and your akan name is " + maleNames[0] + "!");
     }  
     else if(dayValue===2){
         alert("you were born on" + dayNames[1] + " and your akan name is " + maleNames[1] + "!");
     }
     else if(dayValue===3){
         alert("you were born on" + dayNames[2] + " and your akan name is " + maleNames[2] + "!"); 
     }
     else if(dayValue===4){
         alert("you were born on" + dayNames[3] + " and your akan name is " + maleNames[3] + "!");
     }
     else if(dayValue===5){
         alert("you were born on" + dayNames[4] + " and your akan name is " + maleNames[4] + "!");
     }
     else if(dayValue===6){
         alert("you were born on" + dayNames[5] + " and your akan name is " + maleNames[5] + "!");
     }
     else if(dayValue===-0){
         alert("you were born on" + dayNames[6] + " and your akan name is " + maleNames[6] + "!");
     }
     break;
    case "female":
        if(dayValue===1){
         alert("you were born on" + dayNames[0] + " and your akan name is " + femaleNames[0] + "!");
        }
        else if(dayValue===2){
        alert("you were born on" + dayNames[1] + " and your akan name is " + femaleNames[1] + "!");
        }
        else if(dayValue===3){
        alert("you were born on" + dayNames[2] + " and your akan name is " + femaleNames[2] + "!");
        }
        else if(dayValue===4){
         alert("you were born on" + dayNames[3] + " and your akan name is " + femaleNames[3] + "!");
        }
        else if(dayValue===5){
            alert("you were born on" + dayNames[4] + "and your akan name is " + femaleNames[4] +"!");
        }
        else if(dayValue===6){
         alert("you were born on" + dayNames[5] + " and your akan name is " + femaleNames[5] + "!");
        }
        else if(dayValue===-0){
        alert("you were born on" + dayNames[6] + " and your akan name is" + femaleNames[6] + "!");
        }
        break
        default:   
    };
 }
 function validate(){
     dayValue=calculateDayValue();
     getGender();
 }