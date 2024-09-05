// Jorge Guilherme Bernardi - 2° Semestre DSM

// 1° Erro: Declaração de Variáveis
// Correção das variavéis

const y = 5;
let x = 5;
x += 10

//Criação da função para realizar a soma...

function somar() {

  //2° Erro: Formulação da conta, faltava o 'const' 
  // Calculando a soma

  const r = x + y;

  //3° Erro: Não estava retornando o resultado da variável
  // Retornando o resultado
  
  return r;
}

// Exibindo o resultado no console
console.log(somar());