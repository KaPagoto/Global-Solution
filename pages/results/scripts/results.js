const profiles = {
    frontend: {
        id: 'frontend',
        icon: '🎨',
        title: 'Desenvolvedor(a) Front-End',
        description: 'Você é criativo e gosta de ver resultados visuais! Como Front-End Developer, você será responsável por criar interfaces bonitas, responsivas e intuitivas que os usuários adoram usar.',
        salary: 'R$ 4.000 - R$ 12.000',
        demand: 'Muito Alta',
        learningTime: '6 - 12 meses',
        roadmap: [
            { number: 1, title: 'Fundamentos Web', description: 'Aprenda HTML, CSS e JavaScript - a base de tudo na web', time: '2–3 meses' },
            { number: 2, title: 'Frameworks Modernos', description: 'Domine React, Vue ou Angular para criar aplicações profissionais', time: '3–4 meses' },
            { number: 3, title: 'Design & UX', description: 'Entenda princípios de design, acessibilidade e experiência do usuário', time: '1–2 meses' },
            { number: 4, title: 'Portfólio & Prática', description: 'Construa projetos reais e prepare seu portfólio para o mercado', time: '2–3 meses' }
        ],
        skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Git', 'Responsive Design', 'UI/UX Básico'],
        resources: [
            { title: 'FreeCodeCamp', description: 'Curso Gratuito', url: 'https://www.freecodecamp.org' },
            { title: 'MDN Web Docs', description: 'Documentação', url: 'https://developer.mozilla.org/pt-BR' },
            { title: 'React - Documentação Oficial', description: 'Docs', url: 'https://pt-br.react.dev/learn' },
            { title: 'Frontend Mentor', description: 'Prática', url: 'https://www.frontendmentor.io' }
        ],
        cssFile: './css/frontEnd.css'
    },
    backend: {
        id: 'backend',
        icon: '⚙️',
        title: 'Desenvolvedor(a) Back-End',
        description: 'Você pensa de forma lógica e gosta de resolver problemas complexos! Como Back-End Developer, você construirá a arquitetura que faz tudo funcionar nos bastidores.',
        salary: 'R$ 5.000 - R$ 15.000',
        demand: 'Muito Alta',
        learningTime: '8 - 14 meses',
        roadmap: [
            { number: 1, title: 'Fundamentos de Programação', description: 'Domine os fundamentos: algoritmos, estruturas de dados e lógica', time: '2–3 meses' },
            { number: 2, title: 'Escolha uma Linguagem', description: 'Python, Java, Node.js ou C# — escolha e aprofunde-se', time: '3–4 meses' },
            { number: 3, title: 'Banco de Dados', description: 'Aprenda SQL, NoSQL e como estruturar dados de forma eficiente', time: '2–3 meses' },
            { number: 4, title: 'APIs & Cloud', description: 'Crie APIs REST, entenda deploy e serviços em nuvem (AWS/Azure)', time: '2–4 meses' }
        ],
        skills: ['Python/Java/Node.js', 'SQL & NoSQL', 'APIs REST', 'Git', 'Docker', 'Cloud (AWS/Azure)', 'Segurança', 'Testes'],
        resources: [
            { title: 'Python.org - Tutorial', description: 'Curso Gratuito', url: 'https://www.python.org/about/gettingstarted/' },
            { title: 'Node.js Docs', description: 'Documentação', url: 'https://nodejs.org/en/docs' },
            { title: 'SQLBolt', description: 'Prática SQL', url: 'https://sqlbolt.com/' },
            { title: 'AWS Free Tier', description: 'Cloud Gratuito', url: 'https://aws.amazon.com/free/?trk=ps_a134p000006x0KnAAI&trkCampaign=acq_paid_search_brand&sc_channel=ps' }
        ],
        cssFile: './css/backEnd.css'
    },
    datascience: {
        id: 'datascience',
        icon: '📊',
        title: 'Cientista de Dados',
        description: 'Você adora números, padrões e insights! Como Data Scientist, você transformará dados brutos em decisões estratégicas que mudam negócios e vidas.',
        salary: 'R$ 6.000 - R$ 18.000',
        demand: 'Altíssima',
        learningTime: '10 - 16 meses',
        roadmap: [
            { number: 1, title: 'Python & Estatísticas', description: 'Aprenda Python e os fundamentos de estatística e probabilidade', time: '3–4 meses' },
            { number: 2, title: 'Análise de Dados', description: 'Domine Pandas, NumPy e visualização de dados com Matplotlib', time: '2–3 meses' },
            { number: 3, title: 'Machine Learning', description: 'Entenda algoritmos de ML, scikit-learn e casos de uso reais', time: '3–5 meses' },
            { number: 4, title: 'Projetos & Portfolio', description: 'Crie projetos com datasets reais e publique no GitHub', time: '2–4 meses' }
        ],
        skills: ['Python', 'SQL', 'Pandas/Numpy', 'Machine Learning', 'Estatísticas', 'Power BI/Tableau', 'Excel Avançado', 'Git'],
        resources: [
            { title: 'Kaggle Learn', description: 'Curso + Datasets', url: 'https://www.kaggle.com/learn' },
            { title: 'Google Data Analytics', description: 'Certificação', url: 'https://grow.google/certificates/data-analytics' },
            { title: 'Scikit-learn Docs', description: 'Documentação', url: 'https://scikit-learn.org/0.21/documentation.html' },
            { title: 'DataCamp', description: 'Plataforma', url: 'https://www.datacamp.com/pt' }
        ],
        cssFile: './css/dataScience.css'
    },
    projectmanager: {
        id: 'projectmanager',
        icon: '👥',
        title: 'Gerente de Projetos Tech',
        description: 'Você é comunicativo e adora organizar! Como Project Manager, você liderará equipes tech, garantindo que projetos sejam entregues no prazo e com qualidade.',
        salary: 'R$ 5.500 - R$ 16.000',
        demand: 'Alta',
        learningTime: '6 - 10 meses',
        roadmap: [
            { number: 1, title: 'Fundamentos de PM', description: 'Aprenda metodologias ágeis (Scrum, Kanban) e gestão tradicional', time: '2–3 meses' },
            { number: 2, title: 'Ferramentas & Processos', description: 'Domine Jira, Trello, Asana e processos de desenvolvimento', time: '1–2 meses' },
            { number: 3, title: 'Soft Skills & Liderança', description: 'Desenvolva comunicação, negociação e gestão de stakeholders', time: '2–3 meses' },
            { number: 4, title: 'Certificações', description: 'Busque certificações como CSPO, PSM ou CAPM para validar expertise', time: '2–3 meses' }
        ],
        skills: ['Scrum/Kanban', 'Jira/Trello', 'Comunicação', 'Liderança', 'Gestão de Riscos', 'Noções de Tech', 'Excel/Power BI', 'Inglês'],
        resources: [
            { title: 'Scrum.org - Guia Oficial', description: 'Curso Gratuito', url: 'https://www.scrum.org/resources/scrum-guide' },
            { title: 'Google Project Management', description: 'Certificação', url: 'https://www.google.com/search?client=opera-gx&q=Google+Project+Management&sourceid=opera&ie=UTF-8&oe=UTF-8&sei=tD0habKeEJ-v1sQPpMe60Q0' },
            { title: 'Atlassian University', description: 'Curso Jira', url: 'https://community.atlassian.com/learning/catalog?product=Jira' },
            { title: 'PMI - CAPM', description: 'Certificação', url: 'https://www.pmi.org/certifications/certified-associate-capm' }
        ],
        cssFile: './css/projectManager.css'
    }
};

