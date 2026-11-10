const { validarCPF, verificarEstoque } = require('./triagem');

describe('Suíte de Testes - MVP Conecta ONG Cotia', () => {
  test('Deve validar CPF correto com 11 dígitos', () => {
    expect(validarCPF('123.456.789-00')).toBe(true);
  });

  test('Deve rejeitar CPF com formato ou tamanho inválido', () => {
    expect(validarCPF('123.456')).toBe(false);
  });

  test('Deve retornar indisponível para estoque zero ou negativo', () => {
    expect(verificarEstoque(0)).toBe('indisponivel');
  });

  test('Deve disparar alerta amarelo para estoque crítico (<= 5)', () => {
    expect(verificarEstoque(3)).toBe('alerta_amarelo');
  });

  test('Deve confirmar estoque disponível para quantidade adequada (> 5)', () => {
    expect(verificarEstoque(12)).toBe('disponivel');
  });
});