// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'Fabio', nota: 8 },
    { nome: 'Ezequiel', nota: 5 },
    { nome: 'Derick', nota: 7 },
    { nome: 'josiane', nota: 4 },
    { nome: 'Mayeli', nota: 6 }
];

// vai retornar alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// exibindo os alunos aprovados
const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