function getRandomProfile() {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    
    const profileMap = {
        1: 'frontend',
        2: 'backend',
        3: 'datascience',
        4: 'projectmanager'
    };
    
    return profileMap[randomNumber];
}

function loadCSS(cssFile) {
    const link = document.getElementById('profile-css');
    link.href = cssFile;
}

function renderProfile(profile) {
    document.getElementById('title-icon').textContent = profile.icon;
    document.getElementById('section-subtitle').innerHTML = `${profile.title}<br>${profile.description}`;
    document.getElementById('salary-range').textContent = profile.salary;
    document.getElementById('market-demand').textContent = profile.demand;
    document.getElementById('learning-time').textContent = profile.learningTime;
    
    const roadmapContainer = document.getElementById('roadmap-steps');
    roadmapContainer.innerHTML = '';
    profile.roadmap.forEach(step => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'roadmap-step';
        stepDiv.innerHTML = `
            <div class="step-number">${step.number}</div>
            <div class="step-content">
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
            <div class="step-time">${step.time}</div>
        `;
        roadmapContainer.appendChild(stepDiv);
    });
    
    const skillsContainer = document.getElementById('skills-tags');
    skillsContainer.innerHTML = '';
    profile.skills.forEach(skill => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.innerHTML = `<span class="check">✔</span> ${skill}`;
        skillsContainer.appendChild(tag);
    });
    
    const resourcesContainer = document.getElementById('resource-grid');
    resourcesContainer.innerHTML = '';
    profile.resources.forEach(resource => {
        const resourceCard = document.createElement('a');
        resourceCard.href = resource.url;
        resourceCard.target = '_blank';
        resourceCard.className = 'resource-card';
        resourceCard.innerHTML = `
            <div>
                <h3>${resource.title}</h3>
                <p>${resource.description}</p>
            </div>
            <span class="icon">↗</span>
        `;
        resourcesContainer.appendChild(resourceCard);
    });
}

function init() {
    const profileKey = getRandomProfile();
    const profile = profiles[profileKey];
    
    loadCSS(profile.cssFile);
    renderProfile(profile);
}

function restartQuiz() {
    window.location.href = '../questions/questions.html';
}

function goHome() {
    window.location.href = '../../../index.html';
}

init();
