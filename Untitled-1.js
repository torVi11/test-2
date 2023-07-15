//Funcão para adicionar dois números
function adicionar(num1, num2) {
    return num1 + num2;
}

//Função para subtrair dois números 
function subtrair(num1, num2) {
    return num1 - num2;
}

//Função para multiplicar dois números
function multiplicar(num1, num2) {
    return num1 * num2;
}

//Função para dividir dois números
function dividir(num1, num2) {
    //Verificar se o divisor é zero 
    if (num2 === 0) {
        return "Erro: divisão por zero não é possível";
    } 

    return num1 / num2;
}

//Função para calcular com base no operador selecionado
function calcular(num1, num2, operador) {
    switch (operador) {
        case "+":
            return adicionar(num1, num2);
            case "-":
                return subtrair(num1, num2);
                case "*":
                return multiplicar(num1, num2);
                case "/":
                    return dividir(num1, num2);
                    defalut:
                    return "Operador inválido";
    }
}

//Exemplo de uso da calculadora
const numero1 = 
parseFloat(prompt("Digite o primeiro número:"));
const numero2 =
parseFloat(prompt("Digite o segundo número:"));
const operador = prompt("Digite o operador (+, -, *, /):");

const resultado = calcular(numero1, numero2, operador);

console.log(`Resultado: $ {resultado}`)