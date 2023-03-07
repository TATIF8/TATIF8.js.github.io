const numerosRegex=/^[0-9]+$/;
const letras=/^[a-zA-Z]+$/;
function aña(){

    const capital=document.getElementById("capitalaña").value;
    if(numerosRegex.test(capital)){
        let capi=parseFloat(capital)
        alert(capi)
        capi=capi*0.02
        document.getElementById("resultado").value=capi;
    }
    else{

        alert("Ingrese un valor numerico ")

    }
   
    

}

function comision(){
    const sueldo=document.getElementById("vendedor").value;
    if(numerosRegex.test(sueldo)){
        let sueldo=parseFloat(document.getElementById("vendedor").value);
        let comisiones=3*0.10
        let sueldofinal=sueldo*comisiones
        let suma=parseFloat(sueldofinal)+parseFloat(sueldo)
        alert(suma)
        document.getElementById("pagofinal").value=suma;
    }
    else{
        alert("Favor ingresar un valor numerico ")
    }
   

}
function descuento(){

    const pr=document.getElementById("presio").value;
    if(numerosRegex.test(pr)){
    let pr=parseFloat(document.getElementById("presio").value);
    let monto=pr*0.15
    resta=parseFloat(pr) - parseFloat(monto)
    
    document.getElementById("de").value=resta;
    }
    else{
        alert("Ingrese un valor numerico")
    }

}

function cali(){
    const p1=document.getElementById("par1").value;
    const p2=document.getElementById("par2").value;
    const p3=document.getElementById("par3").value;
    const ex=document.getElementById("examenfin").value;
    const tb=document.getElementById("tbfinal").value;
    if(numerosRegex.test(p1)&&numerosRegex.test(p2)&& numerosRegex.test(p2)&& numerosRegex.test(p3)&& numerosRegex.test(ex)&& numerosRegex.test(tb)){
        alert("a")
        p11=parseFloat(document.getElementById("par1").value);
        p22=parseFloat(document.getElementById("par2").value);
        p33=parseFloat(document.getElementById("par3").value);
        exx=parseFloat(document.getElementById("examenfin").value);
        tbb=parseFloat(document.getElementById("tbfinal").value);
        
         par=p11+p22+p33
         par=par*0.55/10
         exx=exx*0.30/10
         tbb=tbb*0.15/10
         fin=par+ex+tb
        alert(fin)
        document.getElementById("finaaal").value=fin;
    
    }else{
        alert("Ingrese valores numericos")
    }
  
}

function porcentajes(){
    const alutt=document.getElementById("estutotal").value;
    const hh=document.getElementById("hombres").value;
    const mm=document.getElementById("mujer").value;
    if(numerosRegex.test(alutt)&& numerosRegex.test(hh)&& numerosRegex.test(mm)){
        if(alutt-hh==mm){
          alut=parseInt(document.getElementById("estutotal").value);
        h=parseInt(document.getElementById("hombres").value);
        m=parseInt(document.getElementById("mujer").value);
        ph=h/alut*100
        pm=m/alut*100
        document.getElementById("hombres%").value=ph
        document.getElementById("mujeres%").value=pm  
        }
        else{
            alert("Ingrese una equivalencia coherente")
        }
    }

    else{
        alert("Ingrese un valor numerico")
    }
    
}
function edaaad(){
    const amoss=document.getElementById("amon").value;
    if(numerosRegex.test(amoss)){
    
    amos=parseInt(document.getElementById("amon").value);
    alert(amos)
    eda=2023-amos
    document.getElementById("edad").value=eda
    }else{
        alert("Ingrese un valor numerico ")
    }

}
function siete(){
    const nn1=document.getElementById("n1").value;
    const nn2=document.getElementById("n2").value;
    if(numerosRegex.test(nn1)&& numerosRegex.test(nn2)){
         n1=parseFloat(document.getElementById("n1").value);
    n2=parseFloat(document.getElementById("n2").value);
    if(n1==n2){
        resu=n1*n2
        document.getElementById("resu").value=resu
    }
    if(n1>n2){
        resu=n1-n2
        document.getElementById("resu").value=resu
    }
    if(n2>n1){
        resu=n1+n2
        document.getElementById("resu").value=resu
    }
    }else{
        alert("Ingrese un valor numerico ")
    }
   
}
function mayor(){
    const nnn1=document.getElementById("nn1").value;
    const nnn2=document.getElementById("nn2").value;
    const nnn3=document.getElementById("nn3").value;
    if(numerosRegex.test(nnn1)&&numerosRegex.test(nnn2)&& numerosRegex.test(nnn3)){
         n1=parseFloat(document.getElementById("nn1").value);
         n2=parseFloat(document.getElementById("nn2").value);
        n3=parseFloat(document.getElementById("nn3").value);
    if(n1>n2){
        if(n1>n3){
            document.getElementById("may").value=n1
        }
        else{
            document.getElementById("may").value=n3

        }
    }
    else{
        if(n2>n3){
            document.getElementById("may").value=n2

        }
        else{
            document.getElementById("may").value=n3

        }
    }
    }else{
        alert("Ingrese un valor numerico")
    }
   
}

function pagoh(){
    const ssu=document.getElementById("salario").value;
    const hho=document.getElementById("horas").value;
    if(numerosRegex.test(ssu)&&numerosRegex.test(hho)){
        su=parseFloat(document.getElementById("salario").value);
        ho=parseFloat(document.getElementById("horas").value);
        if(ho>40 && ho<=48){
            he=ho-40
            ho=ho-he
            he=he*(su*2)
            su=ho*su  
            su=su+he
            document.getElementById("sueldofinal").value=su
        }
        if(ho>48){
            he=ho-40
            he=he*(su*2)  
            he2=ho-48
            ho=ho-he2-8
            he2=he2*(su*3)
            su=ho*su
            su=su+he+he2
            document.getElementById("sueldofinal").value=su
        }
        else{
            su=ho*su
            document.getElementById("sueldofinal").value=su
        }
    }else{
        alert("ingrese un valor numerico")
    }
    

}

function utilidad(){
    const antt=document.getElementById("antiguedad").value;
    const sueldoo=document.getElementById("sul").value;
    if(numerosRegex.test(antt)&& numerosRegex.test(sueldoo)){
    ant=parseFloat(document.getElementById("antiguedad").value);
    sueldo=parseFloat(document.getElementById("sul").value);
    if(ant<1){
        sueldo=sueldo+(sueldo*0.05)
        document.getElementById("utilida").value=sueldo

    }
    if(ant>=1 && ant<2){
        sueldo=sueldo+(sueldo*0.07)
        document.getElementById("utilida").value=sueldo

    }
    if(ant>=2 && ant<5){
        sueldo=sueldo+(sueldo*0.1)
        document.getElementById("utilida").value=sueldo

    }
    if(ant>=5 && ant<10){
        sueldo=sueldo+(sueldo*0.15)
        document.getElementById("utilida").value=sueldo

    }
    if(sueldo>=10){
        sueldo=sueldo+(sueldo*0.20)
        document.getElementById("utilida").value=sueldo

    }
    }else{
        alert("Ingrese valores numericos")
    }
}
