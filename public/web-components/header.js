class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="layout__header">
        <img class="layout__header-logo" src="./assets/imgs/logo-icon.png" alt="Logo du site représentant une fusée" />
        <nav class="layout__nav">
          <a href="index.html">Accueil</a>
        </nav>
      </header>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .layout__nav a {
        color: var(--primary-color);
        text-decoration: none;
        transition: transform 0.2s ease-in-out;
      }
      .layout__nav a:hover {
        transform: scale(1.05);
      }
    `;
    this.appendChild(style);
  }
}

customElements.define('site-header', SiteHeader);
