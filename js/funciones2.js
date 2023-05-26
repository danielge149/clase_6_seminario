function operaciones(){
    let num1, num2;
    num1=parseInt(document.getElementById('numero1').value);
    num2=parseInt(document.getElementById('numero2').value);

    //alert(num1+" - "+num2);

    var suma = num1 + num2
    var resta = num1 - num2
    var mult = num1 * num2
    if (num2!=0){
      var divi = num1 / num2
    }
    else{
        var divi="Division por 0 no existe "
    }
    
    

    alert("la suma es = "+suma + "\n"
        +  "la resta es ="+resta + "\n"
        +  "la multilicacion es ="+mult + "\n"
        +  "la divicion es ="+divi + "\n"
        )
}
