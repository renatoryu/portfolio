const projects = [
  {
    number: '02',
    name: 'Sales Dashboard',
    path: null,
    kind: 'REACT · VITE · CHART.JS',
    blurb: 'Dashboard analítico com filtros em cascata e visualização dinâmica de dados.',
    accent: 'dashboard',
    note: 'dados → decisão',
  },
  {
    number: '03',
    name: 'ChefAI Gourmet',
    path: 'ChefAIGourmet',
    kind: 'PYTHON · IA GENERATIVA',
    blurb: 'Um assistente culinário que transforma ingredientes disponíveis em receitas possíveis.',
    accent: 'ai',
    note: 'ingredientes → ideia',
  },
  {
    number: '04',
    name: 'Vueflix',
    path: 'Vueflix',
    kind: 'VUE.JS · LOCALSTORAGE',
    blurb: 'Catálogo pessoal de filmes com filtros, avaliações e persistência no navegador.',
    accent: 'vue',
    note: 'filmes → coleção',
  },
  {
    number: '05',
    name: 'Supermarket',
    path: 'Supermarket',
    kind: 'JAVA · POO',
    blurb: 'Sistema de gerenciamento de lista de compras com regras claras e foco em orientação a objetos.',
    accent: 'java',
    note: 'lista → organização',
  },
];

const skills = [
  {
    number: '01',
    title: 'Back-end',
    description: 'Onde regras, integrações e dados ganham estrutura.',
    items: ['C#', '.NET 10', 'ASP.NET Core', 'Entity Framework Core', 'FluentValidation', 'Node.js', 'TypeScript', 'Java', 'Python'],
  },
  {
    number: '02',
    title: 'Front-end',
    description: 'Interfaces úteis, responsivas e com intenção visual.',
    items: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'jQuery', 'HTML', 'CSS'],
  },
  {
    number: '03',
    title: 'Dados & SAP',
    description: 'Do modelo à consulta: informação pronta para servir o produto.',
    items: ['SQL Server', 'MySQL', 'Oracle SQL', 'SAP HANA', 'SAP S/4HANA'],
  },
  {
    number: '04',
    title: 'APIs & integrações',
    description: 'Serviços e sistemas diferentes conversando com segurança.',
    items: ['REST APIs', 'SAP OData', 'Mensageria', 'Brokers', 'WhatsApp'],
  },
  {
    number: '05',
    title: 'DevOps & métodos',
    description: 'Código organizado para evoluir junto com o time.',
    items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Azure DevOps', 'CI/CD', 'xUnit', 'Git', 'Scrum'],
  },
  {
    number: '06',
    title: 'IA & automação',
    description: 'Tecnologia conversacional aplicada a problemas reais.',
    items: ['Python', 'Gen AI', 'Chatbots', 'Assistentes virtuais'],
  },
];

const experiences = [
  {
    period: 'DEZ 2025 — AGO 2026',
    role: 'Desenvolvedor Full-Stack (Pleno)',
    company: 'All Tax',
    summary: 'Aplicações fiscais de missão crítica e plataforma de ingestão, transformação e migração de dados para SAP S/4HANA.',
    highlights: ['TypeScript', 'Node.js', 'Express', 'React', 'SAP OData', 'SAP HANA'],
  },
  {
    period: 'OUT 2024 — NOV 2025',
    role: 'Desenvolvedor Full-Stack (Júnior)',
    company: 'Plusoft',
    summary: 'Chatbots e assistentes virtuais corporativos, incluindo mensageria para WhatsApp com mais de 100 mil interações mensais.',
    highlights: ['Java', 'Groovy', 'JavaScript', 'Oracle SQL', 'JIRA', 'Scrum'],
  },
  {
    period: 'SET 2024 — OUT 2024',
    role: 'Desenvolvedor Back-end (Estágio)',
    company: 'DNX',
    summary: 'Aplicações ASP.NET MVC, APIs REST e pipelines que dobraram a velocidade de deploy com mais confiabilidade.',
    highlights: ['C#', '.NET', 'ASP.NET MVC', 'REST APIs', 'Azure DevOps', 'CI/CD'],
  },
  {
    period: 'MAI 2022 — MAI 2024',
    role: 'Desenvolvedor Full-Stack (Estágio)',
    company: 'Tesla Tecnologia e Comunicação',
    summary: 'Mais de 30 melhorias web, ganho de 20% em performance e automações em Python que pouparam mais de 15 horas por semana.',
    highlights: ['.NET', 'JavaScript', 'SQL Server', 'MySQL', 'Python', 'Azure DevOps'],
  },
];

