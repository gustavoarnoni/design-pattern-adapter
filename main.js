const PessoaCsvAdapter = require('./PessoaCsvAdapter');

const adapter = new PessoaCsvAdapter('./pessoas.csv');
const pessoas = adapter.listarPessoas();

console.log('Lista de Pessoas:');
pessoas.forEach(p => {
  console.log(`Nome: ${p.nome}, Idade: ${p.idade}, Email: ${p.email}`);
});
