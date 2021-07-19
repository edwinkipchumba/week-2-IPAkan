var gender = document.getElementById("gender");
var CC = document.getElementById("century");
var YY = document.getElementById("year");
var MM = document.getElementById("month");
var DD = document.getElementById("date");
var d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7

function validate(){
    if(CC.value==''){
        alert('Input a valid century value')
        CC.focus();
        return false;
    }
    

     if(YY.value==''){
        alert('please provide a valid year e.g 21')
        return false;
    }
   
    if(MM.value==''|| MM.value>12 || MM.value<1){
        alert('please input a valid month')
        return false;
    }
   
    if(DD.value>=32 || DD.value==''){
        alert('please input a valid number of days')
        return false;
    }

     if(gender.value==''){
        alert("you must select gender");
         return false;
    }   

    var dayNames= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"]; 
    var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames= ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    var dayValue=Math.floor(( ( (CC.value/4) -2*CC.value-1) + ((5*YY.value/4) ) + ((26*(MM.value+1)/10)) + DD.value ) % 7);
    
    //alert(maleNames[2]+' And '+dayNames[4]+' and '+femaleNames)
    if(dayValue ==0 && gender.value=='male'){
        window.alert("Dear User,  Your Akana name is:  "+maleNames[0]+ "\n and you were born on: "+dayNames[0])
        return false
    }
    if(dayValue == 1&& gender.value=='male'){
        window.alert("Dear User,  Your Akana name is:  "+maleNames[1]+ "\n and you were born on: "+dayNames[1])
        return false
    }
    if(dayValue == 2&& gender.value=='male'){
        window.alert("Dear User,  Your Akana name is:  "+maleNames[2]+ "\n and you were born on: "+dayNames[2])
        return false
    }
    if(dayValue == 3&& gender.value=='male'){
        window.alert("Dear User,  Your Akana name is:  "+maleNames[3]+ "\n and you were born on: "+dayNames[3])
        return false
    }
    if(dayValue == 4&& gender.value=='male'){
        window.alert("Dear User,  Your Akana name is:  "+maleNames[4]+ "\n and you were born on: "+dayNames[4])
        return false
    }
    if(dayValue == 5&& gender.value=='male'){
        window.alert("Dear User,  Your Akana name is:  "+maleNames[5]+ "\n and you were born on: "+dayNames[5])
        return false
    }if(dayValue ==6 && gender.value=='male'){
        window.alert("Dear User,  Your Akana name is:  "+maleNames[6]+ "\n and you were born on: "+dayNames[6])
        return false
    }
    if(dayValue ==0 && gender.value=='female'){
        window.alert("Dear User,  Your Akana name is:  "+femaleNames[0]+ "\n and you were born on: "+dayNames[0])
        return false
    }
    if(dayValue == 1&& gender.value=='female'){
        window.alert("Dear User,  Your Akana name is:  "+femaleNames[1]+ "\n and you were born on: "+dayNames[1])
        return false
    }
    if(dayValue == 2&& gender.value=='female'){
        window.alert("Dear User,  Your Akana name is:  "+femaleNames[2]+ "\n and you were born on: "+dayNames[2])
        return false
    }
    if(dayValue == 3&& gender.value=='female'){
        window.alert("Dear User,  Your Akana name is:  "+femaleNames[3]+ "\n and you were born on: "+dayNames[3])
        return false
    }
    if(dayValue == 4&& gender.value=='female'){
        window.alert("Dear User,  Your Akana name is:  "+femaleNames[4]+ "\n and you were born on: "+dayNames[4])
        return false
    }
    if(dayValue == 5&& gender.value=='female'){
        window.alert("Dear User,  Your Akana name is:  "+femaleNames[5]+ "\n and you were born on: "+dayNames[5])
        return false
    }if(dayValue ==6 && gender.value=='female'){
        window.alert("Dear User,  Your Akana name is:  "+femaleNames[6]+ "\n and you were born on: "+dayNames[6])
        return false
    }
 }
 