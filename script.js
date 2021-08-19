function calcular(){
    var n1 = document.getElementById("grade1");
    var n2 = document.getElementById("grade2");
    var n3 = document.getElementById("grade3");
    var x = Number(n1.value);
    var y = Number(n2.value);
    var z = Number(n3.value);
    var m = (x+y+z)/3;
    var result = document.getElementById ("res");

    if(m>=7){
        result.style.color = 'green';
        result.innerHTML = "<br>APROVADO. Parabéns!";                

    }else{
        result.style.color = '#b22222';
        result.style.textAlign = 'center';
        result.style.paddingTop ='none';
        result.innerHTML = "<br>REPROVADO. Tente outra vez na próxima banca degustadora a ser marcada em breve!";       
    }
    
}