const questions = [
    {
        number: 1,
        question: "O que te dá mais satisfação no trabalho?",
        options: [
            { icon: "fa-palette", text: "Ver resultados visuais e interfaces bonitas" },
            { icon: "fa-gear", text: "Organizar sistemas lógicos e eficientes" },
            { icon: "fa-cubes", text: "Encontrar padrões e insights em dados" },
            { icon: "fa-user-group", text: "Liderar equipes e organizar processos" }
        ]
    },
    {
        number: 2,
        question: "Como você prefere resolver um problema?",
        options: [
            { icon: "fa-palette", text: "Desenhando fluxos e criando protótipos visuais" },
            { icon: "fa-gear", text: "Pesquisando a causa raiz em sistemas complexos" },
            { icon: "fa-cubes", text: "Analisando dados, gráficos e estatísticas" },
            { icon: "fa-user-group", text: "Conversando com as pessoas e mediando soluções" }
        ]
    },
    {
        number: 3,
        question: "Qual dessas atividades você faria por diversão?",
        options: [
            { icon: "fa-palette", text: "Customizar a aparência de um app ou site" },
            { icon: "fa-gear", text: "Configurar servidores ou automatizar tarefas" },
            { icon: "fa-cubes", text: "Fazer planilhas e descobrir tendências" },
            { icon: "fa-user-group", text: "Organizar eventos e coordernar grupos" }
        ]
    },
    {
        number: 4,
        question: "O que você mais valoriza em sua carreira?",
        options: [
            { icon: "fa-palette", text: "Criativade e expressão visual" },
            { icon: "fa-gear", text: "Desafios técnicos e arquitetura de sistemas" },
            { icon: "fa-cubes", text: "Tomada de decisões baseada em evidências" },
            { icon: "fa-user-group", text: "Impacto humano e trabalho em equipe" }
        ]
    },
    {
        number: 5,
        question: "Ao aprender algo novo, você prefere:",
        options: [
            { icon: "fa-palette", text: "Ver exemplos visuais e criar algo bonito" },
            { icon: "fa-gear", text: "Entender a teoria por trás e como funciona" },
            { icon: "fa-cubes", text: "Experimentar com números e resultados reais" },
            { icon: "fa-user-group", text: "Aplicar na prática com projetos reais" }
        ]
    }
];

let currentQuestion = 0;
let answers = [];

function updateProgress() {
    const progress = Math.round((currentQuestion / questions.length) * 100);
    document.getElementById('progress').textContent = `${progress}%`;
    document.getElementById('pinicial').textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
    document.getElementById('progress-bar-fill').style.width = `${progress}%`;
}

function renderQuestion() {
    const question = questions[currentQuestion];
    
    document.getElementById('question-number').textContent = question.number;
    document.getElementById('p1').textContent = question.question;
    
    const buttonsContainer = document.getElementById('answer-buttons');
    buttonsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'btn-option';
        button.innerHTML = `<i class="fa-solid ${option.icon}"></i> ${option.text}`;
        button.addEventListener('click', () => selectOption(index));
        buttonsContainer.appendChild(button);
    });
    
    updateProgress();
    document.getElementById('btnf').disabled = true;
}

function selectOption(index) {
    const buttons = document.querySelectorAll('.btn-option');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');
    
    document.getElementById('btnf').disabled = false;
}

function nextQuestion() {
    const selectedButton = document.querySelector('.btn-option.selected');
    if (!selectedButton) return;
    
    const selectedIndex = Array.from(document.querySelectorAll('.btn-option')).indexOf(selectedButton);
    answers.push({
        question: currentQuestion + 1,
        answer: selectedIndex,
        text: questions[currentQuestion].options[selectedIndex].text
    });
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        renderQuestion();
    } else {
        window.answers = answers;
        window.location.href = '../../../results/templates/frontEnd.html';
    }
}

document.getElementById('btnf').addEventListener('click', nextQuestion);

renderQuestion();