const courses = [
  'POO com C# · Alura',
  'Santander Coders · Ada Tech',
  'Python AI Backend Developer · DIO',
  'IBM Z Xplore · IBM',
  'Python: IA Aplicada',
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <main id="conteudo">
      <nav className="topbar" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Início">
          <span>RC</span><i aria-hidden="true" />
        </a>
        <div className="navlinks">
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#sobre">Sobre</a>
        </div>
        <div className="topbar-actions" aria-label="Perfis profissionais">
          <a className="header-link" href="https://www.linkedin.com/in/renatocaetite" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a className="header-link" href="https://github.com/renatoryu" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="availability-note"><span /> Disponível para novas oportunidades · Set 2026</p>
          <p className="eyebrow">Full-Stack · C# · .NET · APIs · São Paulo</p>
          <h1>Eu transformo<br /><em>problemas</em> em<br />sistemas que funcionam.</h1>
          <p className="intro">
            Sou Renato Caetité Cruz, desenvolvedor full-stack com mais de quatro anos de experiência,
            direcionando minha especialização para C# e .NET sem perder a visão do produto inteiro.
          </p>
          <div className="hero-actions">
            <a className="primary" href="#experiencia">Ver experiência <b>↓</b></a>
            <a className="text-link" href="https://www.linkedin.com/in/renatocaetite" target="_blank" rel="noopener noreferrer">Conhecer no LinkedIn <span>↗</span></a>
          </div>
          <ul className="hero-proof" aria-label="Resultados profissionais em destaque">
            <li><strong>100 mil+</strong><span>interações mensais</span></li>
            <li><strong>20%</strong><span>mais performance</span></li>
            <li><strong>15h</strong><span>poupadas por semana</span></li>
          </ul>
        </div>

        <aside className="signal-card" aria-label="Painel de tecnologias">
          <div className="signal-top"><span>RENATO.EXE</span><span className="live"><i /> ONLINE</span></div>
          <div className="cat-mark" aria-hidden="true">
            <span className="ear left" /><span className="ear right" />
            <div className="cat-face"><i>•</i><b>⌄</b><i>•</i></div>
            <span className="whisker w1" /><span className="whisker w2" />
            <span className="whisker w3" /><span className="whisker w4" />
          </div>
          <p className="code-line"><span>01</span> especialidade = <b>"C# &amp; .NET"</b>;</p>
          <p className="code-line"><span>02</span> stack = [<b>"ASP.NET Core"</b>, <b>"SQL"</b>, <b>"React"</b>];</p>
          <p className="code-line"><span>03</span> experiência = <b>"4+ anos"</b>;</p>
          <div className="signal-bottom"><span>Disponível · set 2026</span><span>∞ curiosidade</span></div>
        </aside>
      </section>

      <div className="tech-ticker" aria-label="Principais tecnologias">
        <span>C#</span><i>✦</i><span>.NET 10</span><i>✦</i><span>ASP.NET Core</span><i>✦</i>
        <span>SQL Server</span><i>✦</i><span>Clean Architecture</span><i>✦</i><span>REST APIs</span><i>✦</i>
        <span>React</span><i>✦</i><span>Docker</span>
      </div>

      <section className="projects-section" id="projetos">
        <header className="section-heading">
          <p><span>01</span> Projetos selecionados</p>
          <h2>Engenharia que vira<br /><em>produto de verdade.</em></h2>
          <p className="section-copy">O FlowDesk concentra a direção que escolhi: backend .NET sólido, produto completo e entrega em produção.</p>
        </header>

        <article className="featured-project">
          <div className="featured-media">
            <img src="/flowdesk-cover.png" width="1600" height="900" alt="FlowDesk — plataforma operacional de gestão de chamados" />
            <span>Projeto principal · 2026</span>
          </div>
          <div className="featured-content">
            <div className="project-meta"><span>01</span><small>C# · .NET 10 · CLEAN ARCHITECTURE</small></div>
            <p className="featured-kicker">Help Desk full-stack em produção</p>
            <h3>FlowDesk</h3>
            <p className="featured-description">Plataforma operacional de chamados com autenticação JWT, perfis de acesso, empresas, dashboard, comentários, anexos e histórico. Da modelagem ao deploy, foi construída para demonstrar engenharia de produto com .NET.</p>
            <div className="featured-results" aria-label="Indicadores técnicos do FlowDesk">
              <div><strong>244</strong><span>testes no backend</span></div>
              <div><strong>84,18%</strong><span>cobertura de linhas</span></div>
              <div><strong>10</strong><span>sprints concluídas</span></div>
            </div>
            <ul className="featured-stack" aria-label="Tecnologias do FlowDesk">
              {['ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'React 19', 'TypeScript', 'Docker', 'GitHub Actions'].map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="featured-actions">
              <a className="primary" href="https://flowdesk-ewe.pages.dev" target="_blank" rel="noopener noreferrer">Abrir demonstração <b>↗</b></a>
              <a className="featured-link" href="https://github.com/renatoryu/flowdesk" target="_blank" rel="noopener noreferrer">Ver código ↗</a>
              <a className="featured-link" href="https://flowdesk-api-renato.runasp.net/swagger" target="_blank" rel="noopener noreferrer">Swagger ↗</a>
            </div>
          </div>
        </article>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className={'showcase-card ' + project.accent} key={project.name}>
              <div className="project-meta">
                <span>{project.number}</span><small>{project.kind}</small>
              </div>
              <div className="project-visual" aria-hidden="true">
                {project.accent === 'dashboard' && (
                  <div className="mini-dashboard">
                    <div className="mini-side"><i /><i /><i /><i /></div>
                    <div className="mini-main">
                      <div className="metric-row"><span /><span /><span /></div>
                      <div className="bars"><i /><i /><i /><i /><i /><i /></div>
                    </div>
                  </div>
                )}
                {project.accent === 'ai' && (
                  <div className="ai-orbit"><span>AI</span><i /><i /><i /></div>
                )}
                {project.accent === 'vue' && (
                  <div className="film-stack"><span>PLAY</span><i /><i /></div>
                )}
                {project.accent === 'java' && (
                  <div className="list-stack"><span /><span /><span /><b>✓</b></div>
                )}
              </div>
              <div className="project-body">
                <small>{project.note}</small>
                <h3>{project.name}</h3>
                <p>{project.blurb}</p>
              </div>
              <a
                className="project-arrow"
                href={project.path ? 'https://github.com/renatoryu/' + project.path : 'https://github.com/renatoryu?tab=repositories'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={'Ver ' + project.name + ' no GitHub'}
              >↗</a>
            </article>
          ))}
        </div>

        <a className="all-projects" href="https://github.com/renatoryu?tab=repositories" target="_blank" rel="noopener noreferrer">
          Ver o repositório <span>GitHub ↗</span>
        </a>
      </section>

      <section className="experience-section" id="experiencia">
        <header className="section-heading">
          <p><span>02</span> Experiência</p>
          <h2>Quatro anos<br /><em>entregando em produção.</em></h2>
          <p className="section-copy">De aplicações .NET a integrações SAP, passando por chatbots em escala, APIs e automação.</p>
        </header>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-row" key={experience.company}>
              <div className="experience-time"><span>{String(index + 1).padStart(2, '0')}</span><small>{experience.period}</small></div>
              <div className="experience-role"><h3>{experience.role}</h3><strong>{experience.company}</strong></div>
              <div className="experience-detail"><p>{experience.summary}</p><ul>{experience.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" id="habilidades">
        <header className="section-heading inverse">
          <p><span>03</span> Habilidades</p>
          <h2>Do banco à tela.<br /><em>Da ideia ao deploy.</em></h2>
          <p className="section-copy">Gosto de entender o sistema inteiro — e aprofundar onde o problema realmente mora.</p>
        </header>

        <div className="skills-list">
          {skills.map((skill) => (
            <article className="skill-row" key={skill.title}>
              <span>{skill.number}</span>
              <div><h3>{skill.title}</h3><p>{skill.description}</p></div>
              <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="sobre">
        <div className="about-aside">
          <p className="section-index"><span>04</span> Sobre mim</p>
          <div className="portrait-code" aria-hidden="true">
            <div className="avatar-ring"><span>RC</span></div>
            <p>const dev = {'{'}</p>
            <p>&nbsp;&nbsp;cidade: "São Paulo",</p>
            <p>&nbsp;&nbsp;experiência: "4+ anos",</p>
            <p>&nbsp;&nbsp;modo: "sempre aprendendo"</p>
            <p>{'}'};</p>
          </div>
        </div>

        <div className="about-copy">
          <p className="big-copy">Tecnologia, para mim, é uma forma de <em>organizar o caos</em> e criar experiências que fazem sentido para quem usa.</p>
          <div className="about-columns">
            <p>Sou tecnólogo em Análise e Desenvolvimento de Sistemas pela FATEC São Paulo. Minha trajetória combina aplicações corporativas, sistemas críticos e produtos digitais.</p>
            <p>Minha base e meu próximo ciclo de especialização estão em C#/.NET. Uso IA como parceira de exploração e revisão, mantendo arquitetura, decisões e validação sob meu critério. Fora do código: livros, mangá, games, cultura pop e gatos.</p>
          </div>
          <div className="facts">
            <div><strong>4+</strong><span>anos de experiência</span></div>
            <div><strong>30+</strong><span>melhorias entregues</span></div>
            <div><strong>EN</strong><span>avançado</span></div>
          </div>
        </div>
      </section>

      <section className="education-section">
        <p className="section-index"><span>05</span> Formação & repertório</p>
        <div className="education-grid">
          <div className="education-main">
            <article><small>2022 — 2025</small><h3>FATEC São Paulo</h3><p>Tecnólogo em Análise e Desenvolvimento de Sistemas</p></article>
            <article><small>2019 — 2022</small><h3>ETEC Jardim Ângela</h3><p>Ensino Médio e Técnico em Desenvolvimento de Sistemas</p></article>
          </div>
          <div className="courses-panel">
            <small>CURSOS & CERTIFICAÇÕES</small>
            <ul>{courses.map((course) => <li key={course}>{course}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-cat" aria-hidden="true"><span>⌃</span><span>• ᴗ •</span><span>⌃</span></div>
        <p>Aberto a novas oportunidades · setembro de 2026</p>
        <h2>Vamos construir<br />algo que <em>funcione.</em></h2>
        <div className="contact-actions">
          <a href="mailto:renatocaetite@gmail.com?subject=Oportunidade%20profissional">Falar por e-mail <span>↗</span></a>
          <a href="https://www.linkedin.com/in/renatocaetite" target="_blank" rel="noopener noreferrer">Ver LinkedIn <span>↗</span></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio"><span>RC</span><i /></a>
        <p>Projetado com curiosidade e algumas referências felinas.</p>
        <span>© 2026 Renato Caetité Cruz</span>
      </footer>
      </main>
    </>
  );
}
