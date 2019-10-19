/* eslint-disable no-underscore-dangle */
const template = document.createElement('template')
template.innerHTML = `
    <style>
    svg {
        fill: white;
    }
    
    .chat-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 67px;
        background-color: rgb(143, 43, 186);
    }
    
    .chat-title {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: white;
        font-weight: bold;
        flex-grow: 1;
        text-align: center; 
    }
    
    .back-button {
        position: relative;
        padding: 20px 15px 20px 15px;
    }
    
    .back-button:hover svg {
        fill: black;
    }
    
    .search-button {
        position: relative;
        padding: 20px 25px 20px 25px;
    }
    
    .search-button:hover svg {
        fill: black;
    }
    
    .menu-button {
        position: relative;
        padding: 20px 25px 20px 25px;
    }
    
    .menu-button:hover svg {
        fill: black;
    }

    </style>
    <div class="chat-header">
        <div class="back-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
        </div>
        <span class="chat-title">Dolan Dark</span>
        <div class="search-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg>
        </div>
        <div class="menu-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>
        </div>
    </div>
`

class ChatHeader extends HTMLElement {
  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))

    this.$back = this.shadowRoot.querySelector('back-button')
    this.$menu = this.shadowRoot.querySelector('menu-button')
    this.$search = this.shadowRoot.querySelector('search-button')
  }

  static get observedAttributes() {
    return ['name', 'value']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$back.setAttribute(name, newValue)
    this.$menu.setAttribute(name, newValue)
    this.$search.setAttribute(name, newValue)
  }
}

customElements.define('chat-header', ChatHeader)
