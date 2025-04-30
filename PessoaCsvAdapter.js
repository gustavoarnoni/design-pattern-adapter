const fs = require('fs');
const Pessoa = require('./Pessoa');

class PessoaCsvAdapter {
  constructor(caminhoArquivo) {
    this.caminhoArquivo = caminhoArquivo;
  }

  listarPessoas() {
    const dados = fs.readFileSync(this.caminhoArquivo, 'utf-8');
    const linhas = dados.trim().split('\n').slice(1); // Ignora o cabeçalho

    return linhas.map(linha => {
      const [nome, idade, email] = linha.split(',');
      return new Pessoa(nome.trim(), idade.trim(), email.trim());
    });
  }
}

module.exports = PessoaCsvAdapter;
