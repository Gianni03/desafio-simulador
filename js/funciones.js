//  Edad

// const anioActual = Number(prompt("Ingrese el año actual"));
// let anioNacimiento = Number(prompt("Ingrese su año de nacimiento", "ej: 1991"));

// function edad(anioActual, anioNacimiento){
//     return "Su edad es " + (anioActual - anioNacimiento) + " años";
// }

// console.log(edad(anioActual,anioNacimiento));
// alert(edad(anioActual,anioNacimiento));

// Sueldo

let sueldoMensual = Number(prompt("Cual es tu sueldo mensual?"));
const sueldosPorAnio = 13;

function sueldoAnual(sueldoMensual, sueldosPorAnio) {
    return sueldoMensual * sueldosPorAnio
}

alert( "usted cobra $" + sueldoAnual(sueldoMensual,sueldosPorAnio) + " anuales");
console.log( "usted cobra $" + sueldoAnual(sueldoMensual,sueldosPorAnio) + " anuales");


let horasTrabajadas = Number(prompt("Entendiendo que usted trabaja de Lunes a Viernes, Cuantas hora por dia Trabaja"));
let diasPorMes = 20;
let horasMensuales = horasPorMes(horasTrabajadas, diasPorMes);
let sueldoDiario = sueldoPorDia(sueldoMensual, diasPorMes);

function horasPorMes(horasTrabajadas, diasPorMes) {
    return horasTrabajadas * diasPorMes;
}
function sueldoPorDia(sueldoMensual, diasPorMes) {
    return sueldoMensual / diasPorMes;
}
function sueldoPorHora(horasMensuales, sueldoMensual) {
    return sueldoMensual / horasMensuales;
}

alert("Usted gana $" + sueldoDiario + " por día")
console.log("Usted gana $" + sueldoDiario + " por día")
alert( "usted gana $" + sueldoPorHora(horasMensuales, sueldoMensual) + " la hora");
console.log( "usted gana $" + sueldoPorHora(horasMensuales, sueldoMensual) + " la hora");

const sueldos = [sueldoAnual(sueldoMensual, sueldosPorAnio), sueldoMensual, sueldoPorDia(sueldoMensual, diasPorMes), sueldoPorHora(horasMensuales, sueldoMensual)] 
console.log(sueldos)




const listaSueldos = [['anual'],['mensual'],['diario'],['por hora']]
let agregarSueldo = listaSueldos[0].push(sueldoAnual(sueldoMensual, sueldosPorAnio))
    agregarSueldo = listaSueldos[1].push(sueldoMensual)
    agregarSueldo = listaSueldos[2].push(sueldoPorDia(sueldoMensual, diasPorMes))
    agregarSueldo = listaSueldos[3].push(sueldoPorHora(horasMensuales, sueldoMensual))

const salarios = ()=> {
        for (const sueldos of listaSueldos) { 
            const liSueldo = document.createElement("li")
            const salarios = document.getElementById("salarios")
                liSueldo.innerText = sueldos
                salarios.append(liSueldo)
        }
    }
    
salarios()


console.log(listaSueldos)
console.table(listaSueldos)

listaSueldos.shift()
console.table(listaSueldos)









