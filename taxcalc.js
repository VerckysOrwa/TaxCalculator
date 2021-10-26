
    document.getelementbyid("res").value;
    document.getelementbyid("res2").value;
        document.getElementById("price").value;
function par(){
    var tax1=(price.value*15/100);
    var bs1=price.value-tax1;
    var tax2=(price.value*10/100);
    var bs2=price.value-tax2;
    if(price.value>=20000&&price.value!==null&&price.value!==""){
   res.value=document.querySelector('input').innerHTML="\your tax is-"+tax1; 
   res2.value=document.querySelector('input').innerHTML="your basic salary is-"+bs1;
return false;
    }
    else if(price.value<20000&&price.value!==null&&price.value!=="") {
        res.value=document.querySelector('input').innerHTML="\tyour tax is-"+tax2 ;
        res2.value=document.querySelector('input').innerHTML="basic salary is-"+bs2;
        return false;
    }
    else{
        alert("PLEASE ENTER A VALUE");
        return false;
    }
}

