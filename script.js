function RecarregarPagina() {
  window.location.reload()
}

function ChamadaPrincipal(){
  alert("Bem-vindo à entrega da sprint 1 de Web Development")
  const option = parseInt(prompt("Digite para qual página deseja ir (1 para Login e Cadastro) (2 para Section Impactos):"))
  if(option == 1){
    window.location.href = "./login-cadastro"
  } else if(option == 2){
    window.location.href = "./section-impactos"
  } else {
    alert("Opção inválida.")
    RecarregarPagina()
  }
}