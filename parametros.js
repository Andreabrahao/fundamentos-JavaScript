function soma(x = 0, y = 0){
    return x + y;
}

function multiplicacao(x = 1, y = 1){
    return x * y;
}

function divisao(x = 1, y = 1){
    return x / y;
}

function subtracao(x = 0, y = 0){
    return x - y;
}

function nomeIdade(nome, idade){
    return `meu nome e ${nome} e minha idade e ${idade}`;
}

console.log(nomeIdade("Andre", 28));
console.log(subtracao(60, 30));
console.log(divisao(10, 2));
console.log(multiplicacao(2, 2));
console.log(soma(4, 5));

console.log(multiplicacao(soma(4, 5), soma(3, 3)));