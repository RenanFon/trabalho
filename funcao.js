/** Função para adicionar caracteres */
function addChar(input, character) {
  if (input.value == null || input.value == "0")
    input.value = character
  else
    input.value += character
}
/**Função para encopntrar a raiz quadrada*/
function sqrt(form) {
  form.display.value = Math.sqrt(form.display.value);
}
/**função para econtrar o logaritmo natural*/
function ln(form) {
  form.display.value = Math.log(form.display.value);
}
/**função para econtrar o logaritmo*/
function log(form) {
  form.display.value = Math.log10(form.display.value);
}
/** Função para elevar um valor base a um expoente informados */
function xElevadoAY(str) {
  var base = '', expoente = '', resultado = '';
  var ocupa = str.length, l = 0;
  do {
    base += str.charAt(l);
    l++;
  }
  while (str.charAt(l) != "^");

  do {
    expoente += str.charAt(l + 1);
    l++;
  }
  while (l < ocupa);
  resultado = Math.pow(base, expoente);

  return resultado;
}
/** Função para calcular o 10 elevado a um número */
function dezElevado(form) {
  form.display.value = Math.pow(10, form.display.value);
}
/** Função para colocar caracteres no display */
var v = 0.0;
function mudaExp(input) {
  v = input.value;
  input.value = input.value + ",e+";
}
/** Função para retornar um valor dividido por um */
function umBarraX(form) {
  form.display.value = (1 / form.display.value);
}
/** Função para retornar o módulo de um número */
function modX(form) {
  form.display.value = Math.abs(form.display.value);
}
function deleteChar(input) {
  input.value = input.value.substring(0, input.value.length - 1)
}
var val = 0.0;
/**Função para encontrar o valor de porcentagem*/
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}
//**Função para deixar numero negativo ou positivo*/
function changeSign(input) {
  if (input.value.substring(0, 1) == "-")
    input.value = input.value.substring(1, input.value.length)
  else
    input.value = "-" + input.value
}
/**Função para calcular os valores de operadores matematicos digitados no input por exemplo 2 * 2= 4 
     * evita a reescrita de funções
    */
function compute(form) {
  str = form.display.value;
  var novaString;
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch < "0" || ch > "9") {
      if (ch == "e") {
        novaString = retirarCaracteres(str);
        form.display.value = concatenarZeros(novaString);
      }
      if (ch == "m") {
        novaString = retirarCaracteres(str);
        form.display.value = calcularModulo(novaString);
      }
      if (ch == "^") {
        form.display.value = xElevadoAY(str);
      }
    }
  }
  form.display.value = eval(form.display.value);
}
/** Função para adicionar os zeros da função exp */
function concatenarZeros(str) {
  var valor = '', c = 0;
  var tamanho = str.length;
  do {
    valor += str.charAt(c);
    c++;
  }
  while (str.charAt(c) != "p");
  var numZeros = '';
  do {
    numZeros += str.charAt(c + 1);
    c++;
  }
  while (c < tamanho);

  for (var j = 0; j < numZeros; j++) {
    valor += "0";
  }
  return valor;
}
/**  Função para retornar o módulo de uma divisão*/
function calcularModulo(str) {
  var valor1 = '', valor2 = '', resultado, k = 0;
  var tam = str.length;
  do {
    valor1 += str.charAt(k);
    k++;
  }
  while (str.charAt(k) != "p");

  do {
    valor2 += str.charAt(k + 1);
    k++;
  }
  while (k < tam);

  resultado = valor1 % valor2;

  return resultado;
}
/* Função para retirar caracteres que não são utilizados*/ 
function retirarCaracteres(str) {
  str = str.replace('e', '');
  str = str.replace(',', 'p');
  str = str.replace('+', '');
  str = str.replace("m", 'p');
  str = str.replace("o", '');
  str = str.replace("d", '');
  return str;
}
/**Função para econtrar o valor ao quadrado*/
function square(form) {
  form.display.value = eval(form.display.value) * eval(form.display.value)
}
/* Função para calcular o fatorial do valor*/
function fatorial(form) {
  var valor = form.display.value;
  if (valor < 0) {
    form.display.value = Error;
  } else if ((valor == 0) || (valor == 1)) {
    form.display.value = 1;
  } else {
    var acumula = 1;
    for (x = valor; x > 1; x--) {
      acumula = acumula * x;
    }
    form.display.value = acumula;
  }
}
/**A função chenum valida nosso formulario*/
function checkNum(str) {
  /** para i = 0 até o valor do tamanho da string o valor de i é incrementado em 1*/
  for (var i = 0; i < str.length; i++) {
    /** pega o valor da variavel na posição i*/
    var ch = str.charAt(i);
    /**compara se o o digito da variavel ch está entre 0 e 9 */
    if (ch < "0" || ch > "9") {
       /** verifica se o caracter na variavel ch é um operador*/
      if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
        && ch != "(" && ch != ")" && ch != "%" && ch != "," && ch != "e" && ch != "m"
        && ch != "o" && ch != "d" && ch != "^") {
        alert("Digite uma operação valida")
        return false
      }
    }
  }
  return true
}