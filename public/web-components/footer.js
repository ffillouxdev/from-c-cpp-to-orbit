class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="layout__footer">
        <img class="layout__footer-logo" src="./assets/imgs/logo-icon.png" alt="Logo du site représentant une fusée" />
        <nav class="layout__nav2">
          <a href="index.html">Accueil</a>
          <a href="#top">Aller en haut</a>
        </nav>
      </footer>
    `;

    const style = document.createElement('style');
    style.textContent = `
      .layout__nav2 {
        display: flex;
        flex-direction : row;
        gap: 1rem;
      }

      .layout__nav2 a {
        color: var(--primary-text-color);
        text-decoration: none;
        font-weight: 600;
      }

      .layout__nav a:hover {
        text-decoration: underline;
      }
    `;
    this.appendChild(style);
  }
}

customElements.define('site-footer', SiteFooter);
