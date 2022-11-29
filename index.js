//1
const arrayVacio = [];

//2
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3
const arrayNumerosPares = [0, 2, 4 , 6, 8];

//4
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//5
function suma(a, b){
    return a + b;
}

//6
function potenciacion(a, b) {
    return a**b;
}

//7
function separarPalabras(str){
    return str.split(" ");
}

//8
function repetirString(str, num){
    let stringSumada = ""
    for (let i = 0; i < num; i++){
        stringSumada += str;
    }
    return stringSumada;
}

//9
function esPrimo(num){
    for (let i = 2; i < (num/2); i++){
        if (num % i === 0){
            return false;
        } 
    }
    return true;
}

//10
function ordenarArray (arr){
    return arr.sort(function(a, b){
        return a - b;
    });
}

//11
function obtenerPares(arr){
    return arr.filter(number => number % 2 === 0);
}

//12
function pintarArray(arr){
    let solution = arr.toString()
        .split(",")
        .join(", ")
    return '['+solution+']';
}

//13 
function arrayMapi (array, func){
    return array.map(func);
}

//14
function eliminarDuplicados (arr){
    let arraySimp = new Set(arr);
    let set1 = [...arraySimp];
    return set1;
}

//15
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//16
const holaMundo = ["Hola", "Mundo"];

//17
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

//18
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//19
function multiplicacion(a, b){
    return a * b;
}

//20
function division(a, b){
    return a / b;
}

//21
function esPar(num){
    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
}

//22
function resta (a, b){
    return a - b;
}
const arrayFunciones = [suma, resta, multiplicacion];

//23
function ordenarArray2 (arr){
    return arr.sort(function(a, b){
        return b - a;
    });
}

//24
function obtenerImpares(arr){
    return arr.filter(number => number % 2 !== 0);
}

//25
function sumarArray(arr){
    let suma = 0;
    for (let i = 0; i < arr.length; i++){
        suma += arr[i];
    }
    return suma;
}

//26
function multiplicarArray(arr){
    let multiplación = 1;
    for (let i = 0; i < arr.length; i++){
        multiplación *= arr[i];
    }
    return multiplación;
}