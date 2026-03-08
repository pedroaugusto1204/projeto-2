const vitorias = 87
const derrotas = 12

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = (vitorias - derrotas)
    let rank = ""
    if (vitorias < 10) {
        rank = " ferro "
    }
    else if (vitorias >= 11 && vitorias <= 20) {
        rank = " bronze "
    }
    else if (vitorias >= 21 && vitorias <= 50) {
        rank = " prata "
    }
    else if (vitorias >= 51 && vitorias <= 80) {
        rank = " ouro "
    }
    else if (vitorias >= 81 && vitorias <= 90) {
        rank = " diamante "
    }
    else if (vitorias >= 91 && vitorias <= 100) {
        rank = " lendaria "
    }
    else {
        rank = " imortal "
    }
    return { saldoVitorias, rank }
}

let resultado = calcularNivel(vitorias, derrotas)

console.log("O Herói tem de saldo de " + resultado.saldoVitorias + " está no nível de" + resultado.rank)