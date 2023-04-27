let numero = prompt("Ingrese un numero");
let n1;
function esNarciso(n1){
    n1 = numero.split("");
    console.log(n1);
    let numero_n = [n1.length];
    let suma = 0;
    for(let i=0; i<n1.length; i++){
        numero_n[i] = Math.pow(n1[i], 3);
        suma += numero_n[i];
    }
    return suma;
}
if(esNarciso(n1) == numero){
    document.write(numero + " es un numero narcisista.")
}else{
    document.write(numero + " no es un numero narcisista.")
}
