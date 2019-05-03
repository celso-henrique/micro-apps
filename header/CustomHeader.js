class CustomHeader extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        header {
          background: white;
          text-align: left;
        }
        a {
          line-height: 20px;
          padding: 20px;
          display: inline-block;
          text-decoration: none;
          color: red;
        }
        a:hover {
          background: red;
          color: white;
        }
      </style>
      <header>
        <a href="/">Angular</a>
        <a href="/react">React</a>
        <a href="/vue">Vue</a>
      </header>
    `
  }
}

customElements.define('custom-header', CustomHeader)
