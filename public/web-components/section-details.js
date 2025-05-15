class SectionDetails extends HTMLElement {
  constructor() {
    super();
    const projects = [
      {
        title: "GestionAir",
        link: "gestion-air.html"
      },
      {
        title: "OrbitSimulator",
        link: "orbit-sim.html"
      },
    ];

    const shadow = this.attachShadow({ mode: 'open' });

    const details = document.createElement('details');
    details.className = 'section-details';
    details.open = true;

    const titleAttr = this.getAttribute('title') || 'Section';

    const summary = document.createElement('summary');
    if(titleAttr.toUpperCase() === 'PROJETS') {
      summary.textContent = 'PROJETS';
    } else {
      summary.textContent = titleAttr;
    }

    const content = document.createElement('div');
    if(titleAttr.toUpperCase() === 'PROJETS') {
      const projectListHTML = projects.map(p => `<li><a href="${p.link}" target="_blank">${p.title}</a></li>`).join('');
      content.innerHTML = `<ul>${projectListHTML}</ul>`;
    } else if(titleAttr.toUpperCase() === 'INTRODUCTION') {
      content.innerHTML = `
        <ul>
          <li><a href="#lycee">Premiers pas au lycée</a></li>
          <li><a href="#but1">Premiers pas en BUT 1</a></li>
          <li><a href="#spatial1">Premiers pas dans le spatial</a></li>
          <li><a href="#mai2025">Réappropriation du C / C++</a></li>
        </ul>
      `;
    } else {
      content.innerHTML = `<p>Contenu non défini pour cette section.</p>`;
    }

    const style = document.createElement('style');
    style.textContent = `
      ul {
        display: flex;     
        flex-direction: column;  
        gap: 1rem;
      }
      a {
        color: white;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `;

    details.appendChild(summary);
    details.appendChild(content);
    shadow.append(style, details);
  }
}

customElements.define('section-details', SectionDetails);
