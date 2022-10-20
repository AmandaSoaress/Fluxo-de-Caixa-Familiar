function funcaoDoClick() {

  var renda = [3500, 10400, 1500];
  var somarRenda = 0;
  for (var i in renda) {
    somarRenda += renda[i];  
  }

  var despesas = [2000, 25000, 200, 180, 124, 350, 450, 900, 80, 800];
  var somarDespesas = 0;
  for (var i in despesas) {
    somarDespesas += despesas[i];
  }

  var Mediarenda = somarRenda / renda.length;
  var Mediadespesas = somarDespesas / despesas.length;
 
  document.getElementById("total").innerHTML = somarRenda.toFixed(2)
  document.getElementById("media").innerHTML = Mediadespesas
  console.log(' A sua renda foi ' + somarRenda.toFixed(2) + ' e o valor das suas despesas foi ' + somarDespesas + ' . O seu saldo foi positivo total : R$ 2.124,93.')
  alert(' A sua renda foi ' + somarRenda.toFixed(2) + ' e o valor das suas despesas foi ' + somarDespesas + ' . O seu saldo foi positivo total : R$ 2.124,93. ')
 
}
