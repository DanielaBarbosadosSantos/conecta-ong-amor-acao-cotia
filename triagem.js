function validarCPF(cpf) {
  if (!cpf) return false;
  const limpo = cpf.replace(/\D/g, '');
  return limpo.length === 11;
}

function verificarEstoque(quantidade) {
  if (quantidade <= 0) return 'indisponivel';
  if (quantidade <= 5) return 'alerta_amarelo';
  return 'disponivel';
}

module.exports = { validarCPF, verificarEstoque };