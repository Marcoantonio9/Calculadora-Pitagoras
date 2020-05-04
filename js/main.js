function calculandoResultado(num1, num2){
  
  let cat_op = parseInt(document.getElementById('num1').value) 
  let cat_adj = parseInt(document.getElementById('num2').value)

  if(document.getElementById('num1').value === ''){
    alert('Por favor, preencha os campos vázios!')
    document.getElementById('num1').focus()
    document.getElementById('areatexto').value += 'ERRO, operação inválida  \n'
      return false
    
  }else if(document.getElementById('num2').value === ''){
    alert('Por favor, preencha os campos vázios!')
    document.getElementById('num2').focus()
    document.getElementById('areatexto').value += 'ERRO, operação inválida  \n'
      return false
  } 

  let resultado = Math.hypot(cat_op, cat_adj)  
  resultado = document.getElementById('areatexto').value += `h² = ${cat_op}² + ${cat_adj}² = ${(resultado).toFixed(2)} \n` 

  let dados = {
    cat_op: cat_op,
    cat_adj: cat_adj
  }
  console.log(dados)

}

