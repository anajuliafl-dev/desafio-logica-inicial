let vitorias = 98
let derrotas = 34

function resultadoVitorias (vitorias, derrotas){
    let resultado = vitorias - derrotas;
    let nivel = "";

    if(resultado < 10){
        nivel = "ferro";
    }else if(resultado >= 11 && resultado <= 20){
        nivel = "bronze";
    }else if(resultado >= 21 && resultado <= 50){
        nivel = "prata";
    }else if(resultado >= 51 && resultado <= 80){
        nivel = "ouro";
    }else if(resultado >= 81 && resultado <= 90){
        nivel = "diamante";
    }else if(resultado >= 91 && resultado <= 100){
        nivel = "lendário";
    }else{
        nivel = "imortal";
    }

    return "O Herói tem saldo de " + resultado + " e está no nível de " + nivel;
}

for (let i = 1; i <= 3; i++) {
    console.log(resultadoVitorias(vitorias, derrotas));
}
