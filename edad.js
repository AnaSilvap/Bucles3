nombres= ["Nicolas","Jorge","Samuel","Jacobo","Mateo","Daniela","Sofia","Mariana","Gabriela","Juana","Ana","Juan Daniel","Tomas","Sergio","Jose","Daniel","Francisco"]
edades=[]
suma=0
for(let i=0; i < 17;i++){
    do {
    edad=Number(prompt(`Escriba la nota de ${nombres[i]}`))
    } while (isNaN (edad)||edad <10||edad>20);
    edades.push(edad)
}
for ( let i = 0; i <17; i++) {
    suma=suma+edades[i];  
}
promedio=suma/17
let contenedor = document.querySelector("#contenedor");
contenedor.innerHTML = "El promedio de las edades es "+promedio;