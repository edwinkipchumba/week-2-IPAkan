var dayNames= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames= ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var gender = document.getElementByName("gender");
var CC = document.getElementById("century");
var YY = document.getElementById("year");
var MM = document.getElementById("month").value;
var DD = document.getElementById("date").value;
var d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7
var main = document.getElementByName("main")
function main(){
    if(CC.value=='' || CC.value==null){
        alert('Input a valid century value')
        return false;
    }
    else if(YY.value>23 || YY.value<18){
        alert('please provide a valid year e.g 21')
        return false;
    }
    else if(MM.value>12 || MM.value<=0){
        alert('please input a valid month')
        return false;
    }
    else if(DD.value>31 || DD.value<=0){
        alert('please input a valid number of days')
        return false;
    }
    else if (d.dayValue){
        dayValue=calculateDayValue();
        getGender();
         }
    else if(gender[0].checked==true){
        gender="male"
    }
    else if(gender[1].checked==true){
        gender="female"
    }
    else if(gender[0].checked==false && gender[1].checked==false){
        alert("you must select male or female");
         return false;
    }
    else{
        return true;
    }
 
switch(gender){
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
 