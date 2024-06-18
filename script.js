const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são as possíveis fontes de proteína no futuro?",
        alternativas: [
            "Carne bovina e suína",
            "Vegetais e leguminosas",
            "Frutos do mar e peixes",
            "Todas as alternativas acima"
        ]
    },
    {
        enunciado: 'Qual tecnologia poderia ajudar a garantir a segurança alimentar no futuro?',
        alternativas: [
            'Impressão 3D de alimentos',
            'Agricultura vertical',
            'Cultivo hidropônico',
            'Todas as alternativas acima'
        ]
    },
    {
        enunciado: 'Como a mudança climática pode impactar a disponibilidade de alimentos no futuro?',
        alternativas: [
            'Aumentando a produtividade agrícola',
            'Reduzindo a diversidade de cultivos',
            'Tornando os alimentos mais acessíveis',
            'Não afetará a disponibilidade de alimentos'
        ]
    },
    {
        enunciado: 'Qual é o papel da educação alimentar no futuro?',
        alternativas: [
            'Promover dietas restritivas',
            'Aumentar a conscientização sobre escolhas alimentares saudáveis',
            'Incentivar o consumo excessivo de alimentos processados',
            'Ignorar a importância das escolhas alimentares'
        ]
    },
    {
        enunciado: 'Como podemos garantir a acessibilidade aos alimentos no futuro?',
        alternativas: [
            'Aumentando os preços dos alimentos',
            'Investindo em métodos de produção sustentáveis',
            'Limitando o acesso aos alimentos',
            'Não há necessidade de garantir a acessibilidade aos alimentos'
        ]
    },
    {
        enunciado: 'Qual é o papel da sustentabilidade na alimentação do futuro?',
        alternativas: [
            'Minimizar o desperdício de alimentos e recursos naturais',
            'Maximizar a produção agrícola sem considerar os impactos ambientais',
            'Priorizar lucros imediatos em detrimento da saúde do planeta',
            'Ignorar completamente as preocupações ambientais'
        ]
    },

];


let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();