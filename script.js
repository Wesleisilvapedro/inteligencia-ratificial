const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
   {
       enunciado: "Você está começando uma lavoura de soja em uma nova área. Qual é a sua primeira ação?",
       alternativas: [
           {
               texto: "Realizar um estudo do solo para verificar suas condições.",
               afirmacao: "Você priorizou a análise do solo para garantir uma lavoura saudável."
           },
           {
               texto: "Comprar sementes e iniciar o plantio imediatamente.",
               afirmacao: "Você começou o plantio sem verificar as condições do solo, arriscando problemas futuros."
           }
       ]
   },
   {
       enunciado: "Durante a fase de crescimento, você observa que as plantas estão apresentando sinais de pragas. O que você faz?",
       alternativas: [
           {
               texto: "Aplicar pesticidas imediatamente para controlar as pragas.",
               afirmacao: "Você optou por usar pesticidas, o que pode afetar o meio ambiente e a saúde das plantas a longo prazo."
           },
           {
               texto: "Investigar a causa dos sinais e usar métodos de controle integrado de pragas.",
               afirmacao: "Você preferiu um método sustentável para controlar as pragas, minimizando o impacto ambiental."
           }
       ]
   },
   {
       enunciado: "O período de colheita está chegando. Qual estratégia você adota para garantir a melhor colheita possível?",
       alternativas: [
           {
               texto: "Colher em um período mais cedo para garantir a segurança da colheita.",
               afirmacao: "Você priorizou a segurança da colheita, mas pode ter perdido produtividade."
           },
           {
               texto: "Esperar até o momento ideal para garantir o máximo rendimento das sementes.",
               afirmacao: "Você aproveitou ao máximo o potencial da lavoura, otimizando a colheita."
           }
       ]
   },
   {
       enunciado: "Após a colheita, você analisa o resultado e percebe que a produtividade foi menor do que o esperado. O que você faz?",
       alternativas: [
           {
               texto: "Ajustar o manejo da lavoura e começar a planejar para a próxima safra.",
               afirmacao: "Você aprendeu com os resultados e está ajustando suas práticas para melhorar no futuro."
           },
           {
               texto: "Procurar culpados e tentar descobrir falhas na sua equipe de trabalho.",
               afirmacao: "Você focou em encontrar culpados, o que pode não ajudar na melhoria das práticas de cultivo."
           }
       ]
   },
   {
       enunciado: "Você está participando de uma conferência sobre inovações na lavoura de soja. O que mais te interessa?",
       alternativas: [
           {
               texto: "Tecnologias de automação e equipamentos avançados para aumentar a eficiência.",
               afirmacao: "Você está focado em adotar tecnologias para melhorar a eficiência da lavoura."
           },
           {
               texto: "Métodos tradicionais e práticas comprovadas que garantem resultados consistentes.",
               afirmacao: "Você prefere seguir métodos tradicionais, acreditando na sua confiabilidade."
           }
       ]
   },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}


function mostraAlternativas() {
   for (const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}


function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}


function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}


mostraPergunta();





