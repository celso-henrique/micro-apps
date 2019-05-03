class CustomHeader extends HTMLElement {
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        :host() {
          display: block;
        }
        :host([react]) .react, :host([vue]) .vue, :host([angular]) .angular,  a:hover {
          background: red;
          color: white;
        }
        header {
          background: white;
          text-align: left;
          background: #fff;
          display: flex;
          margin: 0;
          border-bottom: 1px solid #f0f0f0;
        }
        a {
          -webkit-font-smoothing: antialiased;
          font-family: arial;
          line-height: 20px;
          display: block;
          width: fit-content;
          padding: 20px;
          text-decoration: none;
          color: red;
        }
      </style>
      <header>
        <a href="/" class="angular">Angular</a>
        <a href="/react" class="react">React</a>
        <a href="/vue" class="vue">Vue</a>
      </header>
    `
  }
}

customElements.define('custom-header', CustomHeader)
