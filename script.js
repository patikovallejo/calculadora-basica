function agregar(valor) {
  document.getElementById('resultado').value += valor;
}
function limpiar() {
  document.getElementById('resultado').value = '';
}
function calcular() {
  try {
    let resultado = eval(document.getElementById('resultado').value);
    document.getElementById('resultado').value = resultado;
  } catch (e) {
    alert('Operación inválida');
  }
}