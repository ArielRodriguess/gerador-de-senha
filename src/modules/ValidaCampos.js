export default class ValidaCampos {
  static validaCheckBox() {
    const checkBox = document.querySelectorAll(".checkbox")
    const valores = Array.from(checkBox)
    const checks = valores.filter((item) => item.checked === true)
    return checks
  }

  static validaCaracteres() {
    let carecteresUsados = ""

    for (let valor of ValidaCampos.validaCheckBox()) {
      if (valor.classList.contains("adiciona-numeros")) {
        carecteresUsados += "0123456789"
      }
      if (valor.classList.contains("letras-maiusculas")) {
        carecteresUsados += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      }
      if (valor.classList.contains("letras-minusculas")) {
        carecteresUsados += "abcdefghijklmnopqrstuvwxyz"
      }
      if (valor.classList.contains("simbolos")) {
        carecteresUsados += "!@#$%^&*()_+[]{}|;:,.<>?`~"
      }
    }

    return carecteresUsados
  }
}
