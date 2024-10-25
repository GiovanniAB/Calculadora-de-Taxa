document.getElementById('calcular'
).addEventListener('click', function() {
  const Valor = parseFloat(document.getElementById('valor').value);
  const NParcelas = parseInt(document.getElementById('NParcelas').value);
  const MaqSelecionada = document.getElementById('maquininha').value;
  const TaxasMaq = {
    Sumup:{
      1:4.30,
      2:6.00,
      3:6.80,
      4:7.70,
      5:8.50,
      6:9.40,
      7:10.30,
      8:11.10,
      9:12.00,
      10:12.80,
      11:13.70,
      12:14.30
    },
    MegaTon:{ 
      1:4.68,
      2:10.38,
      3:12.38,
      4:13.38,
      5:14.38,
      6:15.38,
      7:16.38,
      8:17.38,
      9:18.38,
      10:19.38,
      11:19.38,
      12:19.38
    }
  }
  
  if (NParcelas < 1 || NParcelas > 12 ||isNaN(NParcelas)){
    alert("Por favor insira um numero de parcela valido (entre 1 e 12).")
    return;
  }
  
  const Taxa = TaxasMaq[MaqSelecionada][NParcelas];
  const ValorFinal = Valor/((100 - Taxa)/100)
  const ValorMes = ValorFinal/NParcelas

  // Exibição de Resultado
document.getElementById('ValorFinal').textContent = `R$ ${ValorFinal.toFixed(2)}`;
document.getElementById('ValorMes').textContent = `R$ ${ValorMes.toFixed(2)}`;
const CorpoTabela = document.querySelector('#TabelaResultado tbody');CorpoTabela.innerHTML = "";
const TaxasSelecionadasdas=TaxasMaq[MaqSelecionada];
for (let NParcelas in TaxasSelecionadasdas){
  const Taxa = TaxasSelecionadasdas[NParcelas]
};

for (let NParcelas in TaxasSelecionadasdas){
  const Taxa = TaxasSelecionadasdas[NParcelas]
  const ValorFinal = Valor/((100 - Taxa)/100)
  const ValorMes = ValorFinal/NParcelas
const NovaLinha = CorpoTabela.insertRow();
NovaLinha.insertCell(0).textContent = `R$ ${Valor.toFixed(2)}`;
NovaLinha.insertCell(1).textContent = NParcelas;
NovaLinha.insertCell(2).textContent = `${Taxa}%`
NovaLinha.insertCell(3).textContent = `R$ ${ValorFinal.toFixed(2)}`;
NovaLinha.insertCell(4).textContent = `R$ ${ValorMes.toFixed(2)}`}

document.getElementById('resultado').style.display = 'block'

  console.log("A taxa aplicada é:", Taxa)
  console.log("O Valor final é:", ValorFinal.toFixed(2))
  console.log("O Valor por mes é:", ValorMes.toFixed(2))
}
)