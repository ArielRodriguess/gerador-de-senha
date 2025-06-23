import ValidaCampos from "./ValidaCampos"
export default class GeraSenha {
  constructor() {
    this.botao = document.querySelector(".gerar-senha")
    this.resultado = document.querySelector(".resultado")
  }

  botaoClicado() {
    this.botao.addEventListener("click", (e) => {
      e.preventDefault()
      const senha = this.criaSenha()
      this.resultado.innerHTML = senha
    })
  }

  criaSenha() {
    let senha = ""
    const comprimentodaSenha = Number(
      document.querySelector(".numero-caracteres").value
    )

    if (comprimentodaSenha < 4 || comprimentodaSenha > 32) {
      return (this.resultado.innerHTML =
        "Senha deve ter entre 4 e 32 caracteres")
    }

    if (ValidaCampos.validaCheckBox().length === 0) {
      return (this.resultado.innerHTML = "Selecione pelo menos uma opção")
    }
    const caracteres = ValidaCampos.validaCaracteres()

    for (let i = 0; i < comprimentodaSenha; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }

    return senha
  }
}
