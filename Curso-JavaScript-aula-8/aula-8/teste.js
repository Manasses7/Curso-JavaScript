let temp = window.prompt("Escolha uma unidade de temperatura para converter")
let tempConvert = window.prompt("Deseja converter para qual unidade de temperatura?")
let valTemp = Number(window.prompt("Insira um valor para a conversão"))

if (temp == "kelvin" || "k" ) {
    if (tempConvert == "fahrenheit" || "f" ) {
    console.log((valTemp - 273.15) * (9/5) + 32);
    }   
    if (tempConvert == "celsius" || "c" ) {
    console.log(valTemp - 273.15);
    }
